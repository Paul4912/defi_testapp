const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(callback) {
    let tokenFarm = await TokenFarm.deployed()

    console.log("Tokens issued!");

    callback()
}