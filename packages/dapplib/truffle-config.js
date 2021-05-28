require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain million island clock outer tragic'; 
let testAccounts = [
"0xc9a68ac64964efb6de43c69efe6bde4bffba578fea2bd34a65e8742cea58f43c",
"0xf14606b67ef122dc7bb1cd6258ea898eb2bca054395e039e365a24c0ccb794c8",
"0x9cd084d691b41fb0b45e72977d7ebb0ec5ce086598064331758cd5e3f191da9e",
"0x6d44de1140cbf06770b26cedfe3d4f8749754568a96360b1177f01f96ad6e3d3",
"0x5a3efed2045102c3972f0ac1ea8195a09db355db03b13b459c5771e1dc24280a",
"0x4acf3e1733c148c411d14b01c232489fa1bd082a6aea6c25581794e804878d53",
"0xbc2b2983060a795ff2e40167714fe21598cf47c9df3d5b04353b5e017d29224d",
"0xb2f4f2815e7a3aca05a6df8bd91ca552a7b559d20781c741415e4f4a4c279b7c",
"0xfa2395de6488806b1699ac4322f0dc4f733d6b618ff6403b14eaed4438b81218",
"0x9899f66688a8b0ea0176ffaa33a2f8c8c0d7cd592a0f8fa8eca3447daad3e5fb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

