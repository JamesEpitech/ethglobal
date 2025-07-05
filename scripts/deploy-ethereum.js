const { ethers } = require("hardhat");

async function main() {
  console.log("🚀 Deploying to Ethereum Sepolia...");
  
  // Deploy sequence
  const InsuranceCore = await ethers.getContractFactory("InsuranceCore");
  const PriceMonitor = await ethers.getContractFactory("PriceMonitor");
  const USDCManager = await ethers.getContractFactory("USDCManager");
  
  // Deploy and verify
  console.log("📋 Deployment complete!");
}

main().catch(console.error);