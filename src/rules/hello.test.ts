import { $, createRuleTester } from 'eslint-vitest-rule-tester'
import { describe, it } from 'vitest'

import { rule } from './hello'

describe('hello', () => {
  const { valid } = createRuleTester({
    name: 'hello',
    rule,
  })

  it('valid case 1', () => {
    valid($`
      const foo = 1
    `)
  })
})
