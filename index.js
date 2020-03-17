'use strict'

const Web3 = require('web3')

class TwalaSigner {
  constructor (provider) {
    this.web3 = new Web3(provider)
  }

  async signData (privateKey, data) {
    return 'SIGNED'
  }
}

module.exports = TwalaSigner
