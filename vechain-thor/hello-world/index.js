const thorify = require('thorify').thorify;
const Web3 = require('web3');

const web3 = thorify(new Web3(), 'http://localhost:8669');

// setInterval(()=>{
web3.eth.getBlock("latest").then(res => console.log(res.number));
// }, 10000)

web3.eth.subscribe('logs').on('data', function(transaction) {
  console.log(transaction.meta.blockNumber, transaction);
});
