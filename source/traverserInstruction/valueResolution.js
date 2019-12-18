"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolveValue = resolveValue;exports.conditionSubgraphValueResolution = conditionSubgraphValueResolution;exports.conditionSubgraphWithNonBooleanValueResolution = conditionSubgraphWithNonBooleanValueResolution;var _concreteDatabaseWrapper = require("../dataModel/concreteDatabaseWrapper.js");



async function resolveValue({ targetNode, graphInstance, traverseCallContext }) {
  const value = await graphInstance.databaseWrapper.getValueElement({ concreteDatabase: graphInstance.database, nodeID: targetNode.identity });
  if (!value) return;

  let resolvedValue;

  switch (value.connection.properties.implementation) {
    case 'conditionSubgraph':
      assert(!(0, _concreteDatabaseWrapper.isSelfEdge)(value), `• Self-edge for VALUE connection with "conditionSubgraph" implementation, currently not supported, as it causes infinite loop.`);
      resolvedValue = await conditionSubgraphValueResolution({ value, graphInstance, traverseCallContext });
      break;
    case 'properties':
      resolvedValue = value.source.properties;
      break;
    case 'node':
      resolvedValue = value.source;
      break;
    case 'valueProperty':
    default:
      resolvedValue = value.source.properties.value;
      break;}

  return resolvedValue;
}













async function conditionSubgraphValueResolution({ value, graphInstance, traverseCallContext }) {
  let resolvedValue;


  let resultValueArray = await graphInstance.traverse(





  {
    nodeInstance: value.source,
    implementationKey: {
      processNode: 'executeFunctionReference',
      traversalInterception: 'traverseThenProcessWithLogicalOperator',
      aggregator: 'ConditionAggregator' } },


  {
    traverseCallContext: {
      targetNode: traverseCallContext && traverseCallContext.targetNode || value.destination } });




  if (resultValueArray.length > 1) resolvedValue = resultValueArray.every(item => Boolean(item));else
  if (resultValueArray.length != 0) resolvedValue = resultValueArray[0];
  return resolvedValue;
}


async function conditionSubgraphWithNonBooleanValueResolution({ value, graphInstance, traverseCallContext }) {}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS90cmF2ZXJzZXJJbnN0cnVjdGlvbi92YWx1ZVJlc29sdXRpb24uanMiXSwibmFtZXMiOlsicmVzb2x2ZVZhbHVlIiwidGFyZ2V0Tm9kZSIsImdyYXBoSW5zdGFuY2UiLCJ0cmF2ZXJzZUNhbGxDb250ZXh0IiwidmFsdWUiLCJkYXRhYmFzZVdyYXBwZXIiLCJnZXRWYWx1ZUVsZW1lbnQiLCJjb25jcmV0ZURhdGFiYXNlIiwiZGF0YWJhc2UiLCJub2RlSUQiLCJpZGVudGl0eSIsInJlc29sdmVkVmFsdWUiLCJjb25uZWN0aW9uIiwicHJvcGVydGllcyIsImltcGxlbWVudGF0aW9uIiwiYXNzZXJ0IiwiY29uZGl0aW9uU3ViZ3JhcGhWYWx1ZVJlc29sdXRpb24iLCJzb3VyY2UiLCJyZXN1bHRWYWx1ZUFycmF5IiwidHJhdmVyc2UiLCJub2RlSW5zdGFuY2UiLCJpbXBsZW1lbnRhdGlvbktleSIsInByb2Nlc3NOb2RlIiwidHJhdmVyc2FsSW50ZXJjZXB0aW9uIiwiYWdncmVnYXRvciIsImRlc3RpbmF0aW9uIiwibGVuZ3RoIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNvbmRpdGlvblN1YmdyYXBoV2l0aE5vbkJvb2xlYW5WYWx1ZVJlc29sdXRpb24iXSwibWFwcGluZ3MiOiJtU0FBQTs7OztBQUlPLGVBQWVBLFlBQWYsQ0FBNEIsRUFBRUMsVUFBRixFQUFjQyxhQUFkLEVBQTZCQyxtQkFBN0IsRUFBNUIsRUFBZ0Y7QUFDckYsUUFBTUMsS0FBSyxHQUFHLE1BQU1GLGFBQWEsQ0FBQ0csZUFBZCxDQUE4QkMsZUFBOUIsQ0FBOEMsRUFBRUMsZ0JBQWdCLEVBQUVMLGFBQWEsQ0FBQ00sUUFBbEMsRUFBNENDLE1BQU0sRUFBRVIsVUFBVSxDQUFDUyxRQUEvRCxFQUE5QyxDQUFwQjtBQUNBLE1BQUksQ0FBQ04sS0FBTCxFQUFZOztBQUVaLE1BQUlPLGFBQUo7O0FBRUEsVUFBUVAsS0FBSyxDQUFDUSxVQUFOLENBQWlCQyxVQUFqQixDQUE0QkMsY0FBcEM7QUFDRSxTQUFLLG1CQUFMO0FBQ0VDLE1BQUFBLE1BQU0sQ0FBQyxDQUFDLHlDQUFXWCxLQUFYLENBQUYsRUFBc0IsZ0lBQXRCLENBQU47QUFDQU8sTUFBQUEsYUFBYSxHQUFHLE1BQU1LLGdDQUFnQyxDQUFDLEVBQUVaLEtBQUYsRUFBU0YsYUFBVCxFQUF3QkMsbUJBQXhCLEVBQUQsQ0FBdEQ7QUFDQTtBQUNGLFNBQUssWUFBTDtBQUNFUSxNQUFBQSxhQUFhLEdBQUdQLEtBQUssQ0FBQ2EsTUFBTixDQUFhSixVQUE3QjtBQUNBO0FBQ0YsU0FBSyxNQUFMO0FBQ0VGLE1BQUFBLGFBQWEsR0FBR1AsS0FBSyxDQUFDYSxNQUF0QjtBQUNBO0FBQ0YsU0FBSyxlQUFMO0FBQ0E7QUFDRU4sTUFBQUEsYUFBYSxHQUFHUCxLQUFLLENBQUNhLE1BQU4sQ0FBYUosVUFBYixDQUF3QlQsS0FBeEM7QUFDQSxZQWRKOztBQWdCQSxTQUFPTyxhQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FBY00sZUFBZUssZ0NBQWYsQ0FBZ0QsRUFBRVosS0FBRixFQUFTRixhQUFULEVBQXdCQyxtQkFBeEIsRUFBaEQsRUFBK0Y7QUFDcEcsTUFBSVEsYUFBSjs7O0FBR0EsTUFBSU8sZ0JBQWdCLEdBQUcsTUFBTWhCLGFBQWEsQ0FBQ2lCLFFBQWQ7Ozs7OztBQU0zQjtBQUNFQyxJQUFBQSxZQUFZLEVBQUVoQixLQUFLLENBQUNhLE1BRHRCO0FBRUVJLElBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxNQUFBQSxXQUFXLEVBQUUsMEJBREk7QUFFakJDLE1BQUFBLHFCQUFxQixFQUFFLHdDQUZOO0FBR2pCQyxNQUFBQSxVQUFVLEVBQUUscUJBSEssRUFGckIsRUFOMkI7OztBQWMzQjtBQUNFckIsSUFBQUEsbUJBQW1CLEVBQUU7QUFDbkJGLE1BQUFBLFVBQVUsRUFBR0UsbUJBQW1CLElBQUlBLG1CQUFtQixDQUFDRixVQUE1QyxJQUEyREcsS0FBSyxDQUFDcUIsV0FEMUQsRUFEdkIsRUFkMkIsQ0FBN0I7Ozs7O0FBcUJBLE1BQUlQLGdCQUFnQixDQUFDUSxNQUFqQixHQUEwQixDQUE5QixFQUFpQ2YsYUFBYSxHQUFHTyxnQkFBZ0IsQ0FBQ1MsS0FBakIsQ0FBdUJDLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFELENBQXRDLENBQWhCLENBQWpDO0FBQ0ssTUFBSVYsZ0JBQWdCLENBQUNRLE1BQWpCLElBQTJCLENBQS9CLEVBQWtDZixhQUFhLEdBQUdPLGdCQUFnQixDQUFDLENBQUQsQ0FBaEM7QUFDdkMsU0FBT1AsYUFBUDtBQUNEOzs7QUFHTSxlQUFlbUIsOENBQWYsQ0FBOEQsRUFBRTFCLEtBQUYsRUFBU0YsYUFBVCxFQUF3QkMsbUJBQXhCLEVBQTlELEVBQTZHLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1NlbGZFZGdlIH0gZnJvbSAnLi4vZGF0YU1vZGVsL2NvbmNyZXRlRGF0YWJhc2VXcmFwcGVyLmpzJ1xuXG4vLyBUT0RPOiBNb3ZlIG90aGVyIG5vZGUgaW5zdHJ1Y3Rpb24gb3V0c2lkZSBvZiBub2RlIHR5cGUgZnVuY3Rpb25zLCB0byBtYWtlIGEgbW9yZSBtb2R1bGFyIGluc3RydWN0aW9uIGZ1bmN0aW9ucy5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVWYWx1ZSh7IHRhcmdldE5vZGUsIGdyYXBoSW5zdGFuY2UsIHRyYXZlcnNlQ2FsbENvbnRleHQgfSkge1xuICBjb25zdCB2YWx1ZSA9IGF3YWl0IGdyYXBoSW5zdGFuY2UuZGF0YWJhc2VXcmFwcGVyLmdldFZhbHVlRWxlbWVudCh7IGNvbmNyZXRlRGF0YWJhc2U6IGdyYXBoSW5zdGFuY2UuZGF0YWJhc2UsIG5vZGVJRDogdGFyZ2V0Tm9kZS5pZGVudGl0eSB9KVxuICBpZiAoIXZhbHVlKSByZXR1cm5cblxuICBsZXQgcmVzb2x2ZWRWYWx1ZVxuICAvKiBydW4gY29uZGl0aW9uIGNoZWNrIGFnYWluc3QgY29tcGFyaXNvbiB2YWx1ZS4gSGllcmFyY2h5IG9mIGNvbXBhcmlzb24gdmFsdWUgY2FsY3VsYXRpb246ICAgKi9cbiAgc3dpdGNoICh2YWx1ZS5jb25uZWN0aW9uLnByb3BlcnRpZXMuaW1wbGVtZW50YXRpb24pIHtcbiAgICBjYXNlICdjb25kaXRpb25TdWJncmFwaCc6XG4gICAgICBhc3NlcnQoIWlzU2VsZkVkZ2UodmFsdWUpLCBg4oCiIFNlbGYtZWRnZSBmb3IgVkFMVUUgY29ubmVjdGlvbiB3aXRoIFwiY29uZGl0aW9uU3ViZ3JhcGhcIiBpbXBsZW1lbnRhdGlvbiwgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQsIGFzIGl0IGNhdXNlcyBpbmZpbml0ZSBsb29wLmApIC8vIFRPRE86IGRlYWwgd2l0aCBjaXJjdWxhciB0cmF2ZXJzYWwgZm9yIHRoaXMgdHlwZS5cbiAgICAgIHJlc29sdmVkVmFsdWUgPSBhd2FpdCBjb25kaXRpb25TdWJncmFwaFZhbHVlUmVzb2x1dGlvbih7IHZhbHVlLCBncmFwaEluc3RhbmNlLCB0cmF2ZXJzZUNhbGxDb250ZXh0IH0pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3Byb3BlcnRpZXMnOlxuICAgICAgcmVzb2x2ZWRWYWx1ZSA9IHZhbHVlLnNvdXJjZS5wcm9wZXJ0aWVzXG4gICAgICBicmVha1xuICAgIGNhc2UgJ25vZGUnOlxuICAgICAgcmVzb2x2ZWRWYWx1ZSA9IHZhbHVlLnNvdXJjZVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd2YWx1ZVByb3BlcnR5JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzb2x2ZWRWYWx1ZSA9IHZhbHVlLnNvdXJjZS5wcm9wZXJ0aWVzLnZhbHVlXG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiByZXNvbHZlZFZhbHVlXG59XG5cbi8qXG4gICAgX19fXyAgICAgICAgICAgICAgICBfIF8gXyAgIF8gICAgICAgICAgICAgXG4gICAvIF9fX3xfX18gIF8gX18gICBfX3wgKF8pIHxfKF8pIF9fXyAgXyBfXyAgXG4gIHwgfCAgIC8gXyBcXHwgJ18gXFwgLyBfYCB8IHwgX198IHwvIF8gXFx8ICdfIFxcIFxuICB8IHxfX3wgKF8pIHwgfCB8IHwgKF98IHwgfCB8X3wgfCAoXykgfCB8IHwgfFxuICAgXFxfX19fXFxfX18vfF98IHxffFxcX18sX3xffFxcX198X3xcXF9fXy98X3wgfF98XG4gICBTZWxlY3RpdmUgLyBDb25kaXRpb25hbFxuKi9cbi8qKlxuICogQHJldHVybiB7Tm9kZSBPYmplY3R9IC0gYSBub2RlIG9iamVjdCBjb250YWluaW5nIGRhdGEuXG4gVGhlIGNvbmRpdGlvbiBzdWJncmFwaCByZXR1cm5zIGEgYm9vbGVhbiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbmRpdGlvblN1YmdyYXBoVmFsdWVSZXNvbHV0aW9uKHsgdmFsdWUsIGdyYXBoSW5zdGFuY2UsIHRyYXZlcnNlQ2FsbENvbnRleHQgfSkge1xuICBsZXQgcmVzb2x2ZWRWYWx1ZVxuICAvLyBSdW4gcmVmZXJlbmNlIG5vZGUgaW4gYSBzZXBhcmF0ZSB0cmF2ZXJzYWwgcmVjdXJzaXZlIHNjb3BlcywgYW5kIHJldHVybiByZXN1bHQuXG4gIC8vIHRyYXZlcnNlIHRoZSBkZXN0aW5hdGlvbiBhbmQgZXh0cmFjdCBub2RlIGZyb20gdGhlIHJlc3VsdCB2YWx1ZS5cbiAgbGV0IHJlc3VsdFZhbHVlQXJyYXkgPSBhd2FpdCBncmFwaEluc3RhbmNlLnRyYXZlcnNlKFxuICAgIC8qIFRPRE86IE5vdGU6IHRoaXMgaXMgYSBxdWljayBpbXBsZW1lbnRhdGlvbiBiZWNhdXNlIGRpZ2dpbmcgaW50byB0aGUgY29yZSBjb2RlIGlzIHRpbWUgY29uc3VtaW5nLCB0aGUgZGlmZmVyZW50IGNvbmNlcHRzIHVzZWQgaW4gaGVyZSBjb3VsZCBiZSBpbXByb3ZlZCBhbmQgYnVpbHQgdXBvbiBvdGhlciBhbHJlYWR5IGV4aXN0aW5nIGNvbmNlcHRzOiBcbiAgICAgICAgICAgVE9ETzogY3JlYXRlIGFuIGluc3RhbmNlIGdyYXBoIGZyb20gdGhlIGN1cnJlbnQgZ3JhcGhJbnN0YW5jZSwgdG8gYWxsb3cgcGFzc2luZyBhZGRpdGlvbmFsIGNvbnRleHQgcGFyYW1ldHJzLlxuICAgICAgICAgICAgICAg4oCiICd0cmF2ZXJzYWxDYWxsQ29udGV4dCcgLSB0aGUgMm5kIHByb3ZpZGVkIGFyZ3VtZW50IGNvdWxkIGJlIGluc3RlYWQgYXBwbGllZCBhcyBhIHJlZ3VsYXIgQ29udGV4dCBzcGVjaWZpYyBmb3IgdGhlIGNhbGwsIGJ5IGNyZWF0aW5nIGEgbmV3IGdyYXBoSW5zdGFuY2UgY2hhaW4gd2l0aCBpdCdzIHVuaXF1ZSBjb250ZXh0LCBpbiBhZGRpdGlvbiB0byB0aGUgYWxyZWFkeSBleGlzdGluZyBjb250ZXh0IGluc3RhbmNlLlxuICAgICAgICAgICB3YXMgdGhpcyBkb25lID8gfn7igKIgQ29uZGl0aW9uQWdncmVnYXRvciAmIHRyYXZlcnNlVGhlblByb2Nlc3NXaXRoTG9naWNhbE9wZXJhdG9yIGltcGxlbWVudGF0aW9ucyBjb3VsZCBiZSBpbnRlZ3JhdHRlZCBpbnRvIHRoZSBvdGhlciBpbXBsZW1lbnRhdGlvbnMufn5cbiAgICAgICAgICovXG4gICAge1xuICAgICAgbm9kZUluc3RhbmNlOiB2YWx1ZS5zb3VyY2UsXG4gICAgICBpbXBsZW1lbnRhdGlvbktleToge1xuICAgICAgICBwcm9jZXNzTm9kZTogJ2V4ZWN1dGVGdW5jdGlvblJlZmVyZW5jZScsIC8vIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZm9yIHByb2Nlc3Npbmcgc3RhZ2VzIGluIGNvbmRpdGlvbiBncmFwaC5cbiAgICAgICAgdHJhdmVyc2FsSW50ZXJjZXB0aW9uOiAndHJhdmVyc2VUaGVuUHJvY2Vzc1dpdGhMb2dpY2FsT3BlcmF0b3InLFxuICAgICAgICBhZ2dyZWdhdG9yOiAnQ29uZGl0aW9uQWdncmVnYXRvcicsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdHJhdmVyc2VDYWxsQ29udGV4dDoge1xuICAgICAgICB0YXJnZXROb2RlOiAodHJhdmVyc2VDYWxsQ29udGV4dCAmJiB0cmF2ZXJzZUNhbGxDb250ZXh0LnRhcmdldE5vZGUpIHx8IHZhbHVlLmRlc3RpbmF0aW9uLCAvLyBwYXNzIHRoZSBub2RlIHJlcXVlc3RpbmcgdGhlIHJlc29sdXRpb24gb2YgdGhlIHJlcm91dGUgbm9kZSBpZiBpdCBleGlzdHMsIG9yIHRoZSByZXJvdXRlIGl0c2VsZiBpbiBjYXNlIGNhbGxlZCBhcyByb290IGxldmVsIGluIHRoZSB0cmF2ZXJzYWwuXG4gICAgICB9LFxuICAgIH0sXG4gICkgLy8gdHJhdmVyc2Ugc3ViZ3JhcGggdG8gcmV0cmlldmUgYSByZWZlcmVuY2VkIG5vZGUuXG5cbiAgaWYgKHJlc3VsdFZhbHVlQXJyYXkubGVuZ3RoID4gMSkgcmVzb2x2ZWRWYWx1ZSA9IHJlc3VsdFZhbHVlQXJyYXkuZXZlcnkoaXRlbSA9PiBCb29sZWFuKGl0ZW0pKVxuICBlbHNlIGlmIChyZXN1bHRWYWx1ZUFycmF5Lmxlbmd0aCAhPSAwKSByZXNvbHZlZFZhbHVlID0gcmVzdWx0VmFsdWVBcnJheVswXVxuICByZXR1cm4gcmVzb2x2ZWRWYWx1ZVxufVxuXG4vLyBUT0RPOiBjb25kaXRpb24gc3ViZ3JhcGggdGhhdCByZXR1cm5zIG5vbi1ib29sZWFuLCBmdW5jdGlvbnMgZm9yIG1ha2luZyBjb21wbGV4IGNvbmRpdGlvbiBjaGVja3MuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29uZGl0aW9uU3ViZ3JhcGhXaXRoTm9uQm9vbGVhblZhbHVlUmVzb2x1dGlvbih7IHZhbHVlLCBncmFwaEluc3RhbmNlLCB0cmF2ZXJzZUNhbGxDb250ZXh0IH0pIHt9XG4iXX0=