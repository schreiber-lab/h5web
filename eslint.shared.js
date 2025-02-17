const { createConfig } = require('eslint-config-galex/dist/createConfig');
const {
  createJestOverride,
} = require('eslint-config-galex/dist/overrides/jest');
const {
  createReactOverride,
} = require('eslint-config-galex/dist/overrides/react');
const {
  createTypeScriptOverride,
} = require('eslint-config-galex/dist/overrides/typescript');

const JS_RULES = {
  'sort-keys-fix/sort-keys-fix': 'off', // keys should be sorted based on significance
  'import/no-default-export': 'off', // default exports are common in React
  'no-negated-condition': 'off', // ternaries are sometimes more readable when `true` branch is most significant branch

  // Prefer explicit, consistent return - e.g. `return undefined;`
  'unicorn/no-useless-undefined': 'off',
  'consistent-return': 'error',

  // Properties available after typeguard may be tedious to destructure (e.g. in JSX)
  'unicorn/consistent-destructuring': 'off',

  // Not really more readable and makes Jest crash
  'unicorn/prefer-prototype-methods': 'off',

  /* Forcing use of `else` for consistency with mandatory `default` clause in `switch` statements is unreasonable.
   * `if`/`else if` serves a different purpose than `switch`. */
  'sonarjs/elseif-without-else': 'off',
};

const REACT_RULES = {
  'react/jsx-no-constructed-context-values': 'off', // too strict

  // `useCameraState` accepts an array of deps like `useEffect`
  // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#advanced-configuration
  'react-hooks/exhaustive-deps': [
    'error',
    { additionalHooks: '(useCameraState)' },
  ],
};

const TS_RULES = {
  '@typescript-eslint/ban-ts-comment': 'off', // too strict
  '@typescript-eslint/lines-between-class-members': 'off', // allow grouping single-line members
  '@typescript-eslint/prefer-nullish-coalescing': 'off', // `||` is often conveninent and safe to use with TS
  '@typescript-eslint/explicit-module-boundary-types': 'off', // worsens readability sometimes (e.g. for React components)
  '@typescript-eslint/no-unnecessary-type-arguments': 'off', // lots of false positives

  // Allow removing properties with destructuring
  '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],

  // Allow writing void-returning arrow functions in shorthand to save space
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true },
  ],

  // Prefer `interface` over `type`
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

  // Disallows calling function with value of type `any` (disabled due to false positives)
  // Re-enabling because has helped fix a good number of true positives
  '@typescript-eslint/no-unsafe-argument': 'warn',

  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow', // `never` is too strict
    },
  ],

  // Disallow shadowing variables for an outer scope, as this can cause bugs
  // when the inner-scope variable is removed, for instance
  '@typescript-eslint/no-shadow': 'error',
};

const JEST_RULES = {
  'jest/no-focused-tests': 'warn', // warning instead of error
  'jest/prefer-strict-equal': 'off', // `toEqual` is shorter and sufficient in most cases
  'jest-formatting/padding-around-all': 'off', // allow writing concise two-line tests
  'jest/require-top-level-describe': 'off', // filename should already be meaningful, extra nesting is unnecessary
  'jest/no-conditional-in-test': 'off', // false positives in E2E tests (snapshots), and too strict (disallows using `||` for convenience)
  'testing-library/no-unnecessary-act': 'off', // `act` is sometimes required when advancing timers manually
};

module.exports = {
  createConfig: (cwd, dependencies, customOverrides = []) => {
    return createConfig({
      cwd,
      rules: JS_RULES,
      overrides: [
        createReactOverride({ ...dependencies, rules: REACT_RULES }),
        createTypeScriptOverride({ ...dependencies, rules: TS_RULES }),
        createJestOverride({ ...dependencies, rules: JEST_RULES }),
        ...customOverrides,
      ],
    });
  },
};
