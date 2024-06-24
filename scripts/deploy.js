const hre = require("hardhat");

async function main() {
  // Get the contract to deploy
  const Payme = await hre.ethers.getContractFactory("paybuddy");

  // Deploy the contract
  const pay = await Payme.deploy();

  // Wait for the deployment transaction to be mined
  await pay.deployed();

  // Log the address of the deployed contract
  console.log("Deployed contract address:", pay.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
clearImmediate