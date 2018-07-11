# Doxie Chain [![Build Status](https://travis-ci.org/maxwellsmart84/doxieChain.svg?branch=master)](https://travis-ci.org/maxwellsmart84/doxieChain)
### A lightweight Blockchain built in JS

## Usage
To add to a dependency to your project:

`npm install doxie-chain --save`

Import/Require It

`import { Block, Blockchain } from doxie-chain`
or

`const { Block, Blockchain } = require('doxie-chain');`

Now Creating a Chain

```
const blockchain = new Blockchain();

  blockchain.addBlock(new Block('Bear'))
  blockchain.addBlock(new Block('Walter'))
  blockchain.addBlock(new Block('Wrigley))

```
Block contains the properties:

```
const block = new Block('Batman')
block.hash = //SHA256 hash of ${block.previouHash}$""{'Batman'}
block.previousHash = // SHA256 hash of the previous block's hash in the chain, changing this will change the hash.
block.data = 'Batman'
```

To inspect your chain

`blockchain.chain === // Array of your Blocks ex: [Block(), Block()]`

To validate your Blockchain:
`blockchain.isValid() // Returns True or False, if your chain or data was mainupulated this will return False.`


And *thats* it!

*Special thanks to chainshot.com for writing some great tests*
