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

1. `base` - the default one that includes ESLint rules only
2. `typescript` - includes typescript/eslint rules only

## 🛠️ Installation

```shell
npm i -D eslint-config-vamp
```

## ⚡️ Usage

### base

The base configuration requires only `eslint` package to be installed.

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

The typescript configuration require those packages in order to work:

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

### Annoying Rules

All the rules considered as best practices but some of them can make to your existing projects problems, so those rules can be disabled easily with the rules object:

```json
{
  "rules": {
    "id-denylist": "off",
    "id-length": "off"
    "max-classes-per-file": "off"
    "max-depth": "off"
    "max-lines": "off"
    "max-lines-per-function": "off"
    "max-nested-callbacks": "off"
    "max-params": "off"
    "max-statements": "off"
  }
}
```

## 📜 License

[MIT](LICENSE)
