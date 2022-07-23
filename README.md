<div align="center">
  <a href="https://github.com/avivharuzi/eslint-config-vamp">
    <img src="./.github/images/eslint-logo.svg" alt="Logo">
  </a>
  <h1>eslint-config-vamp</h1>
  <p>ESLint config for vampires 🩸</p>
  <p>
    <img alt="GitHub" src="https://img.shields.io/github/license/avivharuzi/eslint-config-vamp?style=for-the-badge">
  </p>
  <p>
    <a href="https://github.com/avivharuzi/eslint-config-vamp/issues">Report Bug</a>
    ·
    <a href="https://github.com/avivharuzi/eslint-config-vamp/issues">Request Feature</a>
  </p>
</div>

---

## 📖 Table of Contents

- [Overview](#🔫-Overview)
- [Installation](#🛠️-Installation)
- [Usage](#⚡️-Usage)
- [License](#📜-License)

## 🔫 Overview

This package includes ESLint configuration files, this configuration files only include rules to prevent environment problems and conflicts with other rules.

Currently, there is 2 configurations:

1. `base` - The default one that includes ESLint rules only
2. `typescript` - Include typescript/eslint rules only

## 🛠️ Installation

```shell
npm i -D eslint-config-vamp
```

## ⚡️ Usage

### base

The base configuration required only `eslint` package to be installed.

> .eslintrc.json

```json
{
  "extends": [
    "vamp"
  ]
}
```

Example of advanced configuration with `base`:

Packages required:

- `eslint`
- `eslint-config-prettier`

> .eslintrc.json

```json
{
  "extends": [
    "eslint:recommended",
    "vamp",
    "prettier"
  ]
}
```

### typescript

The typescript configuration required those packages in order to work:

- `eslint`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

> .eslintrc.json

```json
{
  "extends": [
    "vamp",
    "vamp/typescript"
  ]
}
```

Example of advanced configuration with `typescript`:

Packages required:

- `eslint`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `prettier`

> .eslintrc.json

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "vamp",
    "vamp/typescript",
    "prettier"
  ]
}
```

## 📜 License

[MIT](LICENSE)
