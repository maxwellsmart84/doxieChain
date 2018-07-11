const Block = require('../Block');
const assert = require('assert');

describe('Block', function() {
    let newBlock = new Block();

    it('should have a hash property', function(){
        assert(/^[0-9A-F]{64}$/i.test(newBlock.hash));
    });
})