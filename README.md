# What is this?
    A library to check the transaction status on ethereum network

# Installation
    `npm install ethereum-status-checker --save`

# Code usage
import {statusChecker} from 'ethereum-status-checker';

 statusChecker(["0x10b78142fac32faaa8839e90a657d8878d1f748cf8ce559b3591843b460fe848","0x10b78142fac32faaa8839e90a657d8878d1f748cf8ce559b3591843b460fe848"],"rinkeby")
.then(result=>{
    console.log("output",result)
}).catch(err=>{
    console.log("err",err)
})

## Options

    Status Checker needs two parameter first one is transaction array and another one is network type both of them are mandatory

- *Network Type* - Ropsten,Rinkeby,Mainnet,Goreli,Kovan.



