import path from 'node:path'
import process from 'node:process'

import janna from '@jannajs/lint/eslint'
import starter from 'starter-eslint-plugin'
import * as tsParser from '@typescript-eslint/parser'
import { GLOB_SRC } from '@antfu/eslint-config'

export default janna({}, {
  files: [GLOB_SRC],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: path.join(process.cwd(), 'tsconfig.json'),
    },
  },
  plugins: {
    starter,
  },
  rules: {
    'starter/no-loop-over-enum': 'warn',
  },
  ignores: [
    // TS code block in markdown
    '**/*.md/*.ts',
  ],
})
