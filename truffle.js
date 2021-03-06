module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8546,
      network_id: '*' // Match any network id
    },
    rinkeby: getRinkebyConfig()
  }
}

function getRinkebyConfig () {
  var HDWalletProvider = require('truffle-hdwallet-provider')
  var secrets = {}
  try {
    secrets = require('./secrets.json')
  } catch (err) {
    console.log('could not find ./secrets.json')
  }

  var rinkebyProvider = new HDWalletProvider(secrets.mnemonic, 'https://rinkeby.infura.io/' + secrets.infura_apikey)

  return {
    network_id: 4,
    provider: rinkebyProvider,
    from: rinkebyProvider.getAddress()
  }
}
