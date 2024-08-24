import { createRule } from '../helpers'

let warnedForMissingVersion = false

export const rule = createRule({
  create() {
    if (!warnedForMissingVersion) {
      console.warn('Warning: eslint plugin starter created')
      warnedForMissingVersion = true
    }
    return {
      Program() {},
    }
  },
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Hello world',
    },
    messages: {},
    schema: [],
  },
  name: 'hello',
  defaultOptions: [],
})
