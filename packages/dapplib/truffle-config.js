require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth oval coconut install climb olympic try'; 
let testAccounts = [
"0x1bc847a4c4d93f3fda404440f84638b03dd41492e95cf66224dc39681f3e9fc9",
"0xe3f7d99131a8c339a45cd15a541a44c6bcb457bfec5ee029bbeb982f45408732",
"0x40ed181dc6b814014d0e6432466a90d2d4d7552aafba7292e770aa6003dc7662",
"0xd5f8cd4b7c87c5cba658098dadc2191a3fd9b696d66db750095467bd14d54b7e",
"0x49851e481561556bf2bf74724a08d570a5624d05a6de49807dfe3f1ca48c02da",
"0x0b3c1e722b664591dce525e378b6492cf85d5fd24a352a7a5db12bce504d3386",
"0x907e9334c192682824abfaadc545f1bc733d0f445cedb1fbb804b34a3d5b7ebe",
"0x5364477bc559b92b2b788e5610815603d4b4e4e2af9018456fe955f5734fecc4",
"0x4e8c88be3c36d0a06900c4b7dcb59e43e6bf302bd3f9cd49512427fe6986b567",
"0xfeb776ec4b4b85cd530fe9bd3bda00b2d8c745618f6ceb0dfd7dee393e7c0b2b"
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

