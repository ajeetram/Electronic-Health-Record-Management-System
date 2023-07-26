require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "N-6U5z-dpQ1jp7atdCCTOEgcLtB7cdhh";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const Sepolia_PRIVATE_KEY = "f4a7696855457744bcc31e6fa11291087ac7d0a4fb251bd869eb7e3067c598a1";

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [Sepolia_PRIVATE_KEY]
    }
  }
};