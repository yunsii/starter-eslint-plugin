import type { ESLint } from 'eslint'
import hello from './rules/hello'

export default {
  rules: {
    hello,
  },
} satisfies ESLint.Plugin
