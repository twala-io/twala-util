'use strict'

const Web3 = require('web3')

class TwalaSigner {
  constructor (provider) {
    this.web3 = new Web3(provider)
  }

  async sign (privateKey, data) {
    const hexedData = await this.web3.utils.asciiToHex(data)
    const signature = await this.web3.eth.accounts.sign(hexedData, privateKey)
    const message = signature.message
    const messageHash = signature.messageHash
    const v = signature.v
    const r = signature.r
    const s = signature.s
    
    return {
      message: message,
      message_hash: messageHash,
      v: v,
      r: r,
      s: s
    }
  }
}

module.exports = TwalaSigner
