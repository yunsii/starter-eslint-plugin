import type { Rule } from 'eslint'

let warnedForMissingVersion = false

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Hello world',
    },
  },
  create() {
    if (!warnedForMissingVersion) {
      console.warn('Warning: eslint plugin starter created')
      warnedForMissingVersion = true
    }
    return {
      Program() {},
    }
  },
} satisfies Rule.RuleModule
