# Hello World

GOAL: To print out latest block

## Steps

- Make sure you install [golang](https://golang.org/doc/install) v1.10.0^ and [node](https://nodejs.org/en/) v8.0.0^
- Make sure you setup `$GOPATH`, and git clone [thor](https://github.com/vechain/thor) under the src folder
- Follow the official [docs](https://github.com/vechain/thor) to build and run the testnet
- Your thor is ready on `http://localhost:8669/`
- We want to use [thorify](https://github.com/vechain/thorify) to interact with this endpoint
- index.js

```js
const { thorify } = require("thorify");
const Web3 = require("web3");

const web3 = new Web3();
thorify(web3, "http://localhost:8669");

web3.eth.getBlock("latest").then(res=>console.log(res));
```