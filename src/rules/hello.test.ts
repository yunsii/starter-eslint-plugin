import { $, createRuleTester } from 'eslint-vitest-rule-tester'
import { describe, it } from 'vitest'

import { rule as hello } from './hello'

describe('hello', () => {
  const { valid } = createRuleTester({
    name: 'hello',
    rule: hello,
  })

  it('valid case 1', () => {
    valid($`
      const foo = 1
    `)
  })
})
