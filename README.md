<div align="center">

<h1 id="toc">babel-plugin-react-suspense</h1>

<p>a way to wrap component with React.Suspense as <code>suspense</code> prop.</p>

`<Component suspense={<Fallback />} />`

↓ ↓ ↓ ↓ ↓ ↓

`<React.Suspense fallback={<Fallback />}><Component /></React.Suspense`

<p align="center">
  <a href="#features">Features</a>  • 
  <a href="#getting-started">Getting Started</a>  • 
  <a href="#contributors">Contributors</a> 
</p>

</div>

---

<div align="center">

<!-- prettier-ignore-start -->

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/r17x/babel-plugin-react-suspense/release/main)](https://github.com/r17x/babel-plugin-react-suspense/actions/workflows/release.yml?query=branch%3Amain+)
[![Codecov branch](https://img.shields.io/codecov/c/github/r17x/babel-plugin-react-suspense/main)](https://app.codecov.io/gh/r17x/babel-plugin-react-suspense)
[![npm](https://img.shields.io/npm/v/babel-plugin-react-suspense)](https://www.npmjs.com/package/babel-plugin-react-suspense/v/latest)
[![npm downloads](https://img.shields.io/npm/dw/babel-plugin-react-suspense)](https://www.npmjs.com/package/babel-plugin-react-suspense/v/latest)
[![License](https://img.shields.io/github/license/r17x/babel-plugin-react-suspense)](https://github.com/r17x/babel-plugin-react-suspense/blob/main/LICENSE)
[![GitHub contributors (via allcontributors.org)](https://img.shields.io/github/all-contributors/r17x/babel-plugin-react-suspense/main)](https://github.com/r17x/babel-plugin-react-suspense#contributors)

<!-- prettier-ignore-end -->

</div>

## Features

- 🤖 Smart enough to import and use `Suspense` based on _user_ source.
- 🌟 Simply to adopt (just add new attributes or props in your element with `suspense` as key and value as `fallback`.

## Getting Started

[\[Back to the Table of Contents\] ↑](#toc)

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

### Installation

[\[Back to the Getting Started\] ↑](#getting-started)

- yarn
  - `yarn add babel-plugin-react-suspense`
- npm
  - `npm -i babel-plugin-react-suspense`

### Configuration

[\[Back to the Getting Started\] ↑](#getting-started)

```diff
// babel configuration
-- plugins: []
++ plugins: ["babel-plugin-react-suspense"]
```

### Usage

[\[Back to the Getting Started\] ↑](#getting-started)

This babel plugin will enable special prop name (attributes jsx) called `suspense` every `JSXElement` declaration. (seem like `css` prop, if you familiar with `styled-component` or `emotion`).

```javascript
const App = () => (
  <>
    <User suspense={<Fallback />} />
  </>
);
```

# Contributors

[\[Back to the Table of Contents\] ↑](#toc)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
