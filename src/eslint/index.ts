import antfu from "@antfu/eslint-config"

const config = antfu(
  {
    typescript: true,
    vue: true,
  },
  {
    files: ["**/*.vue"],
    rules: {
      "vue/no-unused-vars": "warn",
      "vue/component-name-in-template-casing": "off",
    },
  },
  {
    rules: {
      "style/quotes": [2, "double"],
      "quotes": [2, "double"],
      "no-console": "off",
      "unused-imports/no-unused-vars": "warn",
      "curly": ["error", "multi-line"],
      "ts/no-namespace": "off",
      "style/max-statements-per-line": "off",
      // "antfu/if-newline": "off",
      "jsonc/sort-keys": "off",
    },
  },
)

export default config 