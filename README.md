#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> This is the pure Node API for reading country and city information from GeoLite2 database file based on node-maxmind-db


## Install

```sh
$ npm install --save node-geolite2
```


## Usage

```js
var node-geolite2 = require('node-geolite2');
node-geolite2.init();
var location = node-geolite2.getGeoDataSync("118.112.56.251");
console.log(location);
```


## License

MIT © [zj8487](https://github.com/zj8487)


[npm-url]: https://npmjs.org/package/node-geolite2
[npm-image]: https://badge.fury.io/js/node-geolite2.svg
[travis-url]: https://travis-ci.org/zj8487/node-geolite2
[travis-image]: https://travis-ci.org/zj8487/node-geolite2.svg?branch=master
[daviddm-url]: https://david-dm.org/zj8487/node-geolite2.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/zj8487/node-geolite2
