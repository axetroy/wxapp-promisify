# wxapp-promisify

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/wxapp-promisify.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/wxapp-promisify.svg?branch=master)](https://travis-ci.org/axetroy/wxapp-promisify)
[![Dependency](https://david-dm.org/axetroy/wxapp-promisify.svg)](https://david-dm.org/axetroy/wxapp-promisify)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/wxapp-promisify.svg)](https://badge.fury.io/js/wxapp-promisify)

让微信小城的对全局对``wx``的api返回promise.

对所有api增加Async后缀，则调用异步api，并且返回promise.

## Installation
```bash
npm install wxapp-promisify
```

## Features

- [x] 存储绝大多数的数据类型(微信原生对象只支持object/string)
- [x] 设置有存储时限
- [x] 优雅的API

## Usage

```javascript
// es6
import wx from 'wxapp-promisify';

// commandJS
var wx = require('wxapp-promisify');

wx
  .getUserInfoAsync()
  .then(function(userInfo) {
    console.log(userInfo);
  })
  .catch(function(err) {
    console.error(err);
  });

wx
  .showToastAsync({ title: 'This is title' })
  .then(function(res) {})
  .catch(function(err) {});

```

```bash
git clone https://github.com/axetroy/wxapp-promisify.git
cd ./wxapp-promisify
yarn
```

You can flow [Contribute Guide](https://github.com/axetroy/wxapp-promisify/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/wxapp-promisify/blob/master/LICENSE)