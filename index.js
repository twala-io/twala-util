'use strict'

const Web3 = require('web3')

class TwalaUtil {
  constructor (provider) {
    this.web3 = new Web3(provider)
    this.signatureVerifierContractAbi = [{'inputs':[{'internalType':'address','name':'_address','type':'address'},{'internalType':'bytes32','name':'_messageHash','type':'bytes32'},{'internalType':'uint8','name':'_v','type':'uint8'},{'internalType':'bytes32','name':'_r','type':'bytes32'},{'internalType':'bytes32','name':'_s','type':'bytes32'}],'name':'isSigned','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'pure','type':'function'},{'inputs':[{'internalType':'bytes32','name':'_messageHash','type':'bytes32'},{'internalType':'uint8','name':'_v','type':'uint8'},{'internalType':'bytes32','name':'_r','type':'bytes32'},{'internalType':'bytes32','name':'_s','type':'bytes32'}],'name':'recoverAddress','outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':'pure','type':'function'}]
    this.signatureVerifierContractAddress = '0x4Bf205fAb0BDaD0d2803b5f082E74bE53949FB41'
  }

  async sign (data, privateKey) {
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

  async isSigned (publicKey, messageHash, v, r, s) {
    const signatureVerifierContractAbi = this.signatureVerifierContractAbi
    const signatureVerifierContractAddress = this.signatureVerifierContractAddress
    const signatureVerifierContract = new this.web3.eth.Contract(signatureVerifierContractAbi, signatureVerifierContractAddress)
    let isSigned = null
    try {
      isSigned = await signatureVerifierContract.methods.isSigned(publicKey, messageHash, v, r, s).call()
    } catch (error) {
      isSigned = false
    }

    return isSigned
  }

  async recoverAddress (messageHash, v, r, s) {
    const signatureVerifierContractAbi = this.signatureVerifierContractAbi
    const signatureVerifierContractAddress = this.signatureVerifierContractAddress
    const signatureVerifierContract = new this.web3.eth.Contract(signatureVerifierContractAbi, signatureVerifierContractAddress)
    const address = await signatureVerifierContract.methods.recoverAddress(messageHash, v, r, s).call()

    return address
  }

  async convertAsciiToHex (ascii) {
    const hex = this.web3.utils.asciiToHex(ascii)

    return hex
  }

  async convertHexToAscii (hex) {
    const ascii = this.web3.utils.hexToAscii(hex)

    return ascii
  }
}

module.exports = TwalaUtil
