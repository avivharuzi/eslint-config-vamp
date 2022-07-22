module.exports = {
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
    'no-new-object': 'error',
    'object-shorthand': ['error', 'always'],
    'no-prototype-builtins': 'error',
    'prefer-object-spread': 'error',
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'prefer-destructuring': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'func-style': ['error', 'expression'],
    'no-loop-func': 'error',
    'prefer-rest-params': 'error',
    'default-param-last': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-body-style': 'error',
    'no-useless-constructor': 'error',
    'class-methods-use-this': 'error',
    'no-duplicate-imports': 'error',
    'no-iterator': 'error',
    'dot-notation': 'error',
    'no-undef': 'error',
    'one-var': ['error', 'never'],
    'no-multi-assign': 'error',
    'no-plusplus': 'error',
    'no-unused-vars': 'error',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'no-case-declarations': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['=', '!', '/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['=', '!', ':', '::'],
          exceptions: ['-', '+'],
          balanced: true,
        },
      },
    ],
    radix: 'error',
    'no-new-wrappers': 'error',
    'id-denylist': ['error', 'data', 'err', 'e', 'cb', 'callback'],
    'id-length': [
      'error',
      {
        min: 2,
      },
    ],
    camelcase: 'error',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'no-restricted-globals': 'error',
    'no-constructor-return': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': 'error',
    'capitalized-comments': ['error', 'always'],
    'default-case': 'error',
    'default-case-last': 'error',
    'func-name-matching': ['error', 'always'],
    'func-names': ['error', 'never'],
    'grouped-accessor-pairs': ['error', 'setBeforeGet'],
    'guard-for-in': 'error',
    'init-declarations': ['error', 'always'],
    'max-classes-per-file': 'error',
    'max-depth': ['error', 2],
    'max-lines': [
      'error',
      {
        max: 400,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 75,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 3],
    'max-statements': ['error', 10],
    'multiline-comment-style': ['error', 'starred-block'],
    'no-alert': 'error',
    'no-console': 'error',
    'no-empty-function': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
      },
    ],
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-new': 'error',
    'no-proto': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': [
      'error',
      {
        enforceForClassMembers: true,
      },
    ],
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    'prefer-regex-literals': 'error',
    'require-await': 'error',
    'symbol-description': 'error',
    yoda: ['error', 'never'],
  },
};
