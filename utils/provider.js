
const ethers = require('ethers');

const provider = ethers.getDefaultProvider('ropsten', {
	infura: 'https://ropsten.infura.io/v3/fe673fce7dbc44fd83398e62242fc9a4'
});

module.exports = provider;
