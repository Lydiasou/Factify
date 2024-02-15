const { ethers } = require('hardhat');

async function main() {
  try {
    const SocialNetwork = await ethers.getContractFactory('SocialNetwork');
    console.log('Deploying SocialNetwork...');
    const socialNetwork = await SocialNetwork.deploy();

    console.log("SocialNetwork:", socialNetwork);

    if (socialNetwork && socialNetwork.deployTransaction) {
      await socialNetwork.deployTransaction.wait(); // Attendre que la transaction de déploiement soit confirmée
      console.log('SocialNetwork deployed to:', socialNetwork.address);
    } else {
      console.error('Failed to deploy SocialNetwork or deployTransaction not available');
    }
  } catch (error) {
    console.error('Error deploying SocialNetwork:', error);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('An error occurred:', error);
    process.exit(1);
  });
