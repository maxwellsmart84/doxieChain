import SHA256 from "crypto-js/sha256";

class Block {
    constructor(data) {
        this.hash = this.toHash(data);
        this.data = data;
        this.previousHash = '';
    }
    toHash(data) {
        return SHA256(data);
    }
    toPreviousHash(prevHash) {
        const self = this;
        const stringedHash = prevHash.toString();
        self.hash = SHA256(`${stringedHash}${self.data}`);
        return self.previousHash = prevHash;
    }
}

module.exports = Block;
