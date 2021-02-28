
const ethers = require('ethers');

const mnemonic = 'solid cupboard pet trumpet oil arrange dismiss leave ivory decade liberty cliff';

const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;
