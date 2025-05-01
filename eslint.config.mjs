// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  ignores: [
    '.DS_Store',
    'node_modules',
    'coverage',
    'dist',
    'ios',
    'android',
    '.env.local',
    '.env.*.local',
    'npm-debug.log*',
    'yarn-debug.log*',
    'yarn-error.log*',
    'pnpm-debug.log*',
    '.idea',
    '.vscode',
    '*.suo',
    '*.ntvs*',
    '*.njsproj',
    '*.sln',
    '*.sw?',
  ],
  rules: {
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/no-deprecated-slot-attribute': 'off',
  },
})
