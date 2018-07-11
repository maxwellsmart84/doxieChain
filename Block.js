const SHA256 = require("crypto-js/sha256");

module.exports = class Block {
    constructor(data) {
        this.hash = this.toHash(data);
        this.data = data;
        this.prevHashStore;
    }
    toHash(data) {
      const self = this;
      if (self.prevHashStore) {
        console.log('if block', self.prevHashStore)
        const stringedHash = self.prevHashStore.toString();
        return SHA256(`${stringedHash}${data}`)
      }
      return SHA256(`${data}`);
    }
    previousHash(hash) {
      const self = this;
      const stringedHash = hash.toString();
      self.hash = SHA256(`${stringedHash}${self.data}`);
      return self.prevHashStore = hash;
    }
}

