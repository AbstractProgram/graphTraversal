"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.entityPrototype = exports.Prototype = exports.Reference = exports.Database = void 0;
var _entity = require("@dependency/entity");
var _ImplementationManagementClass = require("./ImplementationManagement.class.js");
var _multiplePrototypeDelegation = require("@dependency/multiplePrototypeDelegation");






const { class: Database, reference: Reference, constructablePrototype: Prototype, entityPrototype } = new _ImplementationManagementClass.ImplementationManagement.clientInterface({ description: 'Database' });exports.entityPrototype = entityPrototype;exports.Prototype = Prototype;exports.Reference = Reference;exports.Database = Database;





















Object.assign(entityPrototype, {

  [_entity.Entity.reference.key.concereteBehavior]({ constructorCallback, currentConcereteBehavior }) {
    return new Proxy(constructorCallback, {
      apply(target, thisArg, [{ data }]) {
        let instance = Reflect.apply(...arguments);
        _multiplePrototypeDelegation.MultipleDelegation.addDelegation({ targetObject: instance, delegationList: [currentConcereteBehavior] });
        return instance;
      } });

  } });









Database[_entity.Constructable.reference.initialize.functionality].setter.call(Database, {});








Database.clientInterface = Prototype[_entity.Constructable.reference.clientInterface.functionality].switch.call(Database, { implementationKey: _entity.Entity.reference.key.instanceDelegatingToEntityInstancePrototype })({
  constructorImplementation: _entity.Entity.reference.key.handleDataInstance });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb25zdHJ1Y3RhYmxlL0RhdGFiYXNlLmNsYXNzLmpzIl0sIm5hbWVzIjpbImNsYXNzIiwiRGF0YWJhc2UiLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJjb25zdHJ1Y3RhYmxlUHJvdG90eXBlIiwiUHJvdG90eXBlIiwiZW50aXR5UHJvdG90eXBlIiwiSW1wbGVtZW50YXRpb25NYW5hZ2VtZW50IiwiY2xpZW50SW50ZXJmYWNlIiwiZGVzY3JpcHRpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJFbnRpdHkiLCJrZXkiLCJjb25jZXJldGVCZWhhdmlvciIsImNvbnN0cnVjdG9yQ2FsbGJhY2siLCJjdXJyZW50Q29uY2VyZXRlQmVoYXZpb3IiLCJQcm94eSIsImFwcGx5IiwidGFyZ2V0IiwidGhpc0FyZyIsImRhdGEiLCJpbnN0YW5jZSIsIlJlZmxlY3QiLCJhcmd1bWVudHMiLCJNdWx0aXBsZURlbGVnYXRpb24iLCJhZGREZWxlZ2F0aW9uIiwidGFyZ2V0T2JqZWN0IiwiZGVsZWdhdGlvbkxpc3QiLCJDb25zdHJ1Y3RhYmxlIiwiaW5pdGlhbGl6ZSIsImZ1bmN0aW9uYWxpdHkiLCJzZXR0ZXIiLCJzd2l0Y2giLCJpbXBsZW1lbnRhdGlvbktleSIsImluc3RhbmNlRGVsZWdhdGluZ1RvRW50aXR5SW5zdGFuY2VQcm90b3R5cGUiLCJjb25zdHJ1Y3RvckltcGxlbWVudGF0aW9uIiwiaGFuZGxlRGF0YUluc3RhbmNlIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT08sTUFBTSxFQUFFQSxLQUFLLEVBQUVDLFFBQVQsRUFBbUJDLFNBQVMsRUFBRUMsU0FBOUIsRUFBeUNDLHNCQUFzQixFQUFFQyxTQUFqRSxFQUE0RUMsZUFBNUUsS0FBZ0csSUFBSUMsd0RBQXlCQyxlQUE3QixDQUE2QyxFQUFFQyxXQUFXLEVBQUUsVUFBZixFQUE3QyxDQUF0RyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JQQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsZUFBZCxFQUErQjs7QUFFN0IsR0FBQ00sZUFBT1YsU0FBUCxDQUFpQlcsR0FBakIsQ0FBcUJDLGlCQUF0QixFQUF5QyxFQUFFQyxtQkFBRixFQUF1QkMsd0JBQXZCLEVBQXpDLEVBQTRGO0FBQzFGLFdBQU8sSUFBSUMsS0FBSixDQUFVRixtQkFBVixFQUErQjtBQUNwQ0csTUFBQUEsS0FBSyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0IsQ0FBQyxFQUFFQyxJQUFGLEVBQUQsQ0FBbEIsRUFBOEI7QUFDakMsWUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQUNMLEtBQVIsQ0FBYyxHQUFHTSxTQUFqQixDQUFmO0FBQ0FDLHdEQUFtQkMsYUFBbkIsQ0FBaUMsRUFBRUMsWUFBWSxFQUFFTCxRQUFoQixFQUEwQk0sY0FBYyxFQUFFLENBQUNaLHdCQUFELENBQTFDLEVBQWpDO0FBQ0EsZUFBT00sUUFBUDtBQUNELE9BTG1DLEVBQS9CLENBQVA7O0FBT0QsR0FWNEIsRUFBL0I7Ozs7Ozs7Ozs7QUFvQlVyQixRQUFRLENBQUM0QixzQkFBYzNCLFNBQWQsQ0FBd0I0QixVQUF4QixDQUFtQ0MsYUFBcEMsQ0FBUixDQUEyREMsTUFBckUsTUFBQS9CLFFBQVEsRUFBb0UsRUFBcEUsQ0FBUjs7Ozs7Ozs7O0FBU0FBLFFBQVEsQ0FBQ08sZUFBVCxHQUFxQ0gsU0FBUyxDQUFDd0Isc0JBQWMzQixTQUFkLENBQXdCTSxlQUF4QixDQUF3Q3VCLGFBQXpDLENBQVQsQ0FBaUVFLE1BQTNFLE1BQUFoQyxRQUFRLEVBQTBFLEVBQUVpQyxpQkFBaUIsRUFBRXRCLGVBQU9WLFNBQVAsQ0FBaUJXLEdBQWpCLENBQXFCc0IsMkNBQTFDLEVBQTFFLENBQVIsQ0FBMks7QUFDcE1DLEVBQUFBLHlCQUF5QixFQUFFeEIsZUFBT1YsU0FBUCxDQUFpQlcsR0FBakIsQ0FBcUJ3QixrQkFEb0osRUFBM0ssQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCdcclxuaW1wb3J0IHsgRW50aXR5LCBDb25zdHJ1Y3RhYmxlLCBzeW1ib2wgfSBmcm9tICdAZGVwZW5kZW5jeS9lbnRpdHknXHJcbmltcG9ydCB7IEltcGxlbWVudGF0aW9uTWFuYWdlbWVudCB9IGZyb20gJy4vSW1wbGVtZW50YXRpb25NYW5hZ2VtZW50LmNsYXNzLmpzJ1xyXG5pbXBvcnQgeyBNdWx0aXBsZURlbGVnYXRpb24gfSBmcm9tICdAZGVwZW5kZW5jeS9tdWx0aXBsZVByb3RvdHlwZURlbGVnYXRpb24nXHJcblxyXG4vKipcclxuICoqIERhdGFiYXNlIHN5c3RlbSBmb3Igc3VwcG9ydGluZyBkaWZmZXJlbnQgZGF0YWJhc2UgYWRhcHRlcnMuXHJcbiAqIENyZWF0ZSBjb25jcmV0ZSBiZWhhdmlvciBvZiBkYXRhYmFzZSB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgY2xpZW50IHRhcmdldC5cclxuICogJ2RhdGFiYXNlTW9kZWxBZGFwZXInIC0gZGF0YWJhc2UgbW9kZWwgZnVuY3Rpb25zIGZvciByZXRyaXZpbmcgbm9kZSwgZGF0YUl0ZW0sIGFuZCBvdGhlciBkb2N1bWVudHMuIHNob3VsZCBiZSBhc3luYyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgeyBjbGFzczogRGF0YWJhc2UsIHJlZmVyZW5jZTogUmVmZXJlbmNlLCBjb25zdHJ1Y3RhYmxlUHJvdG90eXBlOiBQcm90b3R5cGUsIGVudGl0eVByb3RvdHlwZSB9ID0gbmV3IEltcGxlbWVudGF0aW9uTWFuYWdlbWVudC5jbGllbnRJbnRlcmZhY2UoeyBkZXNjcmlwdGlvbjogJ0RhdGFiYXNlJyB9KVxyXG5cclxuLypcclxuICAgX19fXyAgICAgICBfXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fXyAgICAgX19fXyAgICAgICAgICAgIF8gICAgICAgIF8gICAgICAgICAgICAgICAgICAgIFxyXG4gIHwgIF8gXFwgX19fIC8gX3wgX19fIF8gX18gX19fIF8gX18gICBfX18gX19fICAgKCBfICkgICB8ICBfIFxcIF8gX18gX19fIHwgfF8gX19fIHwgfF8gXyAgIF8gXyBfXyAgIF9fXyBcclxuICB8IHxfKSAvIF8gXFwgfF8gLyBfIFxcICdfXy8gXyBcXCAnXyBcXCAvIF9fLyBfIFxcICAvIF8gXFwvXFwgfCB8XykgfCAnX18vIF8gXFx8IF9fLyBfIFxcfCBfX3wgfCB8IHwgJ18gXFwgLyBfIFxcXHJcbiAgfCAgXyA8ICBfXy8gIF98ICBfXy8gfCB8ICBfXy8gfCB8IHwgKF98ICBfXy8gfCAoXz4gIDwgfCAgX18vfCB8IHwgKF8pIHwgfHwgKF8pIHwgfF98IHxffCB8IHxfKSB8ICBfXy9cclxuICB8X3wgXFxfXFxfX198X3wgIFxcX19ffF98ICBcXF9fX3xffCB8X3xcXF9fX1xcX19ffCAgXFxfX18vXFwvIHxffCAgIHxffCAgXFxfX18vIFxcX19cXF9fXy8gXFxfX3xcXF9fLCB8IC5fXy8gXFxfX198XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfF9fXy98X3wgICAgICAgICBcclxuKi9cclxuLy8gT2JqZWN0LmFzc2lnbihSZWZlcmVuY2UsIHtcclxuLy8gICBrZXk6IHt9LFxyXG4vLyB9KVxyXG5cclxuLypcclxuICAgICAgICAgICAgICAgICAgIF8gICAgICAgIF8gICAgICAgICAgICAgICAgICAgIF9fX18gICAgICAgXyAgICAgICAgICAgICAgICAgIF8gICBfICAgICAgICAgICAgIFxyXG4gICBfIF9fICBfIF9fIF9fXyB8IHxfIF9fXyB8IHxfIF8gICBfIF8gX18gICBfX198ICBfIFxcICBfX198IHwgX19fICBfXyBfICBfXyBffCB8XyhfKSBfX18gIF8gX18gIFxyXG4gIHwgJ18gXFx8ICdfXy8gXyBcXHwgX18vIF8gXFx8IF9ffCB8IHwgfCAnXyBcXCAvIF8gXFwgfCB8IHwvIF8gXFwgfC8gXyBcXC8gX2AgfC8gX2AgfCBfX3wgfC8gXyBcXHwgJ18gXFwgXHJcbiAgfCB8XykgfCB8IHwgKF8pIHwgfHwgKF8pIHwgfF98IHxffCB8IHxfKSB8ICBfXy8gfF98IHwgIF9fLyB8ICBfXy8gKF98IHwgKF98IHwgfF98IHwgKF8pIHwgfCB8IHxcclxuICB8IC5fXy98X3wgIFxcX19fLyBcXF9fXFxfX18vIFxcX198XFxfXywgfCAuX18vIFxcX19ffF9fX18vIFxcX19ffF98XFxfX198XFxfXywgfFxcX18sX3xcXF9ffF98XFxfX18vfF98IHxffFxyXG4gIHxffCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxfX18vfF98ICAgICAgICAgICAgICAgICAgICAgICAgICAgfF9fXy8gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiovXHJcbk9iamVjdC5hc3NpZ24oZW50aXR5UHJvdG90eXBlLCB7XHJcbiAgLy8gIGNvbmNlcmV0ZSBiZWhhdmlvciBpbml0aWFsaXphdGlvbiBvbiB0aGUgdGFyZ2V0IGluc3RhbmNlLlxyXG4gIFtFbnRpdHkucmVmZXJlbmNlLmtleS5jb25jZXJldGVCZWhhdmlvcl0oeyBjb25zdHJ1Y3RvckNhbGxiYWNrLCBjdXJyZW50Q29uY2VyZXRlQmVoYXZpb3IgfSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm94eShjb25zdHJ1Y3RvckNhbGxiYWNrLCB7XHJcbiAgICAgIGFwcGx5KHRhcmdldCwgdGhpc0FyZywgW3sgZGF0YSB9XSkge1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IFJlZmxlY3QuYXBwbHkoLi4uYXJndW1lbnRzKVxyXG4gICAgICAgIE11bHRpcGxlRGVsZWdhdGlvbi5hZGREZWxlZ2F0aW9uKHsgdGFyZ2V0T2JqZWN0OiBpbnN0YW5jZSwgZGVsZWdhdGlvbkxpc3Q6IFtjdXJyZW50Q29uY2VyZXRlQmVoYXZpb3JdIH0pXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pXHJcblxyXG4vKlxyXG4gICBfX18gICAgICAgXyBfICAgXyAgICAgICBfIF8gICAgICAgICBcclxuICB8XyBffF8gX18gKF8pIHxfKF8pIF9fIF98IChfKV9fX19fX18gXHJcbiAgIHwgfHwgJ18gXFx8IHwgX198IHwvIF9gIHwgfCB8XyAgLyBfIFxcXHJcbiAgIHwgfHwgfCB8IHwgfCB8X3wgfCAoX3wgfCB8IHwvIC8gIF9fL1xyXG4gIHxfX198X3wgfF98X3xcXF9ffF98XFxfXyxffF98Xy9fX19cXF9fX3xcclxuKi9cclxuRGF0YWJhc2U6OkRhdGFiYXNlW0NvbnN0cnVjdGFibGUucmVmZXJlbmNlLmluaXRpYWxpemUuZnVuY3Rpb25hbGl0eV0uc2V0dGVyKHt9KVxyXG5cclxuLypcclxuICAgIF9fX18gXyBfICAgICAgICAgICAgXyAgICAgXyBfICAgICAgICAgICAgICAgICAgICBfXyAgICAgICAgICAgICAgICBcclxuICAgLyBfX198IChfKSBfX18gXyBfXyB8IHxfICAoXykgfF8gXyBfXyAgIF9fXyBfIF9fIC8gX3wgX18gXyAgX19fIF9fXyBcclxuICB8IHwgICB8IHwgfC8gXyBcXCAnXyBcXHwgX198IHwgfCBfX3wgJ18gXFwgLyBfIFxcICdfX3wgfF8gLyBfYCB8LyBfXy8gXyBcXFxyXG4gIHwgfF9fX3wgfCB8ICBfXy8gfCB8IHwgfF8gIHwgfCB8X3wgfCB8IHwgIF9fLyB8ICB8ICBffCAoX3wgfCAoX3wgIF9fL1xyXG4gICBcXF9fX198X3xffFxcX19ffF98IHxffFxcX198IHxffFxcX198X3wgfF98XFxfX198X3wgIHxffCAgXFxfXyxffFxcX19fXFxfX198XHJcbiovXHJcbkRhdGFiYXNlLmNsaWVudEludGVyZmFjZSA9IERhdGFiYXNlOjpQcm90b3R5cGVbQ29uc3RydWN0YWJsZS5yZWZlcmVuY2UuY2xpZW50SW50ZXJmYWNlLmZ1bmN0aW9uYWxpdHldLnN3aXRjaCh7IGltcGxlbWVudGF0aW9uS2V5OiBFbnRpdHkucmVmZXJlbmNlLmtleS5pbnN0YW5jZURlbGVnYXRpbmdUb0VudGl0eUluc3RhbmNlUHJvdG90eXBlIH0pKHtcclxuICBjb25zdHJ1Y3RvckltcGxlbWVudGF0aW9uOiBFbnRpdHkucmVmZXJlbmNlLmtleS5oYW5kbGVEYXRhSW5zdGFuY2UsXHJcbn0pXHJcbiJdfQ==