module.exports = {
  env: {
    browser : true,
    es2020  : true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser        : '@typescript-eslint/parser',
  parserOptions : {
    ecmaVersion : 'latest',
    sourceType  : 'module',
  },
  plugins  : [ 'react-refresh', 'import' ],
  settings : {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    },
    'import/resolver': {
      typescript: {},
    },
    'tailwindcss': {
      cssFiles: [
        '**/*.scss',
      ],
    },
  },
  rules: {
    'react-refresh/only-export-components': 'warn',

    // Global

    'import/order': [
      'error',
      {
        groups      : [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type' ],
        alphabetize : {
          order           : 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
          caseInsensitive : true, /* ignore case. Options: [true, false] */
        },
      },
    ],
    'import/no-unresolved'              : 'warn',
    'dot-notation'                      : 'off',
    'require-await'                     : 'off',
    'no-async-promise-executor'         : 'off',
    'camelcase'                         : 'off',
    'import/no-relative-parent-imports' : 'off',
    'no-fallthrough'                    : 'off',
    'prefer-destructuring'              : 'off',
    'max-statements-per-line'           : 'off',
    'import/default'                    : 'off',

    'prefer-const'                 : 'error',
    'eol-last'                     : [ 'error', 'always' ],
    'import/no-named-as-default'   : 0,
    'no-console'                   : [ 'error', { allow: [ 'warn', 'error' ] }],
    'no-debugger'                  : 'error',
    'prefer-promise-reject-errors' : [ 'error', { allowEmptyReject: true }],
    'curly'                        : [ 'error', 'all' ],
    'spaced-comment'               : [ 'error', 'always' ],
    'comma-dangle'                 : [ 'error', 'always-multiline' ],
    'quote-props'                  : [ 'error', 'consistent-as-needed', { keywords: false }],
    'quotes'                       : [ 'error', 'single', { avoidEscape: true }],
    'brace-style'                  : [ 'error', 'stroustrup', { allowSingleLine: true }],
    'indent'                       : [ 'error', 2, {
      SwitchCase               : 1,
      VariableDeclarator       : 'first',
      MemberExpression         : 1,
      FunctionDeclaration      : { parameters: 'first' },
      FunctionExpression       : { parameters: 'first' },
      CallExpression           : { arguments: 'first' },
      ArrayExpression          : 'first',
      ObjectExpression         : 'first',
      ImportDeclaration        : 'first',
      flatTernaryExpressions   : false,
      offsetTernaryExpressions : false,
      ignoreComments           : false,
    }],

    'no-trailing-spaces': [ 'error', {
      skipBlankLines: true,
    }],

    'eqeqeq'                  : [ 'error', 'always', { null: 'ignore' }],
    'func-call-spacing'       : [ 'error', 'never' ],
    'object-property-newline' : [ 'error', {
      allowAllPropertiesOnSameLine: true,
    }],

    'padding-line-between-statements': [
      'error',
      {
        blankLine : 'any',
        prev      : '*',
        next      : [ 'return', 'break', 'export', 'continue', 'try', 'do', 'while' ],
      },
      {
        blankLine : 'any',
        prev      : 'case',
        next      : [ 'case', 'default' ],
      },
      {
        blankLine : 'always',
        prev      : 'directive',
        next      : '*',
      },
      {
        blankLine : 'never',
        prev      : 'directive',
        next      : 'directive',
      },
      {
        blankLine : 'always',
        prev      : 'import',
        next      : '*',
      },
      {
        blankLine : 'any',
        prev      : 'import',
        next      : 'import',
      },
    ],

    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays : false,
      arraysInArrays  : true,
    }],

    'object-curly-spacing' : [ 'error', 'always' ],
    'space-in-parens'      : [ 'error', 'never', {
      exceptions: [],
    }],

    'comma-spacing': [ 'error', {
      before : false,
      after  : true,
    }],

    'keyword-spacing': [ 'error', {
      before: true,
    }],

    'no-duplicate-imports' : 'error',
    'key-spacing'          : [ 'error', {
      singleLine: {
        beforeColon : false,
        afterColon  : true,
      },
      align: {
        beforeColon : true,
        afterColon  : true,
        on          : 'colon',
      },
    }],

    'switch-colon-spacing': [ 'error', {
      after  : true,
      before : false,
    }],
    'space-before-blocks'     : 'error',
    'no-multiple-empty-lines' : [ 'error', {
      max    : 2,
      maxEOF : 0,
      maxBOF : 0,
    }],
    'padded-blocks'                      : [ 'error', 'never', { allowSingleLineBlocks: true }],
    'semi'                               : [ 'error', 'never' ],
    '@typescript-eslint/no-explicit-any' : 'off',
  },
}
