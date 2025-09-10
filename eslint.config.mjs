import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  // ignore build/artifact folders (migrated from .eslintignore)
  { ignores: ['.next/**', 'node_modules/**', 'dist/**', 'public/**', '.env*', '*.config.js'] },
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  }),
]

export default eslintConfig
