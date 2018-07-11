const Block = require('./Block.js');
const SHA256  = require("crypto-js/sha256");

module.exports = class Blockchain {
    constructor() {
        this.chain = [ new Block('genesis') ]
    }
    addBlock(block) {
      const previousBlockIdx = this.chain.length - 1;
      block.toPreviousHash(this.chain[previousBlockIdx].hash);
      return this.chain = [...this.chain, block];
    }
    isValid() {
        for (const [index, block] of this.chain.entries()) {
            const genesisHash = SHA256(`${this.chain[0].data}`);
            const rebuiltHash = SHA256(`${block.previousHash}${this.chain[index].data}`);
            if (index !== 0) {
                if (block.previousHash !== this.chain[index > 0 ? index - 1 : 0].hash) {
                    console.log('first', index)
                    return false;
                }
                if (block.hash.toString() !== rebuiltHash.toString()) {
                    console.log('second', index)
                    return false;
                }
            } else if (block.hash.toString() !== genesisHash.toString()) {
                console.log('third', index)
                return false;
            }
        }
        return true;
    }
}

