# react-as-tabs

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/react-as-tabs.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/react-as-tabs?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/react-as-tabs.png)](https://travis-ci.org/LingyuCoder/react-as-tabs)
[![Dependency Status](https://david-dm.org/LingyuCoder/react-as-tabs.svg)](https://david-dm.org/LingyuCoder/react-as-tabs)
[![devDependency Status](https://david-dm.org/LingyuCoder/react-as-tabs/dev-status.svg)](https://david-dm.org/LingyuCoder/react-as-tabs#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/react-as-tabs.svg?style=flat-square)](http://npmjs.org/package/react-as-tabs)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/react-as-tabs.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/react-as-tabs.svg?style=flat-square)](https://npmjs.org/package/react-as-tabs)

> A react tabs

## Demo

[Demo here](http://LingyuCoder.github.io/react-as-tabs/demo/index.html)

## Installation

```bash
$ npm install --save react-as-tabs
```

## Usage

```javascript
import ReactAsTabs from 'react-as-tabs';
<ReactAsTabs />;
```

## Properties

### Tabs

[insert]: # (start:src/index.jsx|doc)
| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| active | current activated panel name | String |  |  |
| children | panels | Node |  | `null` |
| onChange | callback when panel changes | Function |  | `() => {}` |
[insert]: # (end:src/index.jsx)

### Panel

[insert]: # (start:src/panel.jsx|doc)
| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| children | children nodes of this panel | Node |  | `null` |
| disabled | whether this panel can be activated | Boolean |  | `false` |
| href | if nav is a link, this is the url | String |  |  |
| name | name of this panel, required | String | √ | `''` |
| title | text of the nav, required | String | √ | `''` |
[insert]: # (end:src/panel.jsx)

## Development

[Online test page here](http://LingyuCoder.github.io/react-as-tabs/test/test.html)

```bash
$ npm run dev # startup local dev server
$ npm run build # build
$ npm run test # run tests
$ npm run cov # run coverage
$ npm run build-demo # build demo, auto run in 'npm run build'
$ npm run build-test # build test, auto run in 'npm run build'
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
