var Web3 = require("web3");
var networkType = [
  "ropsten",
  "rinkeby",
  "mainnet",
  "goerli",
  "kovan",
  "polygon",
  "mumbai",
];
async function statusChecker(array, type) {
  if (!Array.isArray(array)) {
    throw new Error("Send Transaction Hash in Array");
  }
  if (networkType.indexOf(type) == -1) {
    throw new Error("Network Type Not Exists");
  }
  const infura = `https://${type}.infura.io/v3/cdd44504675649709f195b3b8293255b`;
  var web3Type = new Web3(new Web3.providers.HttpProvider(infura));
  var results = [];
  var arrayResult = array.map(async (result) => {
    await web3Type.eth.getTransactionReceipt(result, (err, txReceipt) => {
      if (txReceipt === null) {
        var obj = { txnHash: result, Status: null };
        results.push(obj);
      } else if (typeof txReceipt === "undefined") {
        var obj = { txnHash: result, Status: null };
        results.push(obj);
      } else {
        var obj = { txnHash: result, Status: txReceipt.status };
        results.push(obj);
      }
    });
  });

  var output = await Promise.all(arrayResult);
  return results;
}

module.exports.statusChecker = statusChecker;
//  statusChecker(["0x10b78142fac32faaa8839e90a657d8878d1f748cf8ce559b3591843b460fe848","0x10b78142fac32faaa8839e90a657d8878d1f748cf8ce559b3591843b460fe848"],"rinkeby")
// .then(result=>{
//     console.log("output",result)
// }).catch(err=>{
//     console.log("err",err)
// })
