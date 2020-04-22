# Twala Util

A collection of utility functions for Twala.

![Node.js CI](https://github.com/twala-io/twala-util/workflows/Node.js%20CI/badge.svg)
[![Version](https://img.shields.io/npm/v/twala-util.svg)](https://npmjs.org/package/twala-util)
[![Downloads/week](https://img.shields.io/npm/dw/twala-util.svg)](https://npmjs.org/package/twala-util)
[![License](https://img.shields.io/npm/l/twala-util.svg)](https://github.com/twala-io/twala-util/blob/master/package.json)

## Features

* Generate signature
```js
const TwalaUtil = require('twala-util')
const util = new TwalaUtil(web3Provider)
const signature = await util.sign('sample data', privateKey)
```

* Verify signature
```js
const TwalaUtil = require('twala-util')
const util = new TwalaUtil(web3Provider)
const isSigned = await util.isSigned(address, messageHash, v, r, s)
```

* Recover address
```js
const TwalaUtil = require('twala-util')
const util = new TwalaUtil(web3Provider)
const address = await util.recoverAddress(messageHash, v, r, s)
```

* Convert ASCII to Hex
```js
const TwalaUtil = require('twala-util')
const util = new TwalaUtil(web3Provider)
const hex = await util.convertAsciiToHex(ascii)
```

* Convert Hex to ASCII
```js
const TwalaUtil = require('twala-util')
const util = new TwalaUtil(web3Provider)
const ascii = await util.convertHexToAscii(hex)
```

## Installation

```sh-session
$ npm i @twala-io/twala-util
```

## Contributing

Keep it simple. Keep it minimal. Don't put every single feature just because you can.

## Authors

* Alexander Paul P. Quinit
* Edilberto Salvador D. Salvador

## License

This project is licensed under the MIT License.
