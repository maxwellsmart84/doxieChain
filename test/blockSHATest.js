const Block = require('../Block.js');
const assert = require('assert');
const SHA256 = require("crypto-js/sha256");
const faker = require('faker');

describe('Block SHA Test', function() {
    it('should store a random name', function() {
        const randomName = faker.name.findName();
        assert.equal(randomName, new Block(randomName).data)
    });

    it('should hash some random data', function() {
        const randomEmail = faker.internet.email();
        const myHash = SHA256(randomEmail).toString();
        const yourHash = new Block(randomEmail).hash.toString();
        assert.equal(myHash, yourHash);
    })
})