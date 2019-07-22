// visiting each node before visiting it's child nodes.
export const processThenTraverse = ({ dataProcessCallback, targetFunction, aggregator }) => {
  return new Proxy(targetFunction, {
    async apply(target, thisArg, argArray) {
      let { nodeInstance, traversalDepth, eventEmitter } = argArray[0]
      eventEmitter.on('nodeTraversalCompleted', data => {
        // console.log(data.value, ' resolved.')
      })

      let result = await dataProcessCallback(aggregator.value)

      let traversalResultIterator = await Reflect.apply(...arguments)
      for await (let traversalResult of traversalResultIterator) {
        aggregator.merge(traversalResult.result)
      }

      return traversalDepth == 0 ? aggregator.value : aggregator // check if top level call and not an initiated nested recursive call.
    },
  })
}

// vising the node after visiting the child nodes.
export const traverseThenProcess = ({ dataProcessCallback, targetFunction, aggregator }) => {
  return new Proxy(targetFunction, {
    async apply(target, thisArg, argArray) {
      let { nodeInstance, traversalDepth, eventEmitter } = argArray[0]
      eventEmitter.on('nodeTraversalCompleted', data => {
        // console.log(data.value, ' resolved.')
      })

      let traversalResultIterator = await Reflect.apply(...arguments)
      for await (let traversalResult of traversalResultIterator) {
        aggregator.merge(traversalResult.result)
      }

      let result = await dataProcessCallback(aggregator.value)

      return traversalDepth == 0 ? aggregator.value : aggregator // check if top level call and not an initiated nested recursive call.
    },
  })
}

export const conditionCheck = ({ dataProcessCallback, targetFunction, aggregator }) => {
  // Check condition
  async function checkCondition(nodeInstance) {
    // should be executed once for each instance
    // [2] require & check condition
    if (!this.conditionResult) {
      let expectedReturn = this.expectedReturn
      let filePath = this.file.filePath
      let returnedValue = await require(filePath).default(this.portAppInstance)
      if (process.env.SZN_DEBUG == 'true' && this.portAppInstance.context.headers.debug == 'true')
        console.log(`🔀 Comparing conditionKey: ${this.key} ${filePath}. \n • expected: ${expectedReturn} == ${returnedValue}. \n • compare result: ${returnedValue == expectedReturn} \n \n`)
      this.conditionResult = returnedValue == expectedReturn ? true : false
    }
    return this.conditionResult
  }
  return new Proxy(targetFunction, {
    async apply(target, thisArg, argArray) {
      let { nodeInstance, traversalDepth, eventEmitter } = argArray[0]

      let conditionMet // = true // if no unitKey set, then the neseted unit is considered a holder for other nested units and should pass to the nested children.
      conditionMet = true // || (await checkCondition(nodeInstance))

      if (conditionMet) {
        // // [3] Iterate over insertion points
        // let callback
        // callback = await nestedUnitInstance.traversePort({ type: 'returnedFirstValue' })
        // // if all subtrees rejected, get immediate callback
        // if (!callback && 'callback' in nestedUnitInstance) callback = nestedUnitInstance.callback // fallback to immediate callback of instance.

        // // [4] Callback
        // return callback ? callback : false

        await dataProcessCallback(aggregator.value)

        // port traversal implementation.
        // traversePort: async function returnedFirstValue() {
        //   let returned
        //   for (let insertionPoint of this.insertionPoint) {
        //     returned = await iteratePort()
        //     if (returned) break
        //   }
        //   return returned
        // },

        await Reflect.apply(...arguments)
      }
    },
  })
}
