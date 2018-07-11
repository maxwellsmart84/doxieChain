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
        const stringedHash = self.prevHashStore.toString();
        return SHA256(`${stringedHash}${data}`)
      }
      return SHA256(`${data}`);
    }
    set previousHash(hash) {
      const self = this;
      const stringedHash = hash.toString();
      self.hash = SHA256(`${stringedHash}${self.data}`);
      return self.prevHashStore = hash;
    }
    get previousHash() {
      const self = this;
      return self.prevHashStore;
    }
}

