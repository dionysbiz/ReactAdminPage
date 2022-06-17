export const localChainList = JSON.parse(`
[
    {
    "name": "Ethereum Mainnet",
    "chainId": 1,
    "shortName": "eth",
    "networkId": 1,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.infura.io/v3/\${INFURA_API_KEY}",
    "wss://mainnet.infura.io/ws/v3/\${INFURA_API_KEY}",
    "https://api.mycryptoapi.com/eth",
    "https://cloudflare-eth.com"
    ],
    "faucets": [],
    "infoURL": "https://ethereum.org"
    },
    {
    "name": "Expanse Network",
    "chainId": 2,
    "shortName": "exp",
    "networkId": 1,
    "nativeCurrency": {
    "name": "Expanse Network Ether",
    "symbol": "EXP",
    "decimals": 18
    },
    "rpc": [
    "https://node.expanse.tech"
    ],
    "faucets": [],
    "infoURL": "https://expanse.tech"
    },
    {
    "name": "Ropsten",
    "chainId": 3,
    "shortName": "rop",
    "networkId": 3,
    "nativeCurrency": {
    "name": "Ropsten Ether",
    "symbol": "ROP",
    "decimals": 18
    },
    "rpc": [
    "https://ropsten.infura.io/v3/\${INFURA_API_KEY}",
    "wss://ropsten.infura.io/ws/v3/\${INFURA_API_KEY}"
    ],
    "faucets": [
    "http://fauceth.komputing.org?chain=3&address=\${ADDRESS}",
    "https://faucet.ropsten.be?\${ADDRESS}"
    ],
    "infoURL": "https://github.com/ethereum/ropsten"
    },
    {
    "name": "Rinkeby",
    "chainId": 4,
    "shortName": "rin",
    "networkId": 4,
    "nativeCurrency": {
    "name": "Rinkeby Ether",
    "symbol": "RIN",
    "decimals": 18
    },
    "rpc": [
    "https://rinkeby.infura.io/v3/\${INFURA_API_KEY}",
    "wss://rinkeby.infura.io/ws/v3/\${INFURA_API_KEY}"
    ],
    "faucets": [
    "http://fauceth.komputing.org?chain=4&address=\${ADDRESS}",
    "https://faucet.rinkeby.io"
    ],
    "infoURL": "https://www.rinkeby.io"
    },
    {
    "name": "Görli",
    "chainId": 5,
    "shortName": "gor",
    "networkId": 5,
    "nativeCurrency": {
    "name": "Görli Ether",
    "symbol": "GOR",
    "decimals": 18
    },
    "rpc": [
    "https://goerli.infura.io/v3/\${INFURA_API_KEY}",
    "wss://goerli.infura.io/v3/\${INFURA_API_KEY}",
    "https://rpc.goerli.mudit.blog/"
    ],
    "faucets": [
    "http://fauceth.komputing.org?chain=5&address=\${ADDRESS}",
    "https://goerli-faucet.slock.it?address=\${ADDRESS}",
    "https://faucet.goerli.mudit.blog"
    ],
    "infoURL": "https://goerli.net/#about"
    },
    {
    "name": "Ethereum Classic Testnet Kotti",
    "chainId": 6,
    "shortName": "kot",
    "networkId": 6,
    "nativeCurrency": {
    "name": "Kotti Ether",
    "symbol": "KOT",
    "decimals": 18
    },
    "rpc": [
    "https://www.ethercluster.com/kotti"
    ],
    "faucets": [],
    "infoURL": "https://explorer.jade.builders/?network=kotti"
    },
    {
    "name": "ThaiChain",
    "chainId": 7,
    "shortName": "tch",
    "networkId": 7,
    "nativeCurrency": {
    "name": "ThaiChain Ether",
    "symbol": "TCH",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.dome.cloud"
    ],
    "faucets": [],
    "infoURL": "https://thaichain.io"
    },
    {
    "name": "Ubiq",
    "chainId": 8,
    "shortName": "ubq",
    "networkId": 8,
    "nativeCurrency": {
    "name": "Ubiq Ether",
    "symbol": "UBQ",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.octano.dev",
    "https://pyrus2.ubiqscan.io"
    ],
    "faucets": [],
    "infoURL": "https://ubiqsmart.com"
    },
    {
    "name": "Ubiq Network Testnet",
    "chainId": 9,
    "shortName": "tubq",
    "networkId": 2,
    "nativeCurrency": {
    "name": "Ubiq Testnet Ether",
    "symbol": "TUBQ",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://ethersocial.org"
    },
    {
    "name": "Optimism",
    "chainId": 10,
    "shortName": "oeth",
    "networkId": 10,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.optimism.io/"
    ],
    "faucets": [],
    "infoURL": "https://optimism.io"
    },
    {
    "name": "Metadium Mainnet",
    "chainId": 11,
    "shortName": "meta",
    "networkId": 11,
    "nativeCurrency": {
    "name": "Metadium Mainnet Ether",
    "symbol": "META",
    "decimals": 18
    },
    "rpc": [
    "https://api.metadium.com/prod"
    ],
    "faucets": [],
    "infoURL": "https://metadium.com"
    },
    {
    "name": "Metadium Testnet",
    "chainId": 12,
    "shortName": "kal",
    "networkId": 12,
    "nativeCurrency": {
    "name": "Metadium Testnet Ether",
    "symbol": "KAL",
    "decimals": 18
    },
    "rpc": [
    "https://api.metadium.com/dev"
    ],
    "faucets": [],
    "infoURL": "https://metadium.com"
    },
    {
    "name": "Diode Testnet Staging",
    "chainId": 13,
    "shortName": "dstg",
    "networkId": 13,
    "nativeCurrency": {
    "name": "Staging Diodes",
    "symbol": "sDIODE",
    "decimals": 18
    },
    "rpc": [
    "https://staging.diode.io:8443/",
    "wss://staging.diode.io:8443/ws"
    ],
    "faucets": [],
    "infoURL": "https://diode.io/staging"
    },
    {
    "name": "Flare Mainnet",
    "chainId": 14,
    "shortName": "flr",
    "networkId": 14,
    "nativeCurrency": {
    "name": "Spark",
    "symbol": "FLR",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://flare.xyz"
    },
    {
    "name": "Diode Prenet",
    "chainId": 15,
    "shortName": "diode",
    "networkId": 15,
    "nativeCurrency": {
    "name": "Diodes",
    "symbol": "DIODE",
    "decimals": 18
    },
    "rpc": [
    "https://prenet.diode.io:8443/",
    "wss://prenet.diode.io:8443/ws"
    ],
    "faucets": [],
    "infoURL": "https://diode.io/prenet"
    },
    {
    "name": "Flare Testnet Coston",
    "chainId": 16,
    "shortName": "cflr",
    "networkId": 16,
    "nativeCurrency": {
    "name": "Coston Spark",
    "symbol": "CFLR",
    "decimals": 18
    },
    "rpc": [
    "https://coston-api.flare.network/ext/bc/C/rpc"
    ],
    "faucets": [
    "https://faucet.towolabs.com",
    "https://fauceth.komputing.org?chain=16&address=\${ADDRESS}"
    ],
    "infoURL": "https://flare.xyz"
    },
    {
    "name": "ThaiChain 2.0 ThaiFi",
    "chainId": 17,
    "shortName": "tfi",
    "networkId": 17,
    "nativeCurrency": {
    "name": "Thaifi Ether",
    "symbol": "TFI",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.thaifi.com"
    ],
    "faucets": [],
    "infoURL": "https://exp.thaifi.com"
    },
    {
    "name": "ThunderCore Testnet",
    "chainId": 18,
    "shortName": "TST",
    "networkId": 18,
    "nativeCurrency": {
    "name": "ThunderCore Testnet Token",
    "symbol": "TST",
    "decimals": 18
    },
    "rpc": [
    "https://testnet-rpc.thundercore.com"
    ],
    "faucets": [
    "https://faucet-testnet.thundercore.com"
    ],
    "infoURL": "https://thundercore.com"
    },
    {
    "name": "Songbird Canary-Network",
    "chainId": 19,
    "shortName": "sgb",
    "networkId": 19,
    "nativeCurrency": {
    "name": "Songbird",
    "symbol": "SGB",
    "decimals": 18
    },
    "rpc": [
    "https://songbird.towolabs.com/rpc",
    "https://sgb.ftso.com.au/ext/bc/C/rpc",
    "https://sgb.lightft.so/rpc",
    "https://sgb-rpc.ftso.eu"
    ],
    "faucets": [],
    "infoURL": "https://flare.xyz"
    },
    {
    "name": "Elastos Smart Chain",
    "chainId": 20,
    "shortName": "elaeth",
    "networkId": 20,
    "nativeCurrency": {
    "name": "Elastos",
    "symbol": "ELA",
    "decimals": 18
    },
    "rpc": [
    "https://api.elastos.io/eth"
    ],
    "faucets": [
    "https://faucet.elastos.org/"
    ],
    "infoURL": "https://www.elastos.org/"
    },
    {
    "name": "ELA-ETH-Sidechain Testnet",
    "chainId": 21,
    "shortName": "elaetht",
    "networkId": 21,
    "nativeCurrency": {
    "name": "Elastos",
    "symbol": "tELA",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.elaeth.io"
    ],
    "faucets": [
    "https://faucet.elaeth.io/"
    ],
    "infoURL": "https://elaeth.io/"
    },
    {
    "name": "ELA-DID-Sidechain Mainnet",
    "chainId": 22,
    "shortName": "eladid",
    "networkId": 22,
    "nativeCurrency": {
    "name": "Elastos",
    "symbol": "ELA",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://www.elastos.org/"
    },
    {
    "name": "ELA-DID-Sidechain Testnet",
    "chainId": 23,
    "shortName": "eladidt",
    "networkId": 23,
    "nativeCurrency": {
    "name": "Elastos",
    "symbol": "tELA",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://elaeth.io/"
    },
    {
    "name": "Dithereum Mainnet",
    "chainId": 24,
    "shortName": "dthmainnet",
    "networkId": 24,
    "nativeCurrency": {
    "name": "Dither",
    "symbol": "DTH",
    "decimals": 18
    },
    "rpc": [
    "https://node-mainnet.dithereum.io"
    ],
    "faucets": [
    "https://faucet.dithereum.org"
    ],
    "infoURL": "https://dithereum.org"
    },
    {
    "name": "Cronos Mainnet Beta",
    "chainId": 25,
    "shortName": "cro",
    "networkId": 25,
    "nativeCurrency": {
    "name": "Cronos",
    "symbol": "CRO",
    "decimals": 18
    },
    "rpc": [
    "https://evm.cronos.org"
    ],
    "faucets": [],
    "infoURL": "https://cronos.org/"
    },
    {
    "name": "Genesis L1 testnet",
    "chainId": 26,
    "shortName": "L1test",
    "networkId": 26,
    "nativeCurrency": {
    "name": "L1 testcoin",
    "symbol": "L1test",
    "decimals": 18
    },
    "rpc": [
    "https://testrpc.genesisl1.org"
    ],
    "faucets": [],
    "infoURL": "https://www.genesisl1.com"
    },
    {
    "name": "ShibaChain",
    "chainId": 27,
    "shortName": "shib",
    "networkId": 27,
    "nativeCurrency": {
    "name": "SHIBA INU COIN",
    "symbol": "SHIB",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.shibachain.net"
    ],
    "faucets": [],
    "infoURL": "https://www.shibachain.net"
    },
    {
    "name": "Boba Network Rinkeby Testnet",
    "chainId": 28,
    "shortName": "Boba Rinkeby",
    "networkId": 28,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://rinkeby.boba.network/"
    ],
    "faucets": [],
    "infoURL": "https://boba.network"
    },
    {
    "name": "Genesis L1",
    "chainId": 29,
    "shortName": "L1",
    "networkId": 29,
    "nativeCurrency": {
    "name": "L1 coin",
    "symbol": "L1",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.genesisl1.org"
    ],
    "faucets": [],
    "infoURL": "https://www.genesisl1.com"
    },
    {
    "name": "RSK Mainnet",
    "chainId": 30,
    "shortName": "rsk",
    "networkId": 30,
    "nativeCurrency": {
    "name": "RSK Mainnet Ether",
    "symbol": "RBTC",
    "decimals": 18
    },
    "rpc": [
    "https://public-node.rsk.co",
    "https://mycrypto.rsk.co"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://rsk.co"
    },
    {
    "name": "RSK Testnet",
    "chainId": 31,
    "shortName": "trsk",
    "networkId": 31,
    "nativeCurrency": {
    "name": "RSK Testnet Ether",
    "symbol": "tRBTC",
    "decimals": 18
    },
    "rpc": [
    "https://public-node.testnet.rsk.co",
    "https://mycrypto.testnet.rsk.co"
    ],
    "faucets": [
    "https://faucet.testnet.rsk.co"
    ],
    "infoURL": "https://rsk.co"
    },
    {
    "name": "GoodData Testnet",
    "chainId": 32,
    "shortName": "GooDT",
    "networkId": 32,
    "nativeCurrency": {
    "name": "GoodData Testnet Ether",
    "symbol": "GooD",
    "decimals": 18
    },
    "rpc": [
    "https://test2.goodata.io"
    ],
    "faucets": [],
    "infoURL": "https://www.goodata.org"
    },
    {
    "name": "GoodData Mainnet",
    "chainId": 33,
    "shortName": "GooD",
    "networkId": 33,
    "nativeCurrency": {
    "name": "GoodData Mainnet Ether",
    "symbol": "GooD",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.goodata.io"
    ],
    "faucets": [],
    "infoURL": "https://www.goodata.org"
    },
    {
    "name": "Dithereum Testnet",
    "chainId": 34,
    "shortName": "dth",
    "networkId": 34,
    "nativeCurrency": {
    "name": "Dither",
    "symbol": "DTH",
    "decimals": 18
    },
    "rpc": [
    "https://node-testnet.dithereum.io"
    ],
    "faucets": [
    "https://faucet.dithereum.org"
    ],
    "infoURL": "https://dithereum.org"
    },
    {
    "name": "TBWG Chain",
    "chainId": 35,
    "shortName": "tbwg",
    "networkId": 35,
    "nativeCurrency": {
    "name": "TBWG Ether",
    "symbol": "TBG",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.tbwg.io"
    ],
    "faucets": [],
    "infoURL": "https://tbwg.io"
    },
    {
    "name": "Valorbit",
    "chainId": 38,
    "shortName": "val",
    "networkId": 38,
    "nativeCurrency": {
    "name": "Valorbit",
    "symbol": "VAL",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.valorbit.com/v2"
    ],
    "faucets": [],
    "infoURL": "https://valorbit.com"
    },
    {
    "name": "Telos EVM Mainnet",
    "chainId": 40,
    "shortName": "Telos EVM",
    "networkId": 40,
    "nativeCurrency": {
    "name": "Telos",
    "symbol": "TLOS",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.telos.net/evm"
    ],
    "faucets": [],
    "infoURL": "https://telos.net"
    },
    {
    "name": "Telos EVM Testnet",
    "chainId": 41,
    "shortName": "Telos EVM Testnet",
    "networkId": 41,
    "nativeCurrency": {
    "name": "Telos",
    "symbol": "TLOS",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.telos.net/evm"
    ],
    "faucets": [
    "https://app.telos.net/testnet/developers"
    ],
    "infoURL": "https://telos.net"
    },
    {
    "name": "Kovan",
    "chainId": 42,
    "shortName": "kov",
    "networkId": 42,
    "nativeCurrency": {
    "name": "Kovan Ether",
    "symbol": "KOV",
    "decimals": 18
    },
    "rpc": [
    "https://kovan.poa.network",
    "http://kovan.poa.network:8545",
    "https://kovan.infura.io/v3/\${INFURA_API_KEY}",
    "wss://kovan.infura.io/ws/v3/\${INFURA_API_KEY}",
    "ws://kovan.poa.network:8546"
    ],
    "faucets": [
    "http://fauceth.komputing.org?chain=42&address=\${ADDRESS}",
    "https://faucet.kovan.network",
    "https://gitter.im/kovan-testnet/faucet"
    ],
    "infoURL": "https://kovan-testnet.github.io/website"
    },
    {
    "name": "Darwinia Pangolin Testnet",
    "chainId": 43,
    "shortName": "pangolin",
    "networkId": 43,
    "nativeCurrency": {
    "name": "Pangolin Network Native Token”",
    "symbol": "PRING",
    "decimals": 18
    },
    "rpc": [
    "https://pangolin-rpc.darwinia.network"
    ],
    "faucets": [
    "https://docs.crab.network/dvm/wallets/dvm-metamask#apply-for-the-test-token"
    ],
    "infoURL": "https://darwinia.network/"
    },
    {
    "name": "Darwinia Crab Network",
    "chainId": 44,
    "shortName": "crab",
    "networkId": 44,
    "nativeCurrency": {
    "name": "Crab Network Native Token",
    "symbol": "CRAB",
    "decimals": 18
    },
    "rpc": [
    "https://crab-rpc.darwinia.network"
    ],
    "faucets": [],
    "infoURL": "https://crab.network/"
    },
    {
    "name": "Darwinia Pangoro Testnet",
    "chainId": 45,
    "shortName": "pangoro",
    "networkId": 45,
    "nativeCurrency": {
    "name": "Pangoro Network Native Token”",
    "symbol": "ORING",
    "decimals": 18
    },
    "rpc": [
    "http://pangoro-rpc.darwinia.network"
    ],
    "faucets": [],
    "infoURL": "https://darwinia.network/"
    },
    {
    "name": "XinFin Network Mainnet",
    "chainId": 50,
    "shortName": "xdc",
    "networkId": 50,
    "nativeCurrency": {
    "name": "XinFin",
    "symbol": "XDC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.xinfin.network"
    ],
    "faucets": [],
    "infoURL": "https://xinfin.org"
    },
    {
    "name": "XinFin Apothem Testnet",
    "chainId": 51,
    "shortName": "TXDC",
    "networkId": 51,
    "nativeCurrency": {
    "name": "XinFinTest",
    "symbol": "TXDC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.apothem.network"
    ],
    "faucets": [],
    "infoURL": "https://xinfin.org"
    },
    {
    "name": "CoinEx Smart Chain Mainnet",
    "chainId": 52,
    "shortName": "cet",
    "networkId": 52,
    "nativeCurrency": {
    "name": "CoinEx Chain Native Token",
    "symbol": "cet",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.coinex.net"
    ],
    "faucets": [],
    "infoURL": "https://www.coinex.org/"
    },
    {
    "name": "CoinEx Smart Chain Testnet",
    "chainId": 53,
    "shortName": "tcet",
    "networkId": 53,
    "nativeCurrency": {
    "name": "CoinEx Chain Test Native Token",
    "symbol": "cett",
    "decimals": 18
    },
    "rpc": [
    "https://testnet-rpc.coinex.net/"
    ],
    "faucets": [],
    "infoURL": "https://www.coinex.org/"
    },
    {
    "name": "Openpiece Mainnet",
    "chainId": 54,
    "shortName": "OP",
    "networkId": 54,
    "nativeCurrency": {
    "name": "Belly",
    "symbol": "BELLY",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.openpiece.io"
    ],
    "faucets": [],
    "infoURL": "https://cryptopiece.online"
    },
    {
    "name": "Zyx Mainnet",
    "chainId": 55,
    "shortName": "ZYX",
    "networkId": 55,
    "nativeCurrency": {
    "name": "Zyx",
    "symbol": "ZYX",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-1.zyx.network/",
    "https://rpc-2.zyx.network/",
    "https://rpc-3.zyx.network/",
    "https://rpc-4.zyx.network/",
    "https://rpc-5.zyx.network/",
    "https://rpc-6.zyx.network/"
    ],
    "faucets": [],
    "infoURL": "https://zyx.network/"
    },
    {
    "name": "Binance Smart Chain Mainnet",
    "chainId": 56,
    "shortName": "bnb",
    "networkId": 56,
    "nativeCurrency": {
    "name": "Binance Chain Native Token",
    "symbol": "BNB",
    "decimals": 18
    },
    "rpc": [
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed3.binance.org",
    "https://bsc-dataseed4.binance.org",
    "https://bsc-dataseed1.defibit.io",
    "https://bsc-dataseed2.defibit.io",
    "https://bsc-dataseed3.defibit.io",
    "https://bsc-dataseed4.defibit.io",
    "https://bsc-dataseed1.ninicoin.io",
    "https://bsc-dataseed2.ninicoin.io",
    "https://bsc-dataseed3.ninicoin.io",
    "https://bsc-dataseed4.ninicoin.io",
    "wss://bsc-ws-node.nariox.org"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://www.binance.org"
    },
    {
    "name": "Syscoin Mainnet",
    "chainId": 57,
    "shortName": "sys",
    "networkId": 57,
    "nativeCurrency": {
    "name": "Syscoin",
    "symbol": "SYS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.syscoin.org",
    "wss://rpc.syscoin.org/wss"
    ],
    "faucets": [
    "https://faucet.syscoin.org"
    ],
    "infoURL": "https://www.syscoin.org"
    },
    {
    "name": "Ontology Mainnet",
    "chainId": 58,
    "shortName": "Ontology Mainnet",
    "networkId": 58,
    "nativeCurrency": {
    "name": "ONG",
    "symbol": "ONG",
    "decimals": 18
    },
    "rpc": [
    "http://dappnode1.ont.io:20339",
    "http://dappnode2.ont.io:20339",
    "http://dappnode3.ont.io:20339",
    "http://dappnode4.ont.io:20339",
    "https://dappnode1.ont.io:10339",
    "https://dappnode2.ont.io:10339",
    "https://dappnode3.ont.io:10339",
    "https://dappnode4.ont.io:10339"
    ],
    "faucets": [],
    "infoURL": "https://ont.io/"
    },
    {
    "name": "EOS Mainnet",
    "chainId": 59,
    "shortName": "EOS Mainnet",
    "networkId": 59,
    "nativeCurrency": {
    "name": "EOS",
    "symbol": "EOS",
    "decimals": 18
    },
    "rpc": [
    "https://api.eosargentina.io"
    ],
    "faucets": [],
    "infoURL": "https://eoscommunity.org/"
    },
    {
    "name": "GoChain",
    "chainId": 60,
    "shortName": "go",
    "networkId": 60,
    "nativeCurrency": {
    "name": "GoChain Ether",
    "symbol": "GO",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.gochain.io"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://gochain.io"
    },
    {
    "name": "Ethereum Classic Mainnet",
    "chainId": 61,
    "shortName": "etc",
    "networkId": 1,
    "nativeCurrency": {
    "name": "Ethereum Classic Ether",
    "symbol": "ETC",
    "decimals": 18
    },
    "rpc": [
    "https://www.ethercluster.com/etc"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/?"
    ],
    "infoURL": "https://ethereumclassic.org"
    },
    {
    "name": "Ethereum Classic Testnet Morden",
    "chainId": 62,
    "shortName": "tetc",
    "networkId": 2,
    "nativeCurrency": {
    "name": "Ethereum Classic Testnet Ether",
    "symbol": "TETC",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://ethereumclassic.org"
    },
    {
    "name": "Ethereum Classic Testnet Mordor",
    "chainId": 63,
    "shortName": "metc",
    "networkId": 7,
    "nativeCurrency": {
    "name": "Mordor Classic Testnet Ether",
    "symbol": "METC",
    "decimals": 18
    },
    "rpc": [
    "https://www.ethercluster.com/mordor"
    ],
    "faucets": [],
    "infoURL": "https://github.com/eth-classic/mordor/"
    },
    {
    "name": "Ellaism",
    "chainId": 64,
    "shortName": "ella",
    "networkId": 64,
    "nativeCurrency": {
    "name": "Ellaism Ether",
    "symbol": "ELLA",
    "decimals": 18
    },
    "rpc": [
    "https://jsonrpc.ellaism.org"
    ],
    "faucets": [],
    "infoURL": "https://ellaism.org"
    },
    {
    "name": "OKExChain Testnet",
    "chainId": 65,
    "shortName": "tokt",
    "networkId": 65,
    "nativeCurrency": {
    "name": "OKExChain Global Utility Token in testnet",
    "symbol": "OKT",
    "decimals": 18
    },
    "rpc": [
    "https://exchaintestrpc.okex.org"
    ],
    "faucets": [
    "https://www.okex.com/drawdex"
    ],
    "infoURL": "https://www.okex.com/okexchain"
    },
    {
    "name": "OKXChain Mainnet",
    "chainId": 66,
    "shortName": "okt",
    "networkId": 66,
    "nativeCurrency": {
    "name": "OKXChain Global Utility Token",
    "symbol": "OKT",
    "decimals": 18
    },
    "rpc": [
    "https://exchainrpc.okex.org",
    "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/?"
    ],
    "infoURL": "https://www.okex.com/okc"
    },
    {
    "name": "DBChain Testnet",
    "chainId": 67,
    "shortName": "dbm",
    "networkId": 67,
    "nativeCurrency": {
    "name": "DBChain Testnet",
    "symbol": "DBM",
    "decimals": 18
    },
    "rpc": [
    "http://test-rpc.dbmbp.com"
    ],
    "faucets": [],
    "infoURL": "http://test.dbmbp.com"
    },
    {
    "name": "SoterOne Mainnet",
    "chainId": 68,
    "shortName": "SO1",
    "networkId": 68,
    "nativeCurrency": {
    "name": "SoterOne Mainnet Ether",
    "symbol": "SOTER",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.soter.one"
    ],
    "faucets": [],
    "infoURL": "https://www.soterone.com"
    },
    {
    "name": "Optimism Kovan",
    "chainId": 69,
    "shortName": "okov",
    "networkId": 69,
    "nativeCurrency": {
    "name": "Kovan Ether",
    "symbol": "KOR",
    "decimals": 18
    },
    "rpc": [
    "https://kovan.optimism.io/"
    ],
    "faucets": [
    "http://fauceth.komputing.org?chain=69&address=\${ADDRESS}"
    ],
    "infoURL": "https://optimism.io"
    },
    {
    "name": "Hoo Smart Chain",
    "chainId": 70,
    "shortName": "hsc",
    "networkId": 70,
    "nativeCurrency": {
    "name": "Hoo Smart Chain Native Token",
    "symbol": "HOO",
    "decimals": 18
    },
    "rpc": [
    "https://http-mainnet.hoosmartchain.com",
    "https://http-mainnet2.hoosmartchain.com",
    "wss://ws-mainnet.hoosmartchain.com",
    "wss://ws-mainnet2.hoosmartchain.com"
    ],
    "faucets": [],
    "infoURL": "https://www.hoosmartchain.com"
    },
    {
    "name": "Conflux eSpace (Testnet)",
    "chainId": 71,
    "shortName": "cfxtest",
    "networkId": 71,
    "nativeCurrency": {
    "name": "CFX",
    "symbol": "CFX",
    "decimals": 18
    },
    "rpc": [
    "https://evmtestnet.confluxrpc.com"
    ],
    "faucets": [
    "https://faucet.confluxnetwork.org"
    ],
    "infoURL": "https://confluxnetwork.org"
    },
    {
    "name": "IDChain Mainnet",
    "chainId": 74,
    "shortName": "idchain",
    "networkId": 74,
    "nativeCurrency": {
    "name": "EIDI",
    "symbol": "EIDI",
    "decimals": 18
    },
    "rpc": [
    "https://idchain.one/rpc/",
    "wss://idchain.one/ws/"
    ],
    "faucets": [],
    "infoURL": "https://idchain.one/begin/"
    },
    {
    "name": "Mix",
    "chainId": 76,
    "shortName": "mix",
    "networkId": 76,
    "nativeCurrency": {
    "name": "Mix Ether",
    "symbol": "MIX",
    "decimals": 18
    },
    "rpc": [
    "https://rpc2.mix-blockchain.org:8647"
    ],
    "faucets": [],
    "infoURL": "https://mix-blockchain.org"
    },
    {
    "name": "POA Network Sokol",
    "chainId": 77,
    "shortName": "spoa",
    "networkId": 77,
    "nativeCurrency": {
    "name": "POA Sokol Ether",
    "symbol": "SPOA",
    "decimals": 18
    },
    "rpc": [
    "https://sokol.poa.network",
    "wss://sokol.poa.network/wss",
    "ws://sokol.poa.network:8546"
    ],
    "faucets": [
    "https://faucet.poa.network"
    ],
    "infoURL": "https://poa.network"
    },
    {
    "name": "PrimusChain mainnet",
    "chainId": 78,
    "shortName": "primuschain",
    "networkId": 78,
    "nativeCurrency": {
    "name": "Primus Ether",
    "symbol": "PETH",
    "decimals": 18
    },
    "rpc": [
    "https://ethnode.primusmoney.com/mainnet"
    ],
    "faucets": [],
    "infoURL": "https://primusmoney.com"
    },
    {
    "name": "Zenith Mainnet",
    "chainId": 79,
    "shortName": "zenith",
    "networkId": 79,
    "nativeCurrency": {
    "name": "ZENITH",
    "symbol": "ZENITH",
    "decimals": 18
    },
    "rpc": [
    "https://dataserver-us-1.zenithchain.co/",
    "https://dataserver-asia-3.zenithchain.co/",
    "https://dataserver-asia-4.zenithchain.co/",
    "https://dataserver-asia-2.zenithchain.co/",
    "https://dataserver-asia-5.zenithchain.co/",
    "https://dataserver-asia-6.zenithchain.co/",
    "https://dataserver-asia-7.zenithchain.co/"
    ],
    "faucets": [],
    "infoURL": "https://www.zenithchain.co/"
    },
    {
    "name": "GeneChain",
    "chainId": 80,
    "shortName": "GeneChain",
    "networkId": 80,
    "nativeCurrency": {
    "name": "RNA",
    "symbol": "RNA",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.genechain.io"
    ],
    "faucets": [],
    "infoURL": "https://scan.genechain.io/"
    },
    {
    "name": "Zenith Testnet (Vilnius)",
    "chainId": 81,
    "shortName": "VIL",
    "networkId": 81,
    "nativeCurrency": {
    "name": "Vilnius",
    "symbol": "VIL",
    "decimals": 18
    },
    "rpc": [
    "https://vilnius.zenithchain.co/http"
    ],
    "faucets": [
    "https://faucet.zenithchain.co/"
    ],
    "infoURL": "https://www.zenithchain.co/"
    },
    {
    "name": "Meter Mainnet",
    "chainId": 82,
    "shortName": "Meter",
    "networkId": 82,
    "nativeCurrency": {
    "name": "Meter",
    "symbol": "MTR",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.meter.io"
    ],
    "faucets": [
    "https://faucet.meter.io"
    ],
    "infoURL": "https://www.meter.io"
    },
    {
    "name": "Meter Testnet",
    "chainId": 83,
    "shortName": "MeterTest",
    "networkId": 83,
    "nativeCurrency": {
    "name": "Meter",
    "symbol": "MTR",
    "decimals": 18
    },
    "rpc": [
    "https://rpctest.meter.io"
    ],
    "faucets": [
    "https://faucet-warringstakes.meter.io"
    ],
    "infoURL": "https://www.meter.io"
    },
    {
    "name": "GateChain Testnet",
    "chainId": 85,
    "shortName": "gttest",
    "networkId": 85,
    "nativeCurrency": {
    "name": "GateToken",
    "symbol": "GT",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.gatenode.cc"
    ],
    "faucets": [
    "https://www.gatescan.org/testnet/faucet"
    ],
    "infoURL": "https://www.gatechain.io"
    },
    {
    "name": "GateChain Mainnet",
    "chainId": 86,
    "shortName": "gt",
    "networkId": 86,
    "nativeCurrency": {
    "name": "GateToken",
    "symbol": "GT",
    "decimals": 18
    },
    "rpc": [
    "https://evm.gatenode.cc"
    ],
    "faucets": [
    "https://www.gatescan.org/faucet"
    ],
    "infoURL": "https://www.gatechain.io"
    },
    {
    "name": "Nova Network",
    "chainId": 87,
    "shortName": "nnw",
    "networkId": 87,
    "nativeCurrency": {
    "name": "Supernova",
    "symbol": "SNT",
    "decimals": 18
    },
    "rpc": [
    "https://connect.novanetwork.io",
    "https://0x57.redjackstudio.com",
    "https://rpc.novanetwork.io:9070"
    ],
    "faucets": [],
    "infoURL": "https://novanetwork.io"
    },
    {
    "name": "TomoChain",
    "chainId": 88,
    "shortName": "tomo",
    "networkId": 88,
    "nativeCurrency": {
    "name": "TomoChain",
    "symbol": "TOMO",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.tomochain.com"
    ],
    "faucets": [],
    "infoURL": "https://tomochain.com"
    },
    {
    "name": "TomoChain Testnet",
    "chainId": 89,
    "shortName": "tomot",
    "networkId": 89,
    "nativeCurrency": {
    "name": "TomoChain",
    "symbol": "TOMO",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.testnet.tomochain.com"
    ],
    "faucets": [],
    "infoURL": "https://tomochain.com"
    },
    {
    "name": "Garizon Stage0",
    "chainId": 90,
    "shortName": "gar-s0",
    "networkId": 90,
    "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
    },
    "rpc": [
    "https://s0.garizon.net/rpc"
    ],
    "faucets": [],
    "infoURL": "https://garizon.com"
    },
    {
    "name": "Garizon Stage1",
    "chainId": 91,
    "shortName": "gar-s1",
    "networkId": 91,
    "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
    },
    "rpc": [
    "https://s1.garizon.net/rpc"
    ],
    "faucets": [],
    "infoURL": "https://garizon.com"
    },
    {
    "name": "Garizon Stage2",
    "chainId": 92,
    "shortName": "gar-s2",
    "networkId": 92,
    "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
    },
    "rpc": [
    "https://s2.garizon.net/rpc"
    ],
    "faucets": [],
    "infoURL": "https://garizon.com"
    },
    {
    "name": "Garizon Stage3",
    "chainId": 93,
    "shortName": "gar-s3",
    "networkId": 93,
    "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
    },
    "rpc": [
    "https://s3.garizon.net/rpc"
    ],
    "faucets": [],
    "infoURL": "https://garizon.com"
    },
    {
    "name": "CryptoKylin Testnet",
    "chainId": 95,
    "shortName": "Kylin Testnet",
    "networkId": 95,
    "nativeCurrency": {
    "name": "EOS",
    "symbol": "EOS",
    "decimals": 18
    },
    "rpc": [
    "https://kylin.eosargentina.io"
    ],
    "faucets": [],
    "infoURL": "https://www.cryptokylin.io/"
    },
    {
    "name": "NEXT Smart Chain",
    "chainId": 96,
    "shortName": "nsc",
    "networkId": 96,
    "nativeCurrency": {
    "name": "NEXT",
    "symbol": "NEXT",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.nextsmartchain.com"
    ],
    "faucets": [
    "https://faucet.nextsmartchain.com"
    ],
    "infoURL": "https://www.nextsmartchain.com/"
    },
    {
    "name": "Binance Smart Chain Testnet",
    "chainId": 97,
    "shortName": "bnbt",
    "networkId": 97,
    "nativeCurrency": {
    "name": "Binance Chain Native Token",
    "symbol": "tBNB",
    "decimals": 18
    },
    "rpc": [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-2-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545",
    "https://data-seed-prebsc-1-s3.binance.org:8545",
    "https://data-seed-prebsc-2-s3.binance.org:8545"
    ],
    "faucets": [
    "https://testnet.binance.org/faucet-smart"
    ],
    "infoURL": "https://testnet.binance.org/"
    },
    {
    "name": "POA Network Core",
    "chainId": 99,
    "shortName": "poa",
    "networkId": 99,
    "nativeCurrency": {
    "name": "POA Network Core Ether",
    "symbol": "POA",
    "decimals": 18
    },
    "rpc": [
    "https://core.poanetwork.dev",
    "http://core.poanetwork.dev:8545",
    "https://core.poa.network",
    "ws://core.poanetwork.dev:8546"
    ],
    "faucets": [],
    "infoURL": "https://poa.network"
    },
    {
    "name": "Gnosis",
    "chainId": 100,
    "shortName": "gno",
    "networkId": 100,
    "nativeCurrency": {
    "name": "xDAI",
    "symbol": "xDAI",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.gnosischain.com",
    "https://xdai.poanetwork.dev",
    "https://dai.poa.network",
    "https://rpc.ankr.com/gnosis",
    "https://gnosischain-rpc.gateway.pokt.network",
    "wss://rpc.gnosischain.com/wss",
    "wss://xdai.poanetwork.dev/wss",
    "ws://xdai.poanetwork.dev:8546"
    ],
    "faucets": [
    "https://faucet.gimlu.com/gnosis",
    "https://stakely.io/faucet/gnosis-chain-xdai",
    "https://faucet.prussia.dev/xdai"
    ],
    "infoURL": "https://developers.gnosischain.com"
    },
    {
    "name": "EtherInc",
    "chainId": 101,
    "shortName": "eti",
    "networkId": 1,
    "nativeCurrency": {
    "name": "EtherInc Ether",
    "symbol": "ETI",
    "decimals": 18
    },
    "rpc": [
    "https://api.einc.io/jsonrpc/mainnet"
    ],
    "faucets": [],
    "infoURL": "https://einc.io"
    },
    {
    "name": "Web3Games Testnet",
    "chainId": 102,
    "shortName": "tw3g",
    "networkId": 102,
    "nativeCurrency": {
    "name": "Web3Games",
    "symbol": "W3G",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.web3games.org/evm"
    ],
    "faucets": [],
    "infoURL": "https://web3games.org/"
    },
    {
    "name": "Web3Games Devnet",
    "chainId": 105,
    "shortName": "dw3g",
    "networkId": 105,
    "nativeCurrency": {
    "name": "Web3Games",
    "symbol": "W3G",
    "decimals": 18
    },
    "rpc": [
    "https://devnet.web3games.org/evm"
    ],
    "faucets": [],
    "infoURL": "https://web3games.org/"
    },
    {
    "name": "Velas EVM Mainnet",
    "chainId": 106,
    "shortName": "vlx",
    "networkId": 106,
    "nativeCurrency": {
    "name": "Velas",
    "symbol": "VLX",
    "decimals": 18
    },
    "rpc": [
    "https://evmexplorer.velas.com/rpc",
    "https://explorer.velas.com/rpc"
    ],
    "faucets": [],
    "infoURL": "https://velas.com"
    },
    {
    "name": "Nebula Testnet",
    "chainId": 107,
    "shortName": "ntn",
    "networkId": 107,
    "nativeCurrency": {
    "name": "Nebula X",
    "symbol": "NBX",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.rpc.novanetwork.io:9070"
    ],
    "faucets": [],
    "infoURL": "https://novanetwork.io"
    },
    {
    "name": "ThunderCore Mainnet",
    "chainId": 108,
    "shortName": "TT",
    "networkId": 108,
    "nativeCurrency": {
    "name": "ThunderCore Token",
    "symbol": "TT",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-rpc.thundercore.com",
    "https://mainnet-rpc.thundertoken.net",
    "https://mainnet-rpc.thundercore.io"
    ],
    "faucets": [
    "https://faucet.thundercore.com"
    ],
    "infoURL": "https://thundercore.com"
    },
    {
    "name": "Proton Testnet",
    "chainId": 110,
    "shortName": "xpr",
    "networkId": 110,
    "nativeCurrency": {
    "name": "Proton",
    "symbol": "XPR",
    "decimals": 4
    },
    "rpc": [
    "https://protontestnet.greymass.com/"
    ],
    "faucets": [],
    "infoURL": "https://protonchain.com"
    },
    {
    "name": "EtherLite Chain",
    "chainId": 111,
    "shortName": "ETL",
    "networkId": 111,
    "nativeCurrency": {
    "name": "EtherLite",
    "symbol": "ETL",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.etherlite.org"
    ],
    "faucets": [
    "https://etherlite.org/faucets"
    ],
    "infoURL": "https://etherlite.org"
    },
    {
    "name": "Fuse Mainnet",
    "chainId": 122,
    "shortName": "fuse",
    "networkId": 122,
    "nativeCurrency": {
    "name": "Fuse",
    "symbol": "FUSE",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.fuse.io"
    ],
    "faucets": [],
    "infoURL": "https://fuse.io/"
    },
    {
    "name": "Fuse Sparknet",
    "chainId": 123,
    "shortName": "spark",
    "networkId": 123,
    "nativeCurrency": {
    "name": "Spark",
    "symbol": "SPARK",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.fusespark.io"
    ],
    "faucets": [
    "https://get.fusespark.io"
    ],
    "infoURL": "https://docs.fuse.io/general/fuse-network-blockchain/fuse-testnet"
    },
    {
    "name": "Decentralized Web Mainnet",
    "chainId": 124,
    "shortName": "dwu",
    "networkId": 124,
    "nativeCurrency": {
    "name": "Decentralized Web Utility",
    "symbol": "DWU",
    "decimals": 18
    },
    "rpc": [
    "https://decentralized-web.tech/dw_rpc.php"
    ],
    "faucets": [],
    "infoURL": "https://decentralized-web.tech/dw_chain.php"
    },
    {
    "name": "OYchain Testnet",
    "chainId": 125,
    "shortName": "oychain testnet",
    "networkId": 125,
    "nativeCurrency": {
    "name": "OYchain Token",
    "symbol": "OY",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.testnet.oychain.io"
    ],
    "faucets": [
    "https://faucet.oychain.io"
    ],
    "infoURL": "https://www.oychain.io"
    },
    {
    "name": "OYchain Mainnet",
    "chainId": 126,
    "shortName": "oychain mainnet",
    "networkId": 126,
    "nativeCurrency": {
    "name": "OYchain Token",
    "symbol": "OY",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.mainnet.oychain.io"
    ],
    "faucets": [],
    "infoURL": "https://www.oychain.io"
    },
    {
    "name": "Factory 127 Mainnet",
    "chainId": 127,
    "shortName": "feth",
    "networkId": 127,
    "nativeCurrency": {
    "name": "Factory 127 Token",
    "symbol": "FETH",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://www.factory127.com"
    },
    {
    "name": "Huobi ECO Chain Mainnet",
    "chainId": 128,
    "shortName": "heco",
    "networkId": 128,
    "nativeCurrency": {
    "name": "Huobi ECO Chain Native Token",
    "symbol": "HT",
    "decimals": 18
    },
    "rpc": [
    "https://http-mainnet.hecochain.com",
    "wss://ws-mainnet.hecochain.com"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://www.hecochain.com"
    },
    {
    "name": "Polygon Mainnet",
    "chainId": 137,
    "shortName": "MATIC",
    "networkId": 137,
    "nativeCurrency": {
    "name": "MATIC",
    "symbol": "MATIC",
    "decimals": 18
    },
    "rpc": [
    "https://polygon-rpc.com/",
    "https://rpc-mainnet.matic.network",
    "https://matic-mainnet.chainstacklabs.com",
    "https://rpc-mainnet.maticvigil.com",
    "https://rpc-mainnet.matic.quiknode.pro",
    "https://matic-mainnet-full-rpc.bwarelabs.com"
    ],
    "faucets": [],
    "infoURL": "https://polygon.technology/"
    },
    {
    "name": "Openpiece Testnet",
    "chainId": 141,
    "shortName": "OPtest",
    "networkId": 141,
    "nativeCurrency": {
    "name": "Belly",
    "symbol": "BELLY",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.openpiece.io"
    ],
    "faucets": [],
    "infoURL": "https://cryptopiece.online"
    },
    {
    "name": "DAX CHAIN",
    "chainId": 142,
    "shortName": "dax",
    "networkId": 142,
    "nativeCurrency": {
    "name": "Prodax",
    "symbol": "DAX",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.prodax.io"
    ],
    "faucets": [],
    "infoURL": "https://prodax.io/"
    },
    {
    "name": "Lightstreams Testnet",
    "chainId": 162,
    "shortName": "tpht",
    "networkId": 162,
    "nativeCurrency": {
    "name": "Lightstreams PHT",
    "symbol": "PHT",
    "decimals": 18
    },
    "rpc": [
    "https://node.sirius.lightstreams.io"
    ],
    "faucets": [
    "https://discuss.lightstreams.network/t/request-test-tokens"
    ],
    "infoURL": "https://explorer.sirius.lightstreams.io"
    },
    {
    "name": "Lightstreams Mainnet",
    "chainId": 163,
    "shortName": "pht",
    "networkId": 163,
    "nativeCurrency": {
    "name": "Lightstreams PHT",
    "symbol": "PHT",
    "decimals": 18
    },
    "rpc": [
    "https://node.mainnet.lightstreams.io"
    ],
    "faucets": [],
    "infoURL": "https://explorer.lightstreams.io"
    },
    {
    "name": "AIOZ Network",
    "chainId": 168,
    "shortName": "aioz",
    "networkId": 168,
    "nativeCurrency": {
    "name": "AIOZ",
    "symbol": "AIOZ",
    "decimals": 18
    },
    "rpc": [
    "https://eth-dataseed.aioz.network"
    ],
    "faucets": [],
    "infoURL": "https://aioz.network"
    },
    {
    "name": "HOO Smart Chain Testnet",
    "chainId": 170,
    "shortName": "hoosmartchain",
    "networkId": 170,
    "nativeCurrency": {
    "name": "HOO",
    "symbol": "HOO",
    "decimals": 18
    },
    "rpc": [
    "https://http-testnet.hoosmartchain.com"
    ],
    "faucets": [
    "https://faucet-testnet.hscscan.com/"
    ],
    "infoURL": "https://www.hoosmartchain.com"
    },
    {
    "name": "Latam-Blockchain Resil Testnet",
    "chainId": 172,
    "shortName": "resil",
    "networkId": 172,
    "nativeCurrency": {
    "name": "Latam-Blockchain Resil Test Native Token",
    "symbol": "usd",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.latam-blockchain.com",
    "wss://ws.latam-blockchain.com"
    ],
    "faucets": [
    "https://faucet.latam-blockchain.com"
    ],
    "infoURL": "https://latam-blockchain.com"
    },
    {
    "name": "AME Chain Mainnet",
    "chainId": 180,
    "shortName": "ame",
    "networkId": 180,
    "nativeCurrency": {
    "name": "AME",
    "symbol": "AME",
    "decimals": 18
    },
    "rpc": [
    "https://node1.amechain.io/"
    ],
    "faucets": [],
    "infoURL": "https://amechain.io/"
    },
    {
    "name": "Seele Mainnet",
    "chainId": 186,
    "shortName": "Seele",
    "networkId": 186,
    "nativeCurrency": {
    "name": "Seele",
    "symbol": "Seele",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.seelen.pro/"
    ],
    "faucets": [],
    "infoURL": "https://seelen.pro/"
    },
    {
    "name": "BMC Mainnet",
    "chainId": 188,
    "shortName": "BMC",
    "networkId": 188,
    "nativeCurrency": {
    "name": "BTM",
    "symbol": "BTM",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.bmcchain.com/"
    ],
    "faucets": [],
    "infoURL": "https://bmc.bytom.io/"
    },
    {
    "name": "BMC Testnet",
    "chainId": 189,
    "shortName": "BMCT",
    "networkId": 189,
    "nativeCurrency": {
    "name": "BTM",
    "symbol": "BTM",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.bmcchain.com"
    ],
    "faucets": [],
    "infoURL": "https://bmc.bytom.io/"
    },
    {
    "name": "Crypto Emergency",
    "chainId": 193,
    "shortName": "cem",
    "networkId": 193,
    "nativeCurrency": {
    "name": "Crypto Emergency",
    "symbol": "CEM",
    "decimals": 18
    },
    "rpc": [
    "https://cemchain.com"
    ],
    "faucets": [],
    "infoURL": "https://cemblockchain.com/"
    },
    {
    "name": "BitTorrent Chain Mainnet",
    "chainId": 199,
    "shortName": "BTT",
    "networkId": 199,
    "nativeCurrency": {
    "name": "BitTorrent",
    "symbol": "BTT",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.bittorrentchain.io/"
    ],
    "faucets": [],
    "infoURL": "https://bittorrentchain.io/"
    },
    {
    "name": "Arbitrum on xDai",
    "chainId": 200,
    "shortName": "aox",
    "networkId": 200,
    "nativeCurrency": {
    "name": "xDAI",
    "symbol": "xDAI",
    "decimals": 18
    },
    "rpc": [
    "https://arbitrum.xdaichain.com/"
    ],
    "faucets": [],
    "infoURL": "https://xdaichain.com"
    },
    {
    "name": "Freight Trust Network",
    "chainId": 211,
    "shortName": "EDI",
    "networkId": 0,
    "nativeCurrency": {
    "name": "Freight Trust Native",
    "symbol": "0xF",
    "decimals": 18
    },
    "rpc": [
    "http://13.57.207.168:3435",
    "https://app.freighttrust.net/ftn/\${API_KEY}"
    ],
    "faucets": [
    "http://faucet.freight.sh"
    ],
    "infoURL": "https://freighttrust.com"
    },
    {
    "name": "SoterOne Mainnet old",
    "chainId": 218,
    "shortName": "SO1-old",
    "networkId": 218,
    "nativeCurrency": {
    "name": "SoterOne Mainnet Ether",
    "symbol": "SOTER",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.soter.one"
    ],
    "faucets": [],
    "infoURL": "https://www.soterone.com"
    },
    {
    "name": "Permission",
    "chainId": 222,
    "shortName": "ASK",
    "networkId": 2221,
    "nativeCurrency": {
    "name": "ASK",
    "symbol": "ASK",
    "decimals": 18
    },
    "rpc": [
    "https://blockchain-api-mainnet.permission.io/rpc"
    ],
    "faucets": [],
    "infoURL": "https://permission.io/"
    },
    {
    "name": "LACHAIN Mainnet",
    "chainId": 225,
    "shortName": "LA",
    "networkId": 225,
    "nativeCurrency": {
    "name": "LA",
    "symbol": "LA",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-mainnet.lachain.io"
    ],
    "faucets": [],
    "infoURL": "https://lachain.io"
    },
    {
    "name": "LACHAIN Testnet",
    "chainId": 226,
    "shortName": "TLA",
    "networkId": 226,
    "nativeCurrency": {
    "name": "TLA",
    "symbol": "TLA",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-testnet.lachain.io"
    ],
    "faucets": [],
    "infoURL": "https://lachain.io"
    },
    {
    "name": "Aitd Testnet",
    "chainId": 239,
    "shortName": "AITD",
    "networkId": 239,
    "nativeCurrency": {
    "name": "AITD Testnet",
    "symbol": "AITD",
    "decimals": 18
    },
    "rpc": [
    "http://http-testnet.aitd.io"
    ],
    "faucets": [
    "https://aitd-faucet-pre.aitdcoin.com/"
    ],
    "infoURL": "https://www.aitd.io/"
    },
    {
    "name": "Energy Web Chain",
    "chainId": 246,
    "shortName": "ewt",
    "networkId": 246,
    "nativeCurrency": {
    "name": "Energy Web Token",
    "symbol": "EWT",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.energyweb.org",
    "wss://rpc.energyweb.org/ws"
    ],
    "faucets": [
    "https://faucet.carbonswap.exchange",
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://energyweb.org"
    },
    {
    "name": "Fantom Opera",
    "chainId": 250,
    "shortName": "ftm",
    "networkId": 250,
    "nativeCurrency": {
    "name": "Fantom",
    "symbol": "FTM",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.ftm.tools"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://fantom.foundation"
    },
    {
    "name": "Huobi ECO Chain Testnet",
    "chainId": 256,
    "shortName": "hecot",
    "networkId": 256,
    "nativeCurrency": {
    "name": "Huobi ECO Chain Test Native Token",
    "symbol": "htt",
    "decimals": 18
    },
    "rpc": [
    "https://http-testnet.hecochain.com",
    "wss://ws-testnet.hecochain.com"
    ],
    "faucets": [
    "https://scan-testnet.hecochain.com/faucet"
    ],
    "infoURL": "https://testnet.hecoinfo.com"
    },
    {
    "name": "Setheum",
    "chainId": 258,
    "shortName": "setm",
    "networkId": 258,
    "nativeCurrency": {
    "name": "Setheum",
    "symbol": "SETM",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://setheum.xyz"
    },
    {
    "name": "SUR Blockchain Network",
    "chainId": 262,
    "shortName": "SUR",
    "networkId": 1,
    "nativeCurrency": {
    "name": "Suren",
    "symbol": "SRN",
    "decimals": 18
    },
    "rpc": [
    "https://sur.nilin.org"
    ],
    "faucets": [],
    "infoURL": "https://surnet.org"
    },
    {
    "name": "High Performance Blockchain",
    "chainId": 269,
    "shortName": "hpb",
    "networkId": 269,
    "nativeCurrency": {
    "name": "High Performance Blockchain Ether",
    "symbol": "HPB",
    "decimals": 18
    },
    "rpc": [
    "https://hpbnode.com",
    "wss://ws.hpbnode.com"
    ],
    "faucets": [
    "https://myhpbwallet.com/"
    ],
    "infoURL": "https://hpb.io"
    },
    {
    "name": "Boba Network",
    "chainId": 288,
    "shortName": "Boba",
    "networkId": 288,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.boba.network/"
    ],
    "faucets": [],
    "infoURL": "https://boba.network"
    },
    {
    "name": "Optimism on Gnosis Chain",
    "chainId": 300,
    "shortName": "ogc",
    "networkId": 300,
    "nativeCurrency": {
    "name": "xDAI",
    "symbol": "xDAI",
    "decimals": 18
    },
    "rpc": [
    "https://optimism.gnosischain.com",
    "wss://optimism.gnosischain.com/wss"
    ],
    "faucets": [
    "https://faucet.gimlu.com/gnosis"
    ],
    "infoURL": "https://www.xdaichain.com/for-developers/optimism-optimistic-rollups-on-gc"
    },
    {
    "name": "KCC Mainnet",
    "chainId": 321,
    "shortName": "kcs",
    "networkId": 1,
    "nativeCurrency": {
    "name": "KuCoin Token",
    "symbol": "KCS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-mainnet.kcc.network",
    "wss://rpc-ws-mainnet.kcc.network"
    ],
    "faucets": [],
    "infoURL": "https://kcc.io"
    },
    {
    "name": "KCC Testnet",
    "chainId": 322,
    "shortName": "kcst",
    "networkId": 322,
    "nativeCurrency": {
    "name": "KuCoin Testnet Token",
    "symbol": "tKCS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-testnet.kcc.network",
    "wss://rpc-ws-testnet.kcc.network"
    ],
    "faucets": [
    "https://faucet-testnet.kcc.network"
    ],
    "infoURL": "https://scan-testnet.kcc.network"
    },
    {
    "name": "Web3Q Mainnet",
    "chainId": 333,
    "shortName": "w3q",
    "networkId": 333,
    "nativeCurrency": {
    "name": "Web3Q",
    "symbol": "W3Q",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.web3q.io:8545"
    ],
    "faucets": [],
    "infoURL": "https://web3q.io/home.w3q/"
    },
    {
    "name": "DFK Chain Test",
    "chainId": 335,
    "shortName": "DFKTEST",
    "networkId": 335,
    "nativeCurrency": {
    "name": "Jewel",
    "symbol": "JEWEL",
    "decimals": 18
    },
    "rpc": [
    "https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc"
    ],
    "faucets": [],
    "infoURL": "https://defikingdoms.com"
    },
    {
    "name": "Shiden",
    "chainId": 336,
    "shortName": "sdn",
    "networkId": 336,
    "nativeCurrency": {
    "name": "Shiden",
    "symbol": "SDN",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.shiden.astar.network:8545",
    "wss://shiden.api.onfinality.io/public-ws"
    ],
    "faucets": [],
    "infoURL": "https://shiden.astar.network/"
    },
    {
    "name": "Cronos Testnet",
    "chainId": 338,
    "shortName": "tcro",
    "networkId": 338,
    "nativeCurrency": {
    "name": "Crypto.org Test Coin",
    "symbol": "TCRO",
    "decimals": 18
    },
    "rpc": [
    "https://cronos-testnet-3.crypto.org:8545",
    "wss://cronos-testnet-3.crypto.org:8546"
    ],
    "faucets": [
    "https://cronos.crypto.org/faucet"
    ],
    "infoURL": "https://cronos.crypto.org"
    },
    {
    "name": "Theta Mainnet",
    "chainId": 361,
    "shortName": "theta-mainnet",
    "networkId": 361,
    "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
    },
    "rpc": [
    "https://eth-rpc-api.thetatoken.org/rpc"
    ],
    "faucets": [],
    "infoURL": "https://www.thetatoken.org/"
    },
    {
    "name": "Theta Sapphire Testnet",
    "chainId": 363,
    "shortName": "theta-sapphire",
    "networkId": 363,
    "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
    },
    "rpc": [
    "https://eth-rpc-api-sapphire.thetatoken.org/rpc"
    ],
    "faucets": [],
    "infoURL": "https://www.thetatoken.org/"
    },
    {
    "name": "Theta Amber Testnet",
    "chainId": 364,
    "shortName": "theta-amber",
    "networkId": 364,
    "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
    },
    "rpc": [
    "https://eth-rpc-api-amber.thetatoken.org/rpc"
    ],
    "faucets": [],
    "infoURL": "https://www.thetatoken.org/"
    },
    {
    "name": "Theta Testnet",
    "chainId": 365,
    "shortName": "theta-testnet",
    "networkId": 365,
    "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
    },
    "rpc": [
    "https://eth-rpc-api-testnet.thetatoken.org/rpc"
    ],
    "faucets": [],
    "infoURL": "https://www.thetatoken.org/"
    },
    {
    "name": "PulseChain Mainnet",
    "chainId": 369,
    "shortName": "pls",
    "networkId": 369,
    "nativeCurrency": {
    "name": "Pulse",
    "symbol": "PLS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.mainnet.pulsechain.com/",
    "wss://rpc.mainnet.pulsechain.com/"
    ],
    "faucets": [],
    "infoURL": "https://pulsechain.com/"
    },
    {
    "name": "Lisinski",
    "chainId": 385,
    "shortName": "lisinski",
    "networkId": 385,
    "nativeCurrency": {
    "name": "Lisinski Ether",
    "symbol": "LISINS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-bitfalls1.lisinski.online"
    ],
    "faucets": [
    "https://pipa.lisinski.online"
    ],
    "infoURL": "https://lisinski.online"
    },
    {
    "name": "SX Network Mainnet",
    "chainId": 416,
    "shortName": "SX",
    "networkId": 416,
    "nativeCurrency": {
    "name": "SX Network",
    "symbol": "SX",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.sx.technology"
    ],
    "faucets": [],
    "infoURL": "https://www.sx.technology"
    },
    {
    "name": "Optimistic Ethereum Testnet Goerli",
    "chainId": 420,
    "shortName": "ogor",
    "networkId": 420,
    "nativeCurrency": {
    "name": "Görli Ether",
    "symbol": "GOR",
    "decimals": 18
    },
    "rpc": [
    "https://goerli.optimism.io/"
    ],
    "faucets": [],
    "infoURL": "https://optimism.io"
    },
    {
    "name": "Rupaya",
    "chainId": 499,
    "shortName": "rupx",
    "networkId": 499,
    "nativeCurrency": {
    "name": "Rupaya",
    "symbol": "RUPX",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://www.rupx.io"
    },
    {
    "name": "Double-A Chain Mainnet",
    "chainId": 512,
    "shortName": "aac",
    "networkId": 512,
    "nativeCurrency": {
    "name": "Acuteangle Native Token",
    "symbol": "AAC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.acuteangle.com"
    ],
    "faucets": [],
    "infoURL": "https://www.acuteangle.com/"
    },
    {
    "name": "Double-A Chain Testnet",
    "chainId": 513,
    "shortName": "aact",
    "networkId": 513,
    "nativeCurrency": {
    "name": "Acuteangle Native Token",
    "symbol": "AAC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-testnet.acuteangle.com"
    ],
    "faucets": [
    "https://scan-testnet.acuteangle.com/faucet"
    ],
    "infoURL": "https://www.acuteangle.com/"
    },
    {
    "name": "XT Smart Chain Mainnet",
    "chainId": 520,
    "shortName": "xt",
    "networkId": 1024,
    "nativeCurrency": {
    "name": "XT Smart Chain Native Token",
    "symbol": "XT",
    "decimals": 18
    },
    "rpc": [
    "https://datarpc1.xsc.pub",
    "https://datarpc2.xsc.pub",
    "https://datarpc3.xsc.pub"
    ],
    "faucets": [
    "https://xsc.pub/faucet"
    ],
    "infoURL": "https://xsc.pub/"
    },
    {
    "name": "Candle",
    "chainId": 534,
    "shortName": "CNDL",
    "networkId": 534,
    "nativeCurrency": {
    "name": "CANDLE",
    "symbol": "CNDL",
    "decimals": 18
    },
    "rpc": [
    "https://candle-rpc.com/",
    "https://rpc.cndlchain.com"
    ],
    "faucets": [],
    "infoURL": "https://candlelabs.org/"
    },
    {
    "name": "Vela1 Chain Mainnet",
    "chainId": 555,
    "shortName": "CLASS",
    "networkId": 555,
    "nativeCurrency": {
    "name": "CLASS COIN",
    "symbol": "CLASS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.velaverse.io"
    ],
    "faucets": [],
    "infoURL": "https://velaverse.io"
    },
    {
    "name": "Tao Network",
    "chainId": 558,
    "shortName": "tao",
    "networkId": 558,
    "nativeCurrency": {
    "name": "Tao",
    "symbol": "TAO",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.testnet.tao.network",
    "http://rpc.testnet.tao.network:8545",
    "https://rpc.tao.network",
    "wss://rpc.tao.network"
    ],
    "faucets": [],
    "infoURL": "https://tao.network"
    },
    {
    "name": "Metis Stardust Testnet",
    "chainId": 588,
    "shortName": "metis-stardust",
    "networkId": 588,
    "nativeCurrency": {
    "name": "tMetis",
    "symbol": "METIS",
    "decimals": 18
    },
    "rpc": [
    "https://stardust.metis.io/?owner=588"
    ],
    "faucets": [],
    "infoURL": "https://www.metis.io"
    },
    {
    "name": "Astar",
    "chainId": 592,
    "shortName": "astr",
    "networkId": 592,
    "nativeCurrency": {
    "name": "Astar",
    "symbol": "ASTR",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.astar.network:8545"
    ],
    "faucets": [],
    "infoURL": "https://astar.network/"
    },
    {
    "name": "Acala Mandala Testnet",
    "chainId": 595,
    "shortName": "maca",
    "networkId": 595,
    "nativeCurrency": {
    "name": "Acala Mandala Token",
    "symbol": "mACA",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://acala.network"
    },
    {
    "name": "Karura Network Testnet",
    "chainId": 596,
    "shortName": "tkar",
    "networkId": 596,
    "nativeCurrency": {
    "name": "Karura Token",
    "symbol": "KAR",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://karura.network"
    },
    {
    "name": "Acala Network Testnet",
    "chainId": 597,
    "shortName": "taca",
    "networkId": 597,
    "nativeCurrency": {
    "name": "Acala Token",
    "symbol": "ACA",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://acala.network"
    },
    {
    "name": "Meshnyan testnet",
    "chainId": 600,
    "shortName": "mesh-chain-testnet",
    "networkId": 600,
    "nativeCurrency": {
    "name": "Meshnyan Testnet Native Token",
    "symbol": "MESHT",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": ""
    },
    {
    "name": "SX Network Testnet",
    "chainId": 647,
    "shortName": "SX-Testnet",
    "networkId": 647,
    "nativeCurrency": {
    "name": "SX Network",
    "symbol": "SX",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.toronto.sx.technology"
    ],
    "faucets": [
    "https://faucet.toronto.sx.technology"
    ],
    "infoURL": "https://www.sx.technology"
    },
    {
    "name": "Pixie Chain Testnet",
    "chainId": 666,
    "shortName": "pixie-chain-testnet",
    "networkId": 666,
    "nativeCurrency": {
    "name": "Pixie Chain Testnet Native Token",
    "symbol": "PCTT",
    "decimals": 18
    },
    "rpc": [
    "https://http-testnet.chain.pixie.xyz",
    "wss://ws-testnet.chain.pixie.xyz"
    ],
    "faucets": [
    "https://chain.pixie.xyz/faucet"
    ],
    "infoURL": "https://scan-testnet.chain.pixie.xyz"
    },
    {
    "name": "Karura Network",
    "chainId": 686,
    "shortName": "kar",
    "networkId": 686,
    "nativeCurrency": {
    "name": "Karura Token",
    "symbol": "KAR",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://karura.network"
    },
    {
    "name": "Star Social Testnet",
    "chainId": 700,
    "shortName": "SNS",
    "networkId": 700,
    "nativeCurrency": {
    "name": "Social",
    "symbol": "SNS",
    "decimals": 18
    },
    "rpc": [
    "https://avastar.cc/ext/bc/C/rpc"
    ],
    "faucets": [],
    "infoURL": "https://info.avastar.cc"
    },
    {
    "name": "BlockChain Station Mainnet",
    "chainId": 707,
    "shortName": "bcs",
    "networkId": 707,
    "nativeCurrency": {
    "name": "BCS Token",
    "symbol": "BCS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-mainnet.bcsdev.io",
    "wss://rpc-ws-mainnet.bcsdev.io"
    ],
    "faucets": [],
    "infoURL": "https://blockchainstation.io"
    },
    {
    "name": "BlockChain Station Testnet",
    "chainId": 708,
    "shortName": "tbcs",
    "networkId": 708,
    "nativeCurrency": {
    "name": "BCS Testnet Token",
    "symbol": "tBCS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-testnet.bcsdev.io",
    "wss://rpc-ws-testnet.bcsdev.io"
    ],
    "faucets": [
    "https://faucet.bcsdev.io"
    ],
    "infoURL": "https://blockchainstation.io"
    },
    {
    "name": "Factory 127 Testnet",
    "chainId": 721,
    "shortName": "tfeth",
    "networkId": 721,
    "nativeCurrency": {
    "name": "Factory 127 Token",
    "symbol": "FETH",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://www.factory127.com"
    },
    {
    "name": "OpenChain Testnet",
    "chainId": 776,
    "shortName": "opc",
    "networkId": 776,
    "nativeCurrency": {
    "name": "Openchain Testnet",
    "symbol": "TOPC",
    "decimals": 18
    },
    "rpc": [
    "http://mainnet.openchain.info:8545",
    "https://mainnet1.openchain.info"
    ],
    "faucets": [
    "https://faucet.openchain.info/"
    ],
    "infoURL": "https://testnet.openchain.info/"
    },
    {
    "name": "cheapETH",
    "chainId": 777,
    "shortName": "cth",
    "networkId": 777,
    "nativeCurrency": {
    "name": "cTH",
    "symbol": "cTH",
    "decimals": 18
    },
    "rpc": [
    "https://node.cheapeth.org/rpc"
    ],
    "faucets": [],
    "infoURL": "https://cheapeth.org/"
    },
    {
    "name": "Acala Network",
    "chainId": 787,
    "shortName": "aca",
    "networkId": 787,
    "nativeCurrency": {
    "name": "Acala Token",
    "symbol": "ACA",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://acala.network"
    },
    {
    "name": "Aerochain Testnet",
    "chainId": 788,
    "shortName": "taero",
    "networkId": 788,
    "nativeCurrency": {
    "name": "Aerochain Testnet",
    "symbol": "TAero",
    "decimals": 18
    },
    "rpc": [
    "https://testnet-rpc.aerochain.id/"
    ],
    "faucets": [
    "https://faucet.aerochain.id/"
    ],
    "infoURL": "https://aerochaincoin.org/"
    },
    {
    "name": "Haic",
    "chainId": 803,
    "shortName": "haic",
    "networkId": 803,
    "nativeCurrency": {
    "name": "Haicoin",
    "symbol": "HAIC",
    "decimals": 18
    },
    "rpc": [
    "https://orig.haichain.io/"
    ],
    "faucets": [],
    "infoURL": "https://www.haichain.io/"
    },
    {
    "name": "Callisto Mainnet",
    "chainId": 820,
    "shortName": "clo",
    "networkId": 1,
    "nativeCurrency": {
    "name": "Callisto Mainnet Ether",
    "symbol": "CLO",
    "decimals": 18
    },
    "rpc": [
    "https://clo-geth.0xinfra.com"
    ],
    "faucets": [],
    "infoURL": "https://callisto.network"
    },
    {
    "name": "Callisto Testnet",
    "chainId": 821,
    "shortName": "tclo",
    "networkId": 2,
    "nativeCurrency": {
    "name": "Callisto Testnet Ether",
    "symbol": "TCLO",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://callisto.network"
    },
    {
    "name": "Ambros Chain Mainnet",
    "chainId": 880,
    "shortName": "ambros",
    "networkId": 880,
    "nativeCurrency": {
    "name": "AMBROS",
    "symbol": "AMBROS",
    "decimals": 18
    },
    "rpc": [
    "https://api.ambros.network"
    ],
    "faucets": [],
    "infoURL": "https://ambros.network"
    },
    {
    "name": "Wanchain",
    "chainId": 888,
    "shortName": "wan",
    "networkId": 888,
    "nativeCurrency": {
    "name": "Wancoin",
    "symbol": "WAN",
    "decimals": 18
    },
    "rpc": [
    "https://gwan-ssl.wandevs.org:56891/"
    ],
    "faucets": [],
    "infoURL": "https://www.wanscan.org"
    },
    {
    "name": "Garizon Testnet Stage0",
    "chainId": 900,
    "shortName": "gar-test-s0",
    "networkId": 900,
    "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
    },
    "rpc": [
    "https://s0-testnet.garizon.net/rpc"
    ],
    "faucets": [
    "https://faucet-testnet.garizon.com"
    ],
    "infoURL": "https://garizon.com"
    },
    {
    "name": "Garizon Testnet Stage1",
    "chainId": 901,
    "shortName": "gar-test-s1",
    "networkId": 901,
    "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
    },
    "rpc": [
    "https://s1-testnet.garizon.net/rpc"
    ],
    "faucets": [
    "https://faucet-testnet.garizon.com"
    ],
    "infoURL": "https://garizon.com"
    },
    {
    "name": "Garizon Testnet Stage2",
    "chainId": 902,
    "shortName": "gar-test-s2",
    "networkId": 902,
    "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
    },
    "rpc": [
    "https://s2-testnet.garizon.net/rpc"
    ],
    "faucets": [
    "https://faucet-testnet.garizon.com"
    ],
    "infoURL": "https://garizon.com"
    },
    {
    "name": "Garizon Testnet Stage3",
    "chainId": 903,
    "shortName": "gar-test-s3",
    "networkId": 903,
    "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
    },
    "rpc": [
    "https://s3-testnet.garizon.net/rpc"
    ],
    "faucets": [
    "https://faucet-testnet.garizon.com"
    ],
    "infoURL": "https://garizon.com"
    },
    {
    "name": "PulseChain Testnet",
    "chainId": 940,
    "shortName": "tpls",
    "networkId": 940,
    "nativeCurrency": {
    "name": "Test Pulse",
    "symbol": "tPLS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.v2.testnet.pulsechain.com/",
    "wss://rpc.v2.testnet.pulsechain.com/"
    ],
    "faucets": [
    "https://faucet.v2.testnet.pulsechain.com/"
    ],
    "infoURL": "https://pulsechain.com/"
    },
    {
    "name": "PulseChain Testnet v2b",
    "chainId": 941,
    "shortName": "t2bpls",
    "networkId": 941,
    "nativeCurrency": {
    "name": "Test Pulse",
    "symbol": "tPLS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.v2b.testnet.pulsechain.com/",
    "wss://rpc.v2b.testnet.pulsechain.com/"
    ],
    "faucets": [
    "https://faucet.v2b.testnet.pulsechain.com/"
    ],
    "infoURL": "https://pulsechain.com/"
    },
    {
    "name": "PulseChain Testnet v3",
    "chainId": 942,
    "shortName": "t3pls",
    "networkId": 942,
    "nativeCurrency": {
    "name": "Test Pulse",
    "symbol": "tPLS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.v3.testnet.pulsechain.com/",
    "wss://rpc.v3.testnet.pulsechain.com/"
    ],
    "faucets": [
    "https://faucet.v3.testnet.pulsechain.com/"
    ],
    "infoURL": "https://pulsechain.com/"
    },
    {
    "name": "Nepal Blockchain Network",
    "chainId": 977,
    "shortName": "yeti",
    "networkId": 977,
    "nativeCurrency": {
    "name": "Nepal Blockchain Network Ether",
    "symbol": "YETI",
    "decimals": 18
    },
    "rpc": [
    "https://api.nepalblockchain.dev",
    "https://api.nepalblockchain.network"
    ],
    "faucets": [
    "https://faucet.nepalblockchain.network"
    ],
    "infoURL": "https://nepalblockchain.network"
    },
    {
    "name": "TOP Mainnet EVM",
    "chainId": 980,
    "shortName": "top_evm",
    "networkId": 0,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "ethapi.topnetwork.org"
    ],
    "faucets": [],
    "infoURL": "https://www.topnetwork.org/"
    },
    {
    "name": "TOP Mainnet",
    "chainId": 989,
    "shortName": "top",
    "networkId": 0,
    "nativeCurrency": {
    "name": "TOP",
    "symbol": "TOP",
    "decimals": 6
    },
    "rpc": [
    "topapi.topnetwork.org"
    ],
    "faucets": [],
    "infoURL": "https://www.topnetwork.org/"
    },
    {
    "name": "Lucky Network",
    "chainId": 998,
    "shortName": "ln",
    "networkId": 998,
    "nativeCurrency": {
    "name": "Lucky",
    "symbol": "L99",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.luckynetwork.org",
    "wss://ws.lnscan.org",
    "https://rpc.lnscan.org"
    ],
    "faucets": [],
    "infoURL": "https://luckynetwork.org"
    },
    {
    "name": "Wanchain Testnet",
    "chainId": 999,
    "shortName": "twan",
    "networkId": 999,
    "nativeCurrency": {
    "name": "Wancoin",
    "symbol": "WAN",
    "decimals": 18
    },
    "rpc": [
    "https://gwan-ssl.wandevs.org:46891/"
    ],
    "faucets": [],
    "infoURL": "https://testnet.wanscan.org"
    },
    {
    "name": "Klaytn Testnet Baobab",
    "chainId": 1001,
    "shortName": "Baobab",
    "networkId": 1001,
    "nativeCurrency": {
    "name": "KLAY",
    "symbol": "KLAY",
    "decimals": 18
    },
    "rpc": [
    "https://api.baobab.klaytn.net:8651"
    ],
    "faucets": [
    "https://baobab.wallet.klaytn.com/access?next=faucet"
    ],
    "infoURL": "https://www.klaytn.com/"
    },
    {
    "name": "Newton Testnet",
    "chainId": 1007,
    "shortName": "tnew",
    "networkId": 1007,
    "nativeCurrency": {
    "name": "Newton",
    "symbol": "NEW",
    "decimals": 18
    },
    "rpc": [
    "https://rpc1.newchain.newtonproject.org"
    ],
    "faucets": [],
    "infoURL": "https://www.newtonproject.org/"
    },
    {
    "name": "Eurus Mainnet",
    "chainId": 1008,
    "shortName": "eun",
    "networkId": 1008,
    "nativeCurrency": {
    "name": "Eurus",
    "symbol": "EUN",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.eurus.network/"
    ],
    "faucets": [],
    "infoURL": "https://eurus.network"
    },
    {
    "name": "Evrice Network",
    "chainId": 1010,
    "shortName": "EVC",
    "networkId": 1010,
    "nativeCurrency": {
    "name": "Evrice",
    "symbol": "EVC",
    "decimals": 18
    },
    "rpc": [
    "https://meta.evrice.com"
    ],
    "faucets": [],
    "infoURL": "https://evrice.com"
    },
    {
    "name": "Newton",
    "chainId": 1012,
    "shortName": "new",
    "networkId": 1012,
    "nativeCurrency": {
    "name": "Newton",
    "symbol": "NEW",
    "decimals": 18
    },
    "rpc": [
    "https://global.rpc.mainnet.newtonproject.org"
    ],
    "faucets": [],
    "infoURL": "https://www.newtonproject.org/"
    },
    {
    "name": "Sakura",
    "chainId": 1022,
    "shortName": "sku",
    "networkId": 1022,
    "nativeCurrency": {
    "name": "Sakura",
    "symbol": "SKU",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://clover.finance/sakura"
    },
    {
    "name": "Clover Testnet",
    "chainId": 1023,
    "shortName": "tclv",
    "networkId": 1023,
    "nativeCurrency": {
    "name": "Clover",
    "symbol": "CLV",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://clover.finance"
    },
    {
    "name": "CLV Parachain",
    "chainId": 1024,
    "shortName": "clv",
    "networkId": 1024,
    "nativeCurrency": {
    "name": "CLV",
    "symbol": "CLV",
    "decimals": 18
    },
    "rpc": [
    "https://api-para.clover.finance"
    ],
    "faucets": [],
    "infoURL": "https://clv.org"
    },
    {
    "name": "BitTorrent Chain Testnet",
    "chainId": 1028,
    "shortName": "tbtt",
    "networkId": 1028,
    "nativeCurrency": {
    "name": "BitTorrent",
    "symbol": "BTT",
    "decimals": 18
    },
    "rpc": [
    "https://testrpc.bittorrentchain.io/"
    ],
    "faucets": [],
    "infoURL": "https://bittorrentchain.io/"
    },
    {
    "name": "Conflux eSpace",
    "chainId": 1030,
    "shortName": "cfx",
    "networkId": 1030,
    "nativeCurrency": {
    "name": "CFX",
    "symbol": "CFX",
    "decimals": 18
    },
    "rpc": [
    "https://evm.confluxrpc.com"
    ],
    "faucets": [],
    "infoURL": "https://confluxnetwork.org"
    },
    {
    "name": "Metis Andromeda Mainnet",
    "chainId": 1088,
    "shortName": "metis-andromeda",
    "networkId": 1088,
    "nativeCurrency": {
    "name": "Metis",
    "symbol": "METIS",
    "decimals": 18
    },
    "rpc": [
    "https://andromeda.metis.io/?owner=1088"
    ],
    "faucets": [],
    "infoURL": "https://www.metis.io"
    },
    {
    "name": "MathChain",
    "chainId": 1139,
    "shortName": "MATH",
    "networkId": 1139,
    "nativeCurrency": {
    "name": "MathChain",
    "symbol": "MATH",
    "decimals": 18
    },
    "rpc": [
    "https://mathchain-asia.maiziqianbao.net/rpc",
    "https://mathchain-us.maiziqianbao.net/rpc"
    ],
    "faucets": [],
    "infoURL": "https://mathchain.org"
    },
    {
    "name": "MathChain Testnet",
    "chainId": 1140,
    "shortName": "tMATH",
    "networkId": 1140,
    "nativeCurrency": {
    "name": "MathChain",
    "symbol": "MATH",
    "decimals": 18
    },
    "rpc": [
    "https://galois-hk.maiziqianbao.net/rpc"
    ],
    "faucets": [
    "https://scan.boka.network/#/Galois/faucet"
    ],
    "infoURL": "https://mathchain.org"
    },
    {
    "name": "Iora Chain",
    "chainId": 1197,
    "shortName": "iora",
    "networkId": 1197,
    "nativeCurrency": {
    "name": "Iora",
    "symbol": "IORA",
    "decimals": 18
    },
    "rpc": [
    "https://dataseed.iorachain.com"
    ],
    "faucets": [],
    "infoURL": "https://iorachain.com"
    },
    {
    "name": "Evanesco Testnet",
    "chainId": 1201,
    "shortName": "avis",
    "networkId": 1201,
    "nativeCurrency": {
    "name": "AVIS",
    "symbol": "AVIS",
    "decimals": 18
    },
    "rpc": [
    "https://seed5.evanesco.org:8547"
    ],
    "faucets": [],
    "infoURL": "https://evanesco.org/"
    },
    {
    "name": "World Trade Technical Chain Mainnet",
    "chainId": 1202,
    "shortName": "wtt",
    "networkId": 2048,
    "nativeCurrency": {
    "name": "World Trade Token",
    "symbol": "WTT",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.cadaut.com",
    "wss://rpc.cadaut.com/ws"
    ],
    "faucets": [],
    "infoURL": "http://www.cadaut.com"
    },
    {
    "name": "Popcateum Mainnet",
    "chainId": 1213,
    "shortName": "popcat",
    "networkId": 1213,
    "nativeCurrency": {
    "name": "Popcat",
    "symbol": "POP",
    "decimals": 18
    },
    "rpc": [
    "https://dataseed.popcateum.org"
    ],
    "faucets": [],
    "infoURL": "https://popcateum.org"
    },
    {
    "name": "EnterChain Mainnet",
    "chainId": 1214,
    "shortName": "enter",
    "networkId": 1214,
    "nativeCurrency": {
    "name": "EnterCoin",
    "symbol": "ENTER",
    "decimals": 18
    },
    "rpc": [
    "https://tapi.entercoin.net/"
    ],
    "faucets": [],
    "infoURL": "https://entercoin.net"
    },
    {
    "name": "HALO Mainnet",
    "chainId": 1280,
    "shortName": "HO",
    "networkId": 1280,
    "nativeCurrency": {
    "name": "HALO",
    "symbol": "HO",
    "decimals": 18
    },
    "rpc": [
    "https://nodes.halo.land"
    ],
    "faucets": [],
    "infoURL": "https://halo.land/#/"
    },
    {
    "name": "Moonbeam",
    "chainId": 1284,
    "shortName": "mbeam",
    "networkId": 1284,
    "nativeCurrency": {
    "name": "Glimmer",
    "symbol": "GLMR",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.api.moonbeam.network",
    "wss://wss.api.moonbeam.network"
    ],
    "faucets": [],
    "infoURL": "https://moonbeam.network/networks/moonbeam/"
    },
    {
    "name": "Moonriver",
    "chainId": 1285,
    "shortName": "mriver",
    "networkId": 1285,
    "nativeCurrency": {
    "name": "Moonriver",
    "symbol": "MOVR",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.api.moonriver.moonbeam.network",
    "wss://wss.api.moonriver.moonbeam.network"
    ],
    "faucets": [],
    "infoURL": "https://moonbeam.network/networks/moonriver/"
    },
    {
    "name": "Moonrock old",
    "chainId": 1286,
    "shortName": "mrock-old",
    "networkId": 1286,
    "nativeCurrency": {
    "name": "Rocs",
    "symbol": "ROC",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": ""
    },
    {
    "name": "Moonbase Alpha",
    "chainId": 1287,
    "shortName": "mbase",
    "networkId": 1287,
    "nativeCurrency": {
    "name": "Dev",
    "symbol": "DEV",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.api.moonbase.moonbeam.network",
    "wss://wss.api.moonbase.moonbeam.network"
    ],
    "faucets": [],
    "infoURL": "https://docs.moonbeam.network/networks/testnet/"
    },
    {
    "name": "Moonrock",
    "chainId": 1288,
    "shortName": "mrock",
    "networkId": 1288,
    "nativeCurrency": {
    "name": "Rocs",
    "symbol": "ROC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.api.moonrock.moonbeam.network",
    "wss://wss.api.moonrock.moonbeam.network"
    ],
    "faucets": [],
    "infoURL": "https://docs.moonbeam.network/learn/platform/networks/overview/"
    },
    {
    "name": "CENNZnet old",
    "chainId": 1337,
    "shortName": "cennz-old",
    "networkId": 1337,
    "nativeCurrency": {
    "name": "CPAY",
    "symbol": "CPAY",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://cennz.net"
    },
    {
    "name": "Sherpax Mainnet",
    "chainId": 1506,
    "shortName": "Sherpax",
    "networkId": 1506,
    "nativeCurrency": {
    "name": "KSX",
    "symbol": "KSX",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.sherpax.io/rpc"
    ],
    "faucets": [],
    "infoURL": "https://sherpax.io/"
    },
    {
    "name": "Sherpax Testnet",
    "chainId": 1507,
    "shortName": "Sherpax Testnet",
    "networkId": 1507,
    "nativeCurrency": {
    "name": "KSX",
    "symbol": "KSX",
    "decimals": 18
    },
    "rpc": [
    "https://sherpax-testnet.chainx.org/rpc"
    ],
    "faucets": [],
    "infoURL": "https://sherpax.io/"
    },
    {
    "name": "Catecoin Chain Mainnet",
    "chainId": 1618,
    "shortName": "cate",
    "networkId": 1618,
    "nativeCurrency": {
    "name": "Catecoin",
    "symbol": "CATE",
    "decimals": 18
    },
    "rpc": [
    "https://send.catechain.com"
    ],
    "faucets": [],
    "infoURL": "https://catechain.com"
    },
    {
    "name": "Atheios",
    "chainId": 1620,
    "shortName": "ath",
    "networkId": 11235813,
    "nativeCurrency": {
    "name": "Atheios Ether",
    "symbol": "ATH",
    "decimals": 18
    },
    "rpc": [
    "https://wallet.atheios.com:8797"
    ],
    "faucets": [],
    "infoURL": "https://atheios.com"
    },
    {
    "name": "Btachain",
    "chainId": 1657,
    "shortName": "bta",
    "networkId": 1657,
    "nativeCurrency": {
    "name": "Bitcoin Asset",
    "symbol": "BTA",
    "decimals": 18
    },
    "rpc": [
    "https://dataseed1.btachain.com/"
    ],
    "faucets": [],
    "infoURL": "https://bitcoinasset.io/"
    },
    {
    "name": "LUDAN Mainnet",
    "chainId": 1688,
    "shortName": "LUDAN",
    "networkId": 1688,
    "nativeCurrency": {
    "name": "LUDAN",
    "symbol": "LUDAN",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.ludan.org/"
    ],
    "faucets": [],
    "infoURL": "https://www.ludan.org/"
    },
    {
    "name": "Cube Chain Mainnet",
    "chainId": 1818,
    "shortName": "cube",
    "networkId": 1818,
    "nativeCurrency": {
    "name": "Cube Chain Native Token",
    "symbol": "CUBE",
    "decimals": 18
    },
    "rpc": [
    "https://http-mainnet.cube.network",
    "wss://ws-mainnet.cube.network",
    "https://http-mainnet-sg.cube.network",
    "wss://ws-mainnet-sg.cube.network",
    "https://http-mainnet-us.cube.network",
    "wss://ws-mainnet-us.cube.network"
    ],
    "faucets": [],
    "infoURL": "https://www.cube.network"
    },
    {
    "name": "Cube Chain Testnet",
    "chainId": 1819,
    "shortName": "cubet",
    "networkId": 1819,
    "nativeCurrency": {
    "name": "Cube Chain Test Native Token",
    "symbol": "CUBET",
    "decimals": 18
    },
    "rpc": [
    "https://http-testnet.cube.network",
    "wss://ws-testnet.cube.network",
    "https://http-testnet-sg.cube.network",
    "wss://ws-testnet-sg.cube.network",
    "https://http-testnet-jp.cube.network",
    "wss://ws-testnet-jp.cube.network",
    "https://http-testnet-us.cube.network",
    "wss://ws-testnet-us.cube.network"
    ],
    "faucets": [
    "https://faucet.cube.network"
    ],
    "infoURL": "https://www.cube.network"
    },
    {
    "name": "Teslafunds",
    "chainId": 1856,
    "shortName": "tsf",
    "networkId": 1,
    "nativeCurrency": {
    "name": "Teslafunds Ether",
    "symbol": "TSF",
    "decimals": 18
    },
    "rpc": [
    "https://tsfapi.europool.me"
    ],
    "faucets": [],
    "infoURL": "https://teslafunds.io"
    },
    {
    "name": "BON Network",
    "chainId": 1898,
    "shortName": "boya",
    "networkId": 1,
    "nativeCurrency": {
    "name": "BOYACoin",
    "symbol": "BOY",
    "decimals": 18
    },
    "rpc": [
    "http://rpc.boyanet.org:8545",
    "ws://rpc.boyanet.org:8546"
    ],
    "faucets": [],
    "infoURL": "https://boyanet.org"
    },
    {
    "name": "Eurus Testnet",
    "chainId": 1984,
    "shortName": "euntest",
    "networkId": 1984,
    "nativeCurrency": {
    "name": "Eurus",
    "symbol": "EUN",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.eurus.network"
    ],
    "faucets": [],
    "infoURL": "https://eurus.network"
    },
    {
    "name": "EtherGem",
    "chainId": 1987,
    "shortName": "egem",
    "networkId": 1987,
    "nativeCurrency": {
    "name": "EtherGem Ether",
    "symbol": "EGEM",
    "decimals": 18
    },
    "rpc": [
    "https://jsonrpc.egem.io/custom"
    ],
    "faucets": [],
    "infoURL": "https://egem.io"
    },
    {
    "name": "Milkomeda C1 Mainnet",
    "chainId": 2001,
    "shortName": "milkAda",
    "networkId": 2001,
    "nativeCurrency": {
    "name": "milkAda",
    "symbol": "mADA",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-mainnet-cardano-evm.c1.milkomeda.com",
    "wss://rpc-mainnet-cardano-evm.c1.milkomeda.com"
    ],
    "faucets": [],
    "infoURL": "https://milkomeda.com"
    },
    {
    "name": "CloudWalk Testnet",
    "chainId": 2008,
    "shortName": "cloudwalk_testnet",
    "networkId": 2008,
    "nativeCurrency": {
    "name": "CloudWalk Native Token",
    "symbol": "CWN",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://cloudwalk.io"
    },
    {
    "name": "CloudWalk Mainnet",
    "chainId": 2009,
    "shortName": "cloudwalk_mainnet",
    "networkId": 2009,
    "nativeCurrency": {
    "name": "CloudWalk Native Token",
    "symbol": "CWN",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://cloudwalk.io"
    },
    {
    "name": "420coin",
    "chainId": 2020,
    "shortName": "420",
    "networkId": 2020,
    "nativeCurrency": {
    "name": "Fourtwenty",
    "symbol": "420",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://420integrated.com"
    },
    {
    "name": "Edgeware Mainnet",
    "chainId": 2021,
    "shortName": "edg",
    "networkId": 2021,
    "nativeCurrency": {
    "name": "Edge",
    "symbol": "EDG",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet1.edgewa.re"
    ],
    "faucets": [],
    "infoURL": "http://edgewa.re"
    },
    {
    "name": "Beresheet Testnet",
    "chainId": 2022,
    "shortName": "edgt",
    "networkId": 2022,
    "nativeCurrency": {
    "name": "Testnet Edge",
    "symbol": "tEDG",
    "decimals": 18
    },
    "rpc": [
    "https://beresheet1.edgewa.re"
    ],
    "faucets": [],
    "infoURL": "http://edgewa.re"
    },
    {
    "name": "Taycan Testnet",
    "chainId": 2023,
    "shortName": "taycan-testnet",
    "networkId": 2023,
    "nativeCurrency": {
    "name": "test-Shuffle",
    "symbol": "tSFL",
    "decimals": 18
    },
    "rpc": [
    "https://test-taycan.hupayx.io"
    ],
    "faucets": [
    "https://ttaycan-faucet.hupayx.io/"
    ],
    "infoURL": "https://hupayx.io"
    },
    {
    "name": "Rangers Protocol Mainnet",
    "chainId": 2025,
    "shortName": "rpg",
    "networkId": 2025,
    "nativeCurrency": {
    "name": "Rangers Protocol Gas",
    "symbol": "RPG",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.rangersprotocol.com/api/jsonrpc"
    ],
    "faucets": [],
    "infoURL": "https://rangersprotocol.com"
    },
    {
    "name": "Ecoball Mainnet",
    "chainId": 2100,
    "shortName": "eco",
    "networkId": 2100,
    "nativeCurrency": {
    "name": "Ecoball Coin",
    "symbol": "ECO",
    "decimals": 18
    },
    "rpc": [
    "https://api.ecoball.org/ecoball/"
    ],
    "faucets": [],
    "infoURL": "https://ecoball.org"
    },
    {
    "name": "Ecoball Testnet Espuma",
    "chainId": 2101,
    "shortName": "esp",
    "networkId": 2101,
    "nativeCurrency": {
    "name": "Espuma Coin",
    "symbol": "ECO",
    "decimals": 18
    },
    "rpc": [
    "https://api.ecoball.org/espuma/"
    ],
    "faucets": [],
    "infoURL": "https://ecoball.org"
    },
    {
    "name": "Findora Mainnet",
    "chainId": 2152,
    "shortName": "fra",
    "networkId": 2152,
    "nativeCurrency": {
    "name": "FRA",
    "symbol": "FRA",
    "decimals": 18
    },
    "rpc": [
    "https://prod-mainnet.prod.findora.org:8545"
    ],
    "faucets": [],
    "infoURL": "https://findora.org/"
    },
    {
    "name": "Findora Testnet",
    "chainId": 2153,
    "shortName": "findora-testnet",
    "networkId": 2153,
    "nativeCurrency": {
    "name": "FRA",
    "symbol": "FRA",
    "decimals": 18
    },
    "rpc": [
    "https://prod-testnet.prod.findora.org:8545/"
    ],
    "faucets": [],
    "infoURL": "https://findora.org/"
    },
    {
    "name": "Evanesco Mainnet",
    "chainId": 2213,
    "shortName": "evanesco",
    "networkId": 2213,
    "nativeCurrency": {
    "name": "EVA",
    "symbol": "EVA",
    "decimals": 18
    },
    "rpc": [
    "https://seed4.evanesco.org:8546"
    ],
    "faucets": [],
    "infoURL": "https://evanesco.org/"
    },
    {
    "name": "Kava EVM Testnet",
    "chainId": 2221,
    "shortName": "tkava",
    "networkId": 2221,
    "nativeCurrency": {
    "name": "TKava",
    "symbol": "TKAVA",
    "decimals": 18
    },
    "rpc": [
    "https://evm.evm-alpha.kava.io",
    "wss://evm-ws.evm-alpha.kava.io"
    ],
    "faucets": [
    "https://faucet.kava.io"
    ],
    "infoURL": "https://www.kava.io"
    },
    {
    "name": "Kava EVM",
    "chainId": 2222,
    "shortName": "kava",
    "networkId": 2222,
    "nativeCurrency": {
    "name": "Kava",
    "symbol": "KAVA",
    "decimals": 18
    },
    "rpc": [
    "https://evm.kava.io",
    "https://evm2.kava.io",
    "wss://wevm.kava.io",
    "wss://wevm2.kava.io"
    ],
    "faucets": [],
    "infoURL": "https://www.kava.io"
    },
    {
    "name": "VChain Mainnet",
    "chainId": 2223,
    "shortName": "VChain",
    "networkId": 2223,
    "nativeCurrency": {
    "name": "VNDT",
    "symbol": "VNDT",
    "decimals": 18
    },
    "rpc": [
    "https://bc.vcex.xyz"
    ],
    "faucets": [],
    "infoURL": "https://bo.vcex.xyz/"
    },
    {
    "name": "Kortho Mainnet",
    "chainId": 2559,
    "shortName": "ktoc",
    "networkId": 2559,
    "nativeCurrency": {
    "name": "KorthoChain",
    "symbol": "KTO",
    "decimals": 11
    },
    "rpc": [
    "https://www.kortho-chain.com"
    ],
    "faucets": [],
    "infoURL": "https://www.kortho.io/"
    },
    {
    "name": "TechPay Mainnet",
    "chainId": 2569,
    "shortName": "tpc",
    "networkId": 2569,
    "nativeCurrency": {
    "name": "TechPay",
    "symbol": "TPC",
    "decimals": 18
    },
    "rpc": [
    "https://api.techpay.io/"
    ],
    "faucets": [],
    "infoURL": "https://techpay.io/"
    },
    {
    "name": "EZChain C-Chain Mainnet",
    "chainId": 2612,
    "shortName": "EZChain",
    "networkId": 2612,
    "nativeCurrency": {
    "name": "EZChain",
    "symbol": "EZC",
    "decimals": 18
    },
    "rpc": [
    "https://api.ezchain.com/ext/bc/C/rpc"
    ],
    "faucets": [],
    "infoURL": "https://ezchain.com"
    },
    {
    "name": "EZChain C-Chain Testnet",
    "chainId": 2613,
    "shortName": "Fuji-EZChain",
    "networkId": 2613,
    "nativeCurrency": {
    "name": "EZChain",
    "symbol": "EZC",
    "decimals": 18
    },
    "rpc": [
    "https://testnet-api.ezchain.com/ext/bc/C/rpc"
    ],
    "faucets": [
    "https://testnet-faucet.ezchain.com"
    ],
    "infoURL": "https://ezchain.com"
    },
    {
    "name": "CENNZnet Rata",
    "chainId": 3000,
    "shortName": "cennz-r",
    "networkId": 3000,
    "nativeCurrency": {
    "name": "CPAY",
    "symbol": "CPAY",
    "decimals": 18
    },
    "rpc": [
    "https://rata.centrality.me/public"
    ],
    "faucets": [
    "https://app-faucet.centrality.me"
    ],
    "infoURL": "https://cennz.net"
    },
    {
    "name": "CENNZnet Nikau",
    "chainId": 3001,
    "shortName": "cennz-n",
    "networkId": 3001,
    "nativeCurrency": {
    "name": "CPAY",
    "symbol": "CPAY",
    "decimals": 18
    },
    "rpc": [
    "https://nikau.centrality.me/public"
    ],
    "faucets": [
    "https://app-faucet.centrality.me"
    ],
    "infoURL": "https://cennz.net"
    },
    {
    "name": "ZCore Testnet",
    "chainId": 3331,
    "shortName": "zcrbeach",
    "networkId": 3331,
    "nativeCurrency": {
    "name": "ZCore",
    "symbol": "ZCR",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-testnet.zcore.cash"
    ],
    "faucets": [
    "https://faucet.zcore.cash"
    ],
    "infoURL": "https://zcore.cash"
    },
    {
    "name": "Web3Q Testnet",
    "chainId": 3333,
    "shortName": "w3q-t",
    "networkId": 3333,
    "nativeCurrency": {
    "name": "Web3Q",
    "symbol": "W3Q",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.web3q.io:8545"
    ],
    "faucets": [],
    "infoURL": "https://testnet.web3q.io/home.w3q/"
    },
    {
    "name": "Web3Q Galileo",
    "chainId": 3334,
    "shortName": "w3q-g",
    "networkId": 3334,
    "nativeCurrency": {
    "name": "Web3Q",
    "symbol": "W3Q",
    "decimals": 18
    },
    "rpc": [
    "https://galileo.web3q.io:8545"
    ],
    "faucets": [],
    "infoURL": "https://galileo.web3q.io/home.w3q/"
    },
    {
    "name": "Paribu Net Mainnet",
    "chainId": 3400,
    "shortName": "prb",
    "networkId": 3400,
    "nativeCurrency": {
    "name": "PRB",
    "symbol": "PRB",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.paribu.network"
    ],
    "faucets": [],
    "infoURL": "https://net.paribu.com"
    },
    {
    "name": "Paribu Net Testnet",
    "chainId": 3500,
    "shortName": "prbtestnet",
    "networkId": 3500,
    "nativeCurrency": {
    "name": "PRB",
    "symbol": "PRB",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.testnet.paribuscan.com"
    ],
    "faucets": [
    "https://faucet.paribuscan.com"
    ],
    "infoURL": "https://net.paribu.com"
    },
    {
    "name": "Bittex Mainnet",
    "chainId": 3690,
    "shortName": "btx",
    "networkId": 3690,
    "nativeCurrency": {
    "name": "Bittex",
    "symbol": "BTX",
    "decimals": 18
    },
    "rpc": [
    "https://rpc1.bittexscan.info",
    "https://rpc2.bittexscan.info"
    ],
    "faucets": [],
    "infoURL": "https://bittexscan.com"
    },
    {
    "name": "Crossbell",
    "chainId": 3737,
    "shortName": "csb",
    "networkId": 3737,
    "nativeCurrency": {
    "name": "Crossbell Token",
    "symbol": "CSB",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.crossbell.io"
    ],
    "faucets": [
    "https://faucet.crossbell.io"
    ],
    "infoURL": "https://crossbell.io"
    },
    {
    "name": "DYNO Mainnet",
    "chainId": 3966,
    "shortName": "dyno",
    "networkId": 3966,
    "nativeCurrency": {
    "name": "DYNO Token",
    "symbol": "DYNO",
    "decimals": 18
    },
    "rpc": [
    "https://api.dynoprotocol.com"
    ],
    "faucets": [
    "https://faucet.dynoscan.io"
    ],
    "infoURL": "https://dynoprotocol.com"
    },
    {
    "name": "DYNO Testnet",
    "chainId": 3967,
    "shortName": "tdyno",
    "networkId": 3967,
    "nativeCurrency": {
    "name": "DYNO Token",
    "symbol": "tDYNO",
    "decimals": 18
    },
    "rpc": [
    "https://tapi.dynoprotocol.com"
    ],
    "faucets": [
    "https://faucet.dynoscan.io"
    ],
    "infoURL": "https://dynoprotocol.com"
    },
    {
    "name": "YuanChain Mainnet",
    "chainId": 3999,
    "shortName": "ycc",
    "networkId": 3999,
    "nativeCurrency": {
    "name": "YCC",
    "symbol": "YCC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.yuan.org/eth"
    ],
    "faucets": [],
    "infoURL": "https://www.yuan.org"
    },
    {
    "name": "Fantom Testnet",
    "chainId": 4002,
    "shortName": "tftm",
    "networkId": 4002,
    "nativeCurrency": {
    "name": "Fantom",
    "symbol": "FTM",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.testnet.fantom.network"
    ],
    "faucets": [
    "https://faucet.fantom.network"
    ],
    "infoURL": "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet"
    },
    {
    "name": "AIOZ Network Testnet",
    "chainId": 4102,
    "shortName": "aioz-testnet",
    "networkId": 4102,
    "nativeCurrency": {
    "name": "testAIOZ",
    "symbol": "AIOZ",
    "decimals": 18
    },
    "rpc": [
    "https://eth-ds.testnet.aioz.network"
    ],
    "faucets": [],
    "infoURL": "https://aioz.network"
    },
    {
    "name": "PHI Network",
    "chainId": 4181,
    "shortName": "PHI",
    "networkId": 4181,
    "nativeCurrency": {
    "name": "PHI",
    "symbol": "Φ",
    "decimals": 18
    },
    "rpc": [
    "https://rpc1.phi.network",
    "https://rpc2.phi.network"
    ],
    "faucets": [],
    "infoURL": "https://phi.network"
    },
    {
    "name": "IoTeX Network Mainnet",
    "chainId": 4689,
    "shortName": "iotex-mainnet",
    "networkId": 4689,
    "nativeCurrency": {
    "name": "IoTeX",
    "symbol": "IOTX",
    "decimals": 18
    },
    "rpc": [
    "https://babel-api.mainnet.iotex.io"
    ],
    "faucets": [],
    "infoURL": "https://iotex.io"
    },
    {
    "name": "IoTeX Network Testnet",
    "chainId": 4690,
    "shortName": "iotex-testnet",
    "networkId": 4690,
    "nativeCurrency": {
    "name": "IoTeX",
    "symbol": "IOTX",
    "decimals": 18
    },
    "rpc": [
    "https://babel-api.testnet.iotex.io"
    ],
    "faucets": [
    "https://faucet.iotex.io/"
    ],
    "infoURL": "https://iotex.io"
    },
    {
    "name": "Venidium Testnet",
    "chainId": 4918,
    "shortName": "txvm",
    "networkId": 4918,
    "nativeCurrency": {
    "name": "Venidium",
    "symbol": "XVM",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-evm-testnet.venidium.io"
    ],
    "faucets": [],
    "infoURL": "https://venidium.io"
    },
    {
    "name": "Venidium Mainnet",
    "chainId": 4919,
    "shortName": "xvm",
    "networkId": 4919,
    "nativeCurrency": {
    "name": "Venidium",
    "symbol": "XVM",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.venidium.io"
    ],
    "faucets": [],
    "infoURL": "https://venidium.io"
    },
    {
    "name": "TLChain Network Mainnet",
    "chainId": 5177,
    "shortName": "tlc",
    "networkId": 5177,
    "nativeCurrency": {
    "name": "TLChain Network",
    "symbol": "TLC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-rpc.tlxscan.com/"
    ],
    "faucets": [],
    "infoURL": "https://tlchain.network/"
    },
    {
    "name": "EraSwap Mainnet",
    "chainId": 5197,
    "shortName": "es",
    "networkId": 5197,
    "nativeCurrency": {
    "name": "EraSwap",
    "symbol": "ES",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.eraswap.network",
    "https://rpc-mumbai.mainnet.eraswap.network"
    ],
    "faucets": [],
    "infoURL": "https://eraswap.info/"
    },
    {
    "name": "Uzmi Network Mainnet",
    "chainId": 5315,
    "shortName": "UZMI",
    "networkId": 5315,
    "nativeCurrency": {
    "name": "UZMI",
    "symbol": "UZMI",
    "decimals": 18
    },
    "rpc": [
    "https://network.uzmigames.com.br/"
    ],
    "faucets": [],
    "infoURL": "https://uzmigames.com.br/"
    },
    {
    "name": "Nahmii Mainnet",
    "chainId": 5551,
    "shortName": "Nahmii",
    "networkId": 5551,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://l2.nahmii.io"
    ],
    "faucets": [],
    "infoURL": "https://nahmii.io"
    },
    {
    "name": "Nahmii Testnet",
    "chainId": 5553,
    "shortName": "Nahmii testnet",
    "networkId": 5553,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://l2.testnet.nahmii.io"
    ],
    "faucets": [],
    "infoURL": "https://nahmii.io"
    },
    {
    "name": "Syscoin Tanenbaum Testnet",
    "chainId": 5700,
    "shortName": "tsys",
    "networkId": 5700,
    "nativeCurrency": {
    "name": "Testnet Syscoin",
    "symbol": "tSYS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.tanenbaum.io",
    "wss://rpc.tanenbaum.io/wss"
    ],
    "faucets": [
    "https://faucet.tanenbaum.io"
    ],
    "infoURL": "https://syscoin.org"
    },
    {
    "name": "Digest Swarm Chain",
    "chainId": 5777,
    "shortName": "dgcc",
    "networkId": 5777,
    "nativeCurrency": {
    "name": "DigestCoin",
    "symbol": "DGCC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.digestgroup.ltd"
    ],
    "faucets": [],
    "infoURL": "https://digestgroup.ltd"
    },
    {
    "name": "Ontology Testnet",
    "chainId": 5851,
    "shortName": "Ontology Testnet",
    "networkId": 5851,
    "nativeCurrency": {
    "name": "ONG",
    "symbol": "ONG",
    "decimals": 18
    },
    "rpc": [
    "http://polaris1.ont.io:20339",
    "http://polaris2.ont.io:20339",
    "http://polaris3.ont.io:20339",
    "http://polaris4.ont.io:20339",
    "https://polaris1.ont.io:10339",
    "https://polaris2.ont.io:10339",
    "https://polaris3.ont.io:10339",
    "https://polaris4.ont.io:10339"
    ],
    "faucets": [
    "https://developer.ont.io/"
    ],
    "infoURL": "https://ont.io/"
    },
    {
    "name": "Wegochain Rubidium Mainnet",
    "chainId": 5869,
    "shortName": "rbd",
    "networkId": 5869,
    "nativeCurrency": {
    "name": "Rubid",
    "symbol": "RBD",
    "decimals": 18
    },
    "rpc": [
    "https://proxy.wegochain.io",
    "http://wallet.wegochain.io:7764"
    ],
    "faucets": [],
    "infoURL": "https://www.wegochain.io"
    },
    {
    "name": "Pixie Chain Mainnet",
    "chainId": 6626,
    "shortName": "pixie-chain",
    "networkId": 6626,
    "nativeCurrency": {
    "name": "Pixie Chain Native Token",
    "symbol": "PIX",
    "decimals": 18
    },
    "rpc": [
    "https://http-mainnet.chain.pixie.xyz",
    "wss://ws-mainnet.chain.pixie.xyz"
    ],
    "faucets": [],
    "infoURL": "https://chain.pixie.xyz"
    },
    {
    "name": "Ella the heart",
    "chainId": 7027,
    "shortName": "ELLA",
    "networkId": 7027,
    "nativeCurrency": {
    "name": "Ella",
    "symbol": "ELLA",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.ella.network"
    ],
    "faucets": [],
    "infoURL": "https://ella.network"
    },
    {
    "name": "Shyft Mainnet",
    "chainId": 7341,
    "shortName": "shyft",
    "networkId": 7341,
    "nativeCurrency": {
    "name": "Shyft",
    "symbol": "SHYFT",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.shyft.network/"
    ],
    "faucets": [],
    "infoURL": "https://shyft.network"
    },
    {
    "name": "Rise of the Warbots Testnet",
    "chainId": 7777,
    "shortName": "Rise of the Warbots Testnet",
    "networkId": 7777,
    "nativeCurrency": {
    "name": "Nano Machines",
    "symbol": "NMAC",
    "decimals": 18
    },
    "rpc": [
    "https://testnet1.riseofthewarbots.com",
    "https://testnet2.riseofthewarbots.com",
    "https://testnet3.riseofthewarbots.com",
    "https://testnet4.riseofthewarbots.com",
    "https://testnet5.riseofthewarbots.com"
    ],
    "faucets": [],
    "infoURL": "https://riseofthewarbots.com/"
    },
    {
    "name": "Hazlor Testnet",
    "chainId": 7878,
    "shortName": "tscas",
    "networkId": 7878,
    "nativeCurrency": {
    "name": "Hazlor Test Coin",
    "symbol": "TSCAS",
    "decimals": 18
    },
    "rpc": [
    "https://hatlas.rpc.hazlor.com:8545",
    "wss://hatlas.rpc.hazlor.com:8546"
    ],
    "faucets": [
    "https://faucet.hazlor.com"
    ],
    "infoURL": "https://hazlor.com"
    },
    {
    "name": "Teleport",
    "chainId": 8000,
    "shortName": "teleport",
    "networkId": 8000,
    "nativeCurrency": {
    "name": "Tele",
    "symbol": "TELE",
    "decimals": 18
    },
    "rpc": [
    "https://evm-rpc.teleport.network"
    ],
    "faucets": [],
    "infoURL": "https://teleport.network"
    },
    {
    "name": "Teleport Testnet",
    "chainId": 8001,
    "shortName": "teleport-testnet",
    "networkId": 8001,
    "nativeCurrency": {
    "name": "Tele",
    "symbol": "TELE",
    "decimals": 18
    },
    "rpc": [
    "https://evm-rpc.testnet.teleport.network"
    ],
    "faucets": [
    "https://chain-docs.teleport.network/testnet/faucet.html"
    ],
    "infoURL": "https://teleport.network"
    },
    {
    "name": "MDGL Testnet",
    "chainId": 8029,
    "shortName": "mdgl",
    "networkId": 8029,
    "nativeCurrency": {
    "name": "MDGL Token",
    "symbol": "MDGLT",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.mdgl.io"
    ],
    "faucets": [],
    "infoURL": "https://mdgl.io"
    },
    {
    "name": "GeneChain Adenine Testnet",
    "chainId": 8080,
    "shortName": "GeneChainAdn",
    "networkId": 8080,
    "nativeCurrency": {
    "name": "Testnet RNA",
    "symbol": "tRNA",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-testnet.genechain.io"
    ],
    "faucets": [
    "https://faucet.genechain.io"
    ],
    "infoURL": "https://scan-testnet.genechain.io/"
    },
    {
    "name": "Klaytn Mainnet Cypress",
    "chainId": 8217,
    "shortName": "Cypress",
    "networkId": 8217,
    "nativeCurrency": {
    "name": "KLAY",
    "symbol": "KLAY",
    "decimals": 18
    },
    "rpc": [
    "https://public-node-api.klaytnapi.com/v1/cypress"
    ],
    "faucets": [],
    "infoURL": "https://www.klaytn.com/"
    },
    {
    "name": "KorthoTest",
    "chainId": 8285,
    "shortName": "Kortho",
    "networkId": 8285,
    "nativeCurrency": {
    "name": "Kortho Test",
    "symbol": "KTO",
    "decimals": 11
    },
    "rpc": [
    "https://www.krotho-test.net"
    ],
    "faucets": [],
    "infoURL": "https://www.kortho.io/"
    },
    {
    "name": "TOOL Global Mainnet",
    "chainId": 8723,
    "shortName": "olo",
    "networkId": 8723,
    "nativeCurrency": {
    "name": "TOOL Global",
    "symbol": "OLO",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-web3.wolot.io"
    ],
    "faucets": [],
    "infoURL": "https://ibdt.io"
    },
    {
    "name": "TOOL Global Testnet",
    "chainId": 8724,
    "shortName": "tolo",
    "networkId": 8724,
    "nativeCurrency": {
    "name": "TOOL Global",
    "symbol": "OLO",
    "decimals": 18
    },
    "rpc": [
    "https://testnet-web3.wolot.io"
    ],
    "faucets": [
    "https://testnet-explorer.wolot.io"
    ],
    "infoURL": "https://testnet-explorer.wolot.io"
    },
    {
    "name": "Ambros Chain Testnet",
    "chainId": 8888,
    "shortName": "ambrostestnet",
    "networkId": 8888,
    "nativeCurrency": {
    "name": "AMBROS",
    "symbol": "AMBROS",
    "decimals": 18
    },
    "rpc": [
    "https://api.testnet.ambros.network"
    ],
    "faucets": [],
    "infoURL": "https://test.ambros.network"
    },
    {
    "name": "Mammoth Mainnet",
    "chainId": 8898,
    "shortName": "mmt",
    "networkId": 8898,
    "nativeCurrency": {
    "name": "Mammoth Token",
    "symbol": "MMT",
    "decimals": 18
    },
    "rpc": [
    "https://dataseed.mmtscan.io",
    "https://dataseed1.mmtscan.io",
    "https://dataseed2.mmtscan.io"
    ],
    "faucets": [
    "https://faucet.mmtscan.io/"
    ],
    "infoURL": "https://mmtchain.io/"
    },
    {
    "name": "bloxberg",
    "chainId": 8995,
    "shortName": "berg",
    "networkId": 8995,
    "nativeCurrency": {
    "name": "BERG",
    "symbol": "U+25B3",
    "decimals": 18
    },
    "rpc": [
    "https://core.bloxberg.org"
    ],
    "faucets": [
    "https://faucet.bloxberg.org/"
    ],
    "infoURL": "https://bloxberg.org"
    },
    {
    "name": "Evmos Testnet",
    "chainId": 9000,
    "shortName": "evmos-testnet",
    "networkId": 9000,
    "nativeCurrency": {
    "name": "test-Evmos",
    "symbol": "tEVMOS",
    "decimals": 18
    },
    "rpc": [
    "https://eth.bd.evmos.dev:8545"
    ],
    "faucets": [
    "https://faucet.evmos.dev"
    ],
    "infoURL": "https://evmos.org"
    },
    {
    "name": "Evmos",
    "chainId": 9001,
    "shortName": "evmos",
    "networkId": 9001,
    "nativeCurrency": {
    "name": "Evmos",
    "symbol": "EVMOS",
    "decimals": 18
    },
    "rpc": [
    "https://eth.bd.evmos.org:8545"
    ],
    "faucets": [],
    "infoURL": "https://evmos.org"
    },
    {
    "name": "Genesis Coin",
    "chainId": 9100,
    "shortName": "GENEC",
    "networkId": 9100,
    "nativeCurrency": {
    "name": "GN Coin",
    "symbol": "GNC",
    "decimals": 18
    },
    "rpc": [
    "https://genesis-gn.com",
    "wss://genesis-gn.com"
    ],
    "faucets": [],
    "infoURL": "https://genesis-gn.com"
    },
    {
    "name": "Rangers Protocol Testnet Robin",
    "chainId": 9527,
    "shortName": "trpg",
    "networkId": 9527,
    "nativeCurrency": {
    "name": "Rangers Protocol Gas",
    "symbol": "tRPG",
    "decimals": 18
    },
    "rpc": [
    "https://robin.rangersprotocol.com/api/jsonrpc"
    ],
    "faucets": [
    "https://robin-faucet.rangersprotocol.com"
    ],
    "infoURL": "https://rangersprotocol.com"
    },
    {
    "name": "myOwn Testnet",
    "chainId": 9999,
    "shortName": "myn",
    "networkId": 9999,
    "nativeCurrency": {
    "name": "MYN",
    "symbol": "MYN",
    "decimals": 18
    },
    "rpc": [
    "https://geth.dev.bccloud.net"
    ],
    "faucets": [],
    "infoURL": "https://docs.bccloud.net/"
    },
    {
    "name": "Smart Bitcoin Cash",
    "chainId": 10000,
    "shortName": "smartbch",
    "networkId": 10000,
    "nativeCurrency": {
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "decimals": 18
    },
    "rpc": [
    "https://smartbch.greyh.at",
    "https://rpc-mainnet.smartbch.org",
    "https://smartbch.fountainhead.cash/mainnet",
    "https://smartbch.devops.cash/mainnet"
    ],
    "faucets": [],
    "infoURL": "https://smartbch.org/"
    },
    {
    "name": "Smart Bitcoin Cash Testnet",
    "chainId": 10001,
    "shortName": "smartbchtest",
    "networkId": 10001,
    "nativeCurrency": {
    "name": "Bitcoin Cash Test Token",
    "symbol": "BCHT",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-testnet.smartbch.org",
    "https://smartbch.devops.cash/testnet"
    ],
    "faucets": [],
    "infoURL": "http://smartbch.org/"
    },
    {
    "name": "Blockchain Genesis Mainnet",
    "chainId": 10101,
    "shortName": "GEN",
    "networkId": 10101,
    "nativeCurrency": {
    "name": "GEN",
    "symbol": "GEN",
    "decimals": 18
    },
    "rpc": [
    "https://eu.mainnet.xixoio.com",
    "https://us.mainnet.xixoio.com",
    "https://asia.mainnet.xixoio.com"
    ],
    "faucets": [],
    "infoURL": "https://www.xixoio.com/"
    },
    {
    "name": "CryptoCoinPay",
    "chainId": 10823,
    "shortName": "CCP",
    "networkId": 10823,
    "nativeCurrency": {
    "name": "CryptoCoinPay",
    "symbol": "CCP",
    "decimals": 18
    },
    "rpc": [
    "http://node106.cryptocoinpay.info:8545",
    "ws://node106.cryptocoinpay.info:8546"
    ],
    "faucets": [],
    "infoURL": "https://www.cryptocoinpay.co"
    },
    {
    "name": "Quadrans Blockchain",
    "chainId": 10946,
    "shortName": "quadrans",
    "networkId": 10946,
    "nativeCurrency": {
    "name": "Quadrans Coin",
    "symbol": "QDC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.quadrans.io",
    "https://rpcna.quadrans.io",
    "https://rpceu.quadrans.io"
    ],
    "faucets": [],
    "infoURL": "https://quadrans.io"
    },
    {
    "name": "Quadrans Blockchain Testnet",
    "chainId": 10947,
    "shortName": "quadranstestnet",
    "networkId": 10947,
    "nativeCurrency": {
    "name": "Quadrans Testnet Coin",
    "symbol": "tQDC",
    "decimals": 18
    },
    "rpc": [
    "https://rpctest.quadrans.io",
    "https://rpctest2.quadrans.io"
    ],
    "faucets": [
    "https://faucetpage.quadrans.io"
    ],
    "infoURL": "https://quadrans.io"
    },
    {
    "name": "WAGMI",
    "chainId": 11111,
    "shortName": "WAGMI",
    "networkId": 11111,
    "nativeCurrency": {
    "name": "WAGMI",
    "symbol": "WGM",
    "decimals": 18
    },
    "rpc": [
    "https://subnets.avax.network/wagmi/wagmi-chain-testnet/rpc"
    ],
    "faucets": [
    "https://faucet.trywagmi.xyz"
    ],
    "infoURL": "https://trywagmi.xyz"
    },
    {
    "name": "Shyft Testnet",
    "chainId": 11437,
    "shortName": "shyftt",
    "networkId": 11437,
    "nativeCurrency": {
    "name": "Shyft Test Token",
    "symbol": "SHYFTT",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.testnet.shyft.network/"
    ],
    "faucets": [],
    "infoURL": "https://shyft.network"
    },
    {
    "name": "Singularity ZERO Testnet",
    "chainId": 12051,
    "shortName": "tZERO",
    "networkId": 12051,
    "nativeCurrency": {
    "name": "ZERO",
    "symbol": "tZERO",
    "decimals": 18
    },
    "rpc": [
    "https://betaenv.singularity.gold:18545"
    ],
    "faucets": [
    "https://nft.singularity.gold"
    ],
    "infoURL": "https://www.singularity.gold"
    },
    {
    "name": "Singularity ZERO Mainnet",
    "chainId": 12052,
    "shortName": "ZERO",
    "networkId": 12052,
    "nativeCurrency": {
    "name": "ZERO",
    "symbol": "ZERO",
    "decimals": 18
    },
    "rpc": [
    "https://zerorpc.singularity.gold"
    ],
    "faucets": [
    "https://zeroscan.singularity.gold"
    ],
    "infoURL": "https://www.singularity.gold"
    },
    {
    "name": "Phoenix Mainnet",
    "chainId": 13381,
    "shortName": "Phoenix",
    "networkId": 13381,
    "nativeCurrency": {
    "name": "Phoenix",
    "symbol": "PHX",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.phoenixplorer.com/"
    ],
    "faucets": [],
    "infoURL": "https://cryptophoenix.org/phoenix"
    },
    {
    "name": "MetaDot Mainnet",
    "chainId": 16000,
    "shortName": "mtt",
    "networkId": 16000,
    "nativeCurrency": {
    "name": "MetaDot Token",
    "symbol": "MTT",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.metadot.network"
    ],
    "faucets": [],
    "infoURL": "https://metadot.network"
    },
    {
    "name": "MetaDot Testnet",
    "chainId": 16001,
    "shortName": "mtttest",
    "networkId": 16001,
    "nativeCurrency": {
    "name": "MetaDot Token TestNet",
    "symbol": "MTTest",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.metadot.network"
    ],
    "faucets": [
    "https://faucet.metadot.network/"
    ],
    "infoURL": "https://metadot.network"
    },
    {
    "name": "IVAR Chain Testnet",
    "chainId": 16888,
    "shortName": "tivar",
    "networkId": 16888,
    "nativeCurrency": {
    "name": "tIvar",
    "symbol": "tIVAR",
    "decimals": 18
    },
    "rpc": [
    "https://testnet-rpc.ivarex.com"
    ],
    "faucets": [
    "https://tfaucet.ivarex.com/"
    ],
    "infoURL": "https://ivarex.com"
    },
    {
    "name": "BTCIX Network",
    "chainId": 19845,
    "shortName": "btcix",
    "networkId": 19845,
    "nativeCurrency": {
    "name": "BTCIX Network",
    "symbol": "BTCIX",
    "decimals": 18
    },
    "rpc": [
    "https://seed.btcix.org/rpc"
    ],
    "faucets": [],
    "infoURL": "https://bitcolojix.org"
    },
    {
    "name": "CENNZnet Azalea",
    "chainId": 21337,
    "shortName": "cennz-a",
    "networkId": 21337,
    "nativeCurrency": {
    "name": "CPAY",
    "symbol": "CPAY",
    "decimals": 18
    },
    "rpc": [
    "https://cennznet.unfrastructure.io/public"
    ],
    "faucets": [],
    "infoURL": "https://cennz.net"
    },
    {
    "name": "omChain Mainnet",
    "chainId": 21816,
    "shortName": "omc",
    "networkId": 21816,
    "nativeCurrency": {
    "name": "omChain",
    "symbol": "OMC",
    "decimals": 18
    },
    "rpc": [
    "https://seed.omchain.io"
    ],
    "faucets": [],
    "infoURL": "https://omchain.io"
    },
    {
    "name": "Taycan",
    "chainId": 22023,
    "shortName": "SFL",
    "networkId": 22023,
    "nativeCurrency": {
    "name": "shuffle",
    "symbol": "SFL",
    "decimals": 18
    },
    "rpc": [
    "https://taycan-rpc.hupayx.io:8545"
    ],
    "faucets": [],
    "infoURL": "https://hupayx.io"
    },
    {
    "name": "Webchain",
    "chainId": 24484,
    "shortName": "web",
    "networkId": 37129,
    "nativeCurrency": {
    "name": "Webchain Ether",
    "symbol": "WEB",
    "decimals": 18
    },
    "rpc": [
    "https://node1.webchain.network"
    ],
    "faucets": [],
    "infoURL": "https://webchain.network"
    },
    {
    "name": "MintMe.com Coin",
    "chainId": 24734,
    "shortName": "mintme",
    "networkId": 37480,
    "nativeCurrency": {
    "name": "MintMe.com Coin",
    "symbol": "MINTME",
    "decimals": 18
    },
    "rpc": [
    "https://node1.mintme.com"
    ],
    "faucets": [],
    "infoURL": "https://www.mintme.com"
    },
    {
    "name": "OasisChain Mainnet",
    "chainId": 26863,
    "shortName": "OAC",
    "networkId": 26863,
    "nativeCurrency": {
    "name": "OAC",
    "symbol": "OAC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc1.oasischain.io",
    "https://rpc2.oasischain.io",
    "https://rpc3.oasischain.io"
    ],
    "faucets": [
    "http://faucet.oasischain.io"
    ],
    "infoURL": "https://scan.oasischain.io"
    },
    {
    "name": "Piece testnet",
    "chainId": 30067,
    "shortName": "Piece",
    "networkId": 30067,
    "nativeCurrency": {
    "name": "ECE",
    "symbol": "ECE",
    "decimals": 18
    },
    "rpc": [
    "https://testnet-rpc0.piecenetwork.com"
    ],
    "faucets": [
    "https://piecenetwork.com/faucet"
    ],
    "infoURL": "https://piecenetwork.com"
    },
    {
    "name": "Ethersocial Network",
    "chainId": 31102,
    "shortName": "esn",
    "networkId": 1,
    "nativeCurrency": {
    "name": "Ethersocial Network Ether",
    "symbol": "ESN",
    "decimals": 18
    },
    "rpc": [
    "https://api.esn.gonspool.com"
    ],
    "faucets": [],
    "infoURL": "https://ethersocial.org"
    },
    {
    "name": "GoChain Testnet",
    "chainId": 31337,
    "shortName": "got",
    "networkId": 31337,
    "nativeCurrency": {
    "name": "GoChain Coin",
    "symbol": "GO",
    "decimals": 18
    },
    "rpc": [
    "https://testnet-rpc.gochain.io"
    ],
    "faucets": [],
    "infoURL": "https://gochain.io"
    },
    {
    "name": "Bitgert Mainnet",
    "chainId": 32520,
    "shortName": "Brise",
    "networkId": 32520,
    "nativeCurrency": {
    "name": "Bitrise Token",
    "symbol": "Brise",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-rpc.brisescan.com",
    "https://chainrpc.com",
    "https://serverrpc.com"
    ],
    "faucets": [],
    "infoURL": "https://bitgert.com/"
    },
    {
    "name": "Fusion Mainnet",
    "chainId": 32659,
    "shortName": "fsn",
    "networkId": 32659,
    "nativeCurrency": {
    "name": "Fusion",
    "symbol": "FSN",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.anyswap.exchange",
    "https://fsn.dev/api"
    ],
    "faucets": [],
    "infoURL": "https://www.fusion.org/"
    },
    {
    "name": "Energi Mainnet",
    "chainId": 39797,
    "shortName": "nrg",
    "networkId": 39797,
    "nativeCurrency": {
    "name": "Energi",
    "symbol": "NRG",
    "decimals": 18
    },
    "rpc": [
    "https://nodeapi.energi.network"
    ],
    "faucets": [],
    "infoURL": "https://www.energi.world/"
    },
    {
    "name": "pegglecoin",
    "chainId": 42069,
    "shortName": "PC",
    "networkId": 42069,
    "nativeCurrency": {
    "name": "pegglecoin",
    "symbol": "peggle",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [],
    "infoURL": "https://teampeggle.com"
    },
    {
    "name": "Arbitrum One",
    "chainId": 42161,
    "shortName": "arb1",
    "networkId": 42161,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://arbitrum-mainnet.infura.io/v3/\${INFURA_API_KEY}",
    "https://arb-mainnet.g.alchemy.com/v2/\${ALCHEMY_API_KEY}",
    "https://arb1.arbitrum.io/rpc"
    ],
    "faucets": [],
    "infoURL": "https://arbitrum.io"
    },
    {
    "name": "Celo Mainnet",
    "chainId": 42220,
    "shortName": "CELO",
    "networkId": 42220,
    "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
    },
    "rpc": [
    "https://forno.celo.org",
    "wss://forno.celo.org/ws"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://docs.celo.org/"
    },
    {
    "name": "Emerald Paratime Testnet",
    "chainId": 42261,
    "shortName": "emerald",
    "networkId": 42261,
    "nativeCurrency": {
    "name": "Emerald Rose",
    "symbol": "ROSE",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.emerald.oasis.dev/",
    "wss://testnet.emerald.oasis.dev/ws"
    ],
    "faucets": [],
    "infoURL": "https://docs.oasis.dev/general/developer-resources/overview"
    },
    {
    "name": "Emerald Paratime Mainnet",
    "chainId": 42262,
    "shortName": "oasis",
    "networkId": 42262,
    "nativeCurrency": {
    "name": "Emerald Rose",
    "symbol": "ROSE",
    "decimals": 18
    },
    "rpc": [
    "https://emerald.oasis.dev",
    "wss://emerald.oasis.dev/ws"
    ],
    "faucets": [],
    "infoURL": "https://docs.oasis.dev/general/developer-resources/overview"
    },
    {
    "name": "Athereum",
    "chainId": 43110,
    "shortName": "avaeth",
    "networkId": 43110,
    "nativeCurrency": {
    "name": "Athereum Ether",
    "symbol": "ATH",
    "decimals": 18
    },
    "rpc": [
    "https://ava.network:21015/ext/evm/rpc"
    ],
    "faucets": [
    "http://athfaucet.ava.network//?address=\${ADDRESS}"
    ],
    "infoURL": "https://athereum.ava.network"
    },
    {
    "name": "Avalanche Fuji Testnet",
    "chainId": 43113,
    "shortName": "Fuji",
    "networkId": 1,
    "nativeCurrency": {
    "name": "Avalanche",
    "symbol": "AVAX",
    "decimals": 18
    },
    "rpc": [
    "https://api.avax-test.network/ext/bc/C/rpc"
    ],
    "faucets": [
    "https://faucet.avax-test.network/"
    ],
    "infoURL": "https://cchain.explorer.avax-test.network"
    },
    {
    "name": "Avalanche C-Chain",
    "chainId": 43114,
    "shortName": "Avalanche",
    "networkId": 43114,
    "nativeCurrency": {
    "name": "Avalanche",
    "symbol": "AVAX",
    "decimals": 18
    },
    "rpc": [
    "https://api.avax.network/ext/bc/C/rpc"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://www.avax.network/"
    },
    {
    "name": "Celo Alfajores Testnet",
    "chainId": 44787,
    "shortName": "ALFA",
    "networkId": 44787,
    "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
    },
    "rpc": [
    "https://alfajores-forno.celo-testnet.org",
    "wss://alfajores-forno.celo-testnet.org/ws"
    ],
    "faucets": [
    "https://celo.org/developers/faucet",
    "https://cauldron.pretoriaresearchlab.io/alfajores-faucet"
    ],
    "infoURL": "https://docs.celo.org/"
    },
    {
    "name": "Autobahn Network",
    "chainId": 45000,
    "shortName": "Autobahn Network",
    "networkId": 45000,
    "nativeCurrency": {
    "name": "TXL",
    "symbol": "TXL",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.autobahn.network"
    ],
    "faucets": [],
    "infoURL": "https://autobahn.network"
    },
    {
    "name": "REI Network",
    "chainId": 47805,
    "shortName": "REI",
    "networkId": 47805,
    "nativeCurrency": {
    "name": "REI",
    "symbol": "REI",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.rei.network",
    "wss://rpc.rei.network"
    ],
    "faucets": [],
    "infoURL": "https://rei.network/"
    },
    {
    "name": "Energi Testnet",
    "chainId": 49797,
    "shortName": "tnrg",
    "networkId": 49797,
    "nativeCurrency": {
    "name": "Energi",
    "symbol": "NRG",
    "decimals": 18
    },
    "rpc": [
    "https://nodeapi.test.energi.network"
    ],
    "faucets": [],
    "infoURL": "https://www.energi.world/"
    },
    {
    "name": "DFK Chain",
    "chainId": 53935,
    "shortName": "DFK",
    "networkId": 53935,
    "nativeCurrency": {
    "name": "Jewel",
    "symbol": "JEWEL",
    "decimals": 18
    },
    "rpc": [
    "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
    ],
    "faucets": [],
    "infoURL": "https://defikingdoms.com"
    },
    {
    "name": "REI Chain Mainnet",
    "chainId": 55555,
    "shortName": "rei",
    "networkId": 55555,
    "nativeCurrency": {
    "name": "Rei",
    "symbol": "REI",
    "decimals": 18
    },
    "rpc": [
    "https://rei-rpc.moonrhythm.io"
    ],
    "faucets": [
    "http://kururu.finance/faucet?chainId=55555"
    ],
    "infoURL": "https://reichain.io"
    },
    {
    "name": "REI Chain Testnet",
    "chainId": 55556,
    "shortName": "trei",
    "networkId": 55556,
    "nativeCurrency": {
    "name": "tRei",
    "symbol": "tREI",
    "decimals": 18
    },
    "rpc": [
    "https://rei-testnet-rpc.moonrhythm.io"
    ],
    "faucets": [
    "http://kururu.finance/faucet?chainId=55556"
    ],
    "infoURL": "https://reichain.io"
    },
    {
    "name": "Thinkium Testnet Chain 0",
    "chainId": 60000,
    "shortName": "TKM-test0",
    "networkId": 60000,
    "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
    },
    "rpc": [
    "https://test.thinkiumrpc.net/"
    ],
    "faucets": [
    "https://www.thinkiumdev.net/faucet"
    ],
    "infoURL": "https://thinkium.net/"
    },
    {
    "name": "Thinkium Testnet Chain 1",
    "chainId": 60001,
    "shortName": "TKM-test1",
    "networkId": 60001,
    "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
    },
    "rpc": [
    "https://test1.thinkiumrpc.net/"
    ],
    "faucets": [
    "https://www.thinkiumdev.net/faucet"
    ],
    "infoURL": "https://thinkium.net/"
    },
    {
    "name": "Thinkium Testnet Chain 2",
    "chainId": 60002,
    "shortName": "TKM-test2",
    "networkId": 60002,
    "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
    },
    "rpc": [
    "https://test2.thinkiumrpc.net/"
    ],
    "faucets": [
    "https://www.thinkiumdev.net/faucet"
    ],
    "infoURL": "https://thinkium.net/"
    },
    {
    "name": "Thinkium Testnet Chain 103",
    "chainId": 60103,
    "shortName": "TKM-test103",
    "networkId": 60103,
    "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
    },
    "rpc": [
    "https://test103.thinkiumrpc.net/"
    ],
    "faucets": [
    "https://www.thinkiumdev.net/faucet"
    ],
    "infoURL": "https://thinkium.net/"
    },
    {
    "name": "Celo Baklava Testnet",
    "chainId": 62320,
    "shortName": "BKLV",
    "networkId": 62320,
    "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
    },
    "rpc": [
    "https://baklava-forno.celo-testnet.org"
    ],
    "faucets": [
    "https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform",
    "https://cauldron.pretoriaresearchlab.io/baklava-faucet"
    ],
    "infoURL": "https://docs.celo.org/"
    },
    {
    "name": "MultiVAC Mainnet",
    "chainId": 62621,
    "shortName": "mtv",
    "networkId": 62621,
    "nativeCurrency": {
    "name": "MultiVAC",
    "symbol": "MTV",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.mtv.ac",
    "https://rpc-eu.mtv.ac"
    ],
    "faucets": [],
    "infoURL": "https://mtv.ac"
    },
    {
    "name": "eCredits Mainnet",
    "chainId": 63000,
    "shortName": "ecs",
    "networkId": 63000,
    "nativeCurrency": {
    "name": "eCredits",
    "symbol": "ECS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.ecredits.com"
    ],
    "faucets": [],
    "infoURL": "https://ecredits.com"
    },
    {
    "name": "eCredits Testnet",
    "chainId": 63001,
    "shortName": "ecs-testnet",
    "networkId": 63001,
    "nativeCurrency": {
    "name": "eCredits",
    "symbol": "ECS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.tst.ecredits.com"
    ],
    "faucets": [
    "https://faucet.tst.ecredits.com"
    ],
    "infoURL": "https://ecredits.com"
    },
    {
    "name": "Condrieu",
    "chainId": 69420,
    "shortName": "cndr",
    "networkId": 69420,
    "nativeCurrency": {
    "name": "Condrieu Testnet Ether",
    "symbol": "CTE",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.condrieu.ethdevops.io:8545"
    ],
    "faucets": [
    "https://faucet.condrieu.ethdevops.io"
    ],
    "infoURL": "https://condrieu.ethdevops.io"
    },
    {
    "name": "Thinkium Mainnet Chain 0",
    "chainId": 70000,
    "shortName": "TKM0",
    "networkId": 70000,
    "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
    },
    "rpc": [
    "https://proxy.thinkiumrpc.net/"
    ],
    "faucets": [],
    "infoURL": "https://thinkium.net/"
    },
    {
    "name": "Thinkium Mainnet Chain 1",
    "chainId": 70001,
    "shortName": "TKM1",
    "networkId": 70001,
    "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
    },
    "rpc": [
    "https://proxy1.thinkiumrpc.net/"
    ],
    "faucets": [],
    "infoURL": "https://thinkium.net/"
    },
    {
    "name": "Thinkium Mainnet Chain 2",
    "chainId": 70002,
    "shortName": "TKM2",
    "networkId": 70002,
    "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
    },
    "rpc": [
    "https://proxy2.thinkiumrpc.net/"
    ],
    "faucets": [],
    "infoURL": "https://thinkium.net/"
    },
    {
    "name": "Thinkium Mainnet Chain 103",
    "chainId": 70103,
    "shortName": "TKM103",
    "networkId": 70103,
    "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
    },
    "rpc": [
    "https://proxy103.thinkiumrpc.net/"
    ],
    "faucets": [],
    "infoURL": "https://thinkium.net/"
    },
    {
    "name": "Polyjuice Testnet",
    "chainId": 71393,
    "shortName": "ckb",
    "networkId": 1,
    "nativeCurrency": {
    "name": "CKB",
    "symbol": "CKB",
    "decimals": 8
    },
    "rpc": [
    "https://godwoken-testnet-web3-rpc.ckbapp.dev",
    "ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws"
    ],
    "faucets": [
    "https://faucet.nervos.org/"
    ],
    "infoURL": "https://github.com/nervosnetwork/godwoken"
    },
    {
    "name": "Godwoken Testnet (V1.1)",
    "chainId": 71401,
    "shortName": "gw-testnet-v1",
    "networkId": 71401,
    "nativeCurrency": {
    "name": "CKB",
    "symbol": "CKB",
    "decimals": 18
    },
    "rpc": [
    "https://godwoken-testnet-v1.ckbapp.dev"
    ],
    "faucets": [
    "https://testnet.bridge.godwoken.io"
    ],
    "infoURL": "https://www.nervos.org"
    },
    {
    "name": "Godwoken Mainnet",
    "chainId": 71402,
    "shortName": "gw-mainnet-v1",
    "networkId": 71402,
    "nativeCurrency": {
    "name": "CKB",
    "symbol": "CKB",
    "decimals": 18
    },
    "rpc": [
    "https://godwoken-testnet-v1.ckbapp.dev"
    ],
    "faucets": [
    "https://testnet.bridge.godwoken.io"
    ],
    "infoURL": "https://www.nervos.org"
    },
    {
    "name": "Energy Web Volta Testnet",
    "chainId": 73799,
    "shortName": "vt",
    "networkId": 73799,
    "nativeCurrency": {
    "name": "Volta Token",
    "symbol": "VT",
    "decimals": 18
    },
    "rpc": [
    "https://volta-rpc.energyweb.org",
    "wss://volta-rpc.energyweb.org/ws"
    ],
    "faucets": [
    "https://voltafaucet.energyweb.org"
    ],
    "infoURL": "https://energyweb.org"
    },
    {
    "name": "Firenze test network",
    "chainId": 78110,
    "shortName": "firenze",
    "networkId": 78110,
    "nativeCurrency": {
    "name": "Firenze Ether",
    "symbol": "FIN",
    "decimals": 18
    },
    "rpc": [
    "https://ethnode.primusmoney.com/firenze"
    ],
    "faucets": [],
    "infoURL": "https://primusmoney.com"
    },
    {
    "name": "Mumbai",
    "chainId": 80001,
    "shortName": "maticmum",
    "networkId": 80001,
    "nativeCurrency": {
    "name": "MATIC",
    "symbol": "MATIC",
    "decimals": 18
    },
    "rpc": [
    "https://matic-mumbai.chainstacklabs.com",
    "https://rpc-mumbai.maticvigil.com",
    "https://matic-testnet-archive-rpc.bwarelabs.com"
    ],
    "faucets": [
    "https://faucet.polygon.technology/"
    ],
    "infoURL": "https://polygon.technology/"
    },
    {
    "name": "IVAR Chain Mainnet",
    "chainId": 88888,
    "shortName": "ivar",
    "networkId": 88888,
    "nativeCurrency": {
    "name": "Ivar",
    "symbol": "IVAR",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-rpc.ivarex.com"
    ],
    "faucets": [
    "https://faucet.ivarex.com/"
    ],
    "infoURL": "https://ivarex.com"
    },
    {
    "name": "UB Smart Chain(testnet)",
    "chainId": 99998,
    "shortName": "usctest",
    "networkId": 99998,
    "nativeCurrency": {
    "name": "UBC",
    "symbol": "UBC",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.rpc.uschain.network"
    ],
    "faucets": [],
    "infoURL": "https://www.ubchain.site"
    },
    {
    "name": "UB Smart Chain",
    "chainId": 99999,
    "shortName": "usc",
    "networkId": 99999,
    "nativeCurrency": {
    "name": "UBC",
    "symbol": "UBC",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.uschain.network"
    ],
    "faucets": [],
    "infoURL": "https://www.ubchain.site/"
    },
    {
    "name": "QuarkChain Mainnet Root",
    "chainId": 100000,
    "shortName": "qkc-r",
    "networkId": 100000,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "http://jrpc.mainnet.quarkchain.io:38391"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Mainnet Shard 0",
    "chainId": 100001,
    "shortName": "qkc-s0",
    "networkId": 100001,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-s0-ethapi.quarkchain.io",
    "http://eth-jrpc.mainnet.quarkchain.io:39000"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Mainnet Shard 1",
    "chainId": 100002,
    "shortName": "qkc-s1",
    "networkId": 100002,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-s1-ethapi.quarkchain.io",
    "http://eth-jrpc.mainnet.quarkchain.io:39001"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Mainnet Shard 2",
    "chainId": 100003,
    "shortName": "qkc-s2",
    "networkId": 100003,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-s2-ethapi.quarkchain.io",
    "http://eth-jrpc.mainnet.quarkchain.io:39002"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Mainnet Shard 3",
    "chainId": 100004,
    "shortName": "qkc-s3",
    "networkId": 100004,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-s3-ethapi.quarkchain.io",
    "http://eth-jrpc.mainnet.quarkchain.io:39003"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Mainnet Shard 4",
    "chainId": 100005,
    "shortName": "qkc-s4",
    "networkId": 100005,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-s4-ethapi.quarkchain.io",
    "http://eth-jrpc.mainnet.quarkchain.io:39004"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Mainnet Shard 5",
    "chainId": 100006,
    "shortName": "qkc-s5",
    "networkId": 100006,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-s5-ethapi.quarkchain.io",
    "http://eth-jrpc.mainnet.quarkchain.io:39005"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Mainnet Shard 6",
    "chainId": 100007,
    "shortName": "qkc-s6",
    "networkId": 100007,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-s6-ethapi.quarkchain.io",
    "http://eth-jrpc.mainnet.quarkchain.io:39006"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Mainnet Shard 7",
    "chainId": 100008,
    "shortName": "qkc-s7",
    "networkId": 100008,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-s7-ethapi.quarkchain.io",
    "http://eth-jrpc.mainnet.quarkchain.io:39007"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "Crystaleum",
    "chainId": 103090,
    "shortName": "CRFI",
    "networkId": 1,
    "nativeCurrency": {
    "name": "CRFI",
    "symbol": "◈",
    "decimals": 18
    },
    "rpc": [
    "https://evm.cryptocurrencydevs.org",
    "https://rpc.crystaleum.org"
    ],
    "faucets": [],
    "infoURL": "https://crystaleum.org"
    },
    {
    "name": "BROChain Mainnet",
    "chainId": 108801,
    "shortName": "bro",
    "networkId": 108801,
    "nativeCurrency": {
    "name": "Brother",
    "symbol": "BRO",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.brochain.org",
    "http://rpc.brochain.org",
    "https://rpc.brochain.org/mainnet",
    "http://rpc.brochain.org/mainnet"
    ],
    "faucets": [],
    "infoURL": "https://brochain.org"
    },
    {
    "name": "QuarkChain Devnet Root",
    "chainId": 110000,
    "shortName": "qkc-d-r",
    "networkId": 110000,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "http://jrpc.devnet.quarkchain.io:38391"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Devnet Shard 0",
    "chainId": 110001,
    "shortName": "qkc-d-s0",
    "networkId": 110001,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://devnet-s0-ethapi.quarkchain.io",
    "http://eth-jrpc.devnet.quarkchain.io:39900"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Devnet Shard 1",
    "chainId": 110002,
    "shortName": "qkc-d-s1",
    "networkId": 110002,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://devnet-s1-ethapi.quarkchain.io",
    "http://eth-jrpc.devnet.quarkchain.io:39901"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Devnet Shard 2",
    "chainId": 110003,
    "shortName": "qkc-d-s2",
    "networkId": 110003,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://devnet-s2-ethapi.quarkchain.io",
    "http://eth-jrpc.devnet.quarkchain.io:39902"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Devnet Shard 3",
    "chainId": 110004,
    "shortName": "qkc-d-s3",
    "networkId": 110004,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://devnet-s3-ethapi.quarkchain.io",
    "http://eth-jrpc.devnet.quarkchain.io:39903"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Devnet Shard 4",
    "chainId": 110005,
    "shortName": "qkc-d-s4",
    "networkId": 110005,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://devnet-s4-ethapi.quarkchain.io",
    "http://eth-jrpc.devnet.quarkchain.io:39904"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Devnet Shard 5",
    "chainId": 110006,
    "shortName": "qkc-d-s5",
    "networkId": 110006,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://devnet-s5-ethapi.quarkchain.io",
    "http://eth-jrpc.devnet.quarkchain.io:39905"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Devnet Shard 6",
    "chainId": 110007,
    "shortName": "qkc-d-s6",
    "networkId": 110007,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://devnet-s6-ethapi.quarkchain.io",
    "http://eth-jrpc.devnet.quarkchain.io:39906"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "QuarkChain Devnet Shard 7",
    "chainId": 110008,
    "shortName": "qkc-d-s7",
    "networkId": 110008,
    "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
    },
    "rpc": [
    "https://devnet-s7-ethapi.quarkchain.io",
    "http://eth-jrpc.devnet.quarkchain.io:39907"
    ],
    "faucets": [],
    "infoURL": "https://www.quarkchain.io"
    },
    {
    "name": "Milkomeda C1 Testnet",
    "chainId": 200101,
    "shortName": "milkTAda",
    "networkId": 200101,
    "nativeCurrency": {
    "name": "milkTAda",
    "symbol": "mTAda",
    "decimals": 18
    },
    "rpc": [
    "https://rpc-devnet-cardano-evm.c1.milkomeda.com",
    "wss://rpc-devnet-cardano-evm.c1.milkomeda.com"
    ],
    "faucets": [],
    "infoURL": "https://milkomeda.com"
    },
    {
    "name": "Akroma",
    "chainId": 200625,
    "shortName": "aka",
    "networkId": 200625,
    "nativeCurrency": {
    "name": "Akroma Ether",
    "symbol": "AKA",
    "decimals": 18
    },
    "rpc": [
    "https://remote.akroma.io"
    ],
    "faucets": [],
    "infoURL": "https://akroma.io"
    },
    {
    "name": "Alaya Mainnet",
    "chainId": 201018,
    "shortName": "alaya",
    "networkId": 1,
    "nativeCurrency": {
    "name": "ATP",
    "symbol": "atp",
    "decimals": 18
    },
    "rpc": [
    "https://openapi.alaya.network/rpc",
    "wss://openapi.alaya.network/ws"
    ],
    "faucets": [],
    "infoURL": "https://www.alaya.network/"
    },
    {
    "name": "Alaya Dev Testnet",
    "chainId": 201030,
    "shortName": "alayadev",
    "networkId": 1,
    "nativeCurrency": {
    "name": "ATP",
    "symbol": "atp",
    "decimals": 18
    },
    "rpc": [
    "https://devnetopenapi.alaya.network/rpc",
    "wss://devnetopenapi.alaya.network/ws"
    ],
    "faucets": [
    "https://faucet.alaya.network/faucet/?id=f93426c0887f11eb83b900163e06151c"
    ],
    "infoURL": "https://www.alaya.network/"
    },
    {
    "name": "PlatON Mainnet",
    "chainId": 210425,
    "shortName": "platon",
    "networkId": 1,
    "nativeCurrency": {
    "name": "LAT",
    "symbol": "lat",
    "decimals": 18
    },
    "rpc": [
    "https://openapi2.platon.network/rpc",
    "wss://openapi2.platon.network/ws"
    ],
    "faucets": [],
    "infoURL": "https://www.platon.network"
    },
    {
    "name": "Haymo Testnet",
    "chainId": 234666,
    "shortName": "hym",
    "networkId": 234666,
    "nativeCurrency": {
    "name": "HAYMO",
    "symbol": "HYM",
    "decimals": 18
    },
    "rpc": [
    "https://testnet1.haymo.network"
    ],
    "faucets": [],
    "infoURL": "https://haymoswap.web.app/"
    },
    {
    "name": "ARTIS sigma1",
    "chainId": 246529,
    "shortName": "ats",
    "networkId": 246529,
    "nativeCurrency": {
    "name": "ARTIS sigma1 Ether",
    "symbol": "ATS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.sigma1.artis.network"
    ],
    "faucets": [],
    "infoURL": "https://artis.eco"
    },
    {
    "name": "ARTIS Testnet tau1",
    "chainId": 246785,
    "shortName": "atstau",
    "networkId": 246785,
    "nativeCurrency": {
    "name": "ARTIS tau1 Ether",
    "symbol": "tATS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.tau1.artis.network"
    ],
    "faucets": [],
    "infoURL": "https://artis.network"
    },
    {
    "name": "Social Smart Chain Mainnet",
    "chainId": 281121,
    "shortName": "SoChain",
    "networkId": 281121,
    "nativeCurrency": {
    "name": "SoChain",
    "symbol": "$OC",
    "decimals": 18
    },
    "rpc": [
    "https://socialsmartchain.digitalnext.business"
    ],
    "faucets": [],
    "infoURL": "https://digitalnext.business/SocialSmartChain"
    },
    {
    "name": "Polis Testnet",
    "chainId": 333888,
    "shortName": "sparta",
    "networkId": 333888,
    "nativeCurrency": {
    "name": "tPolis",
    "symbol": "tPOLIS",
    "decimals": 18
    },
    "rpc": [
    "https://sparta-rpc.polis.tech"
    ],
    "faucets": [
    "https://faucet.polis.tech"
    ],
    "infoURL": "https://polis.tech"
    },
    {
    "name": "Polis Mainnet",
    "chainId": 333999,
    "shortName": "olympus",
    "networkId": 333999,
    "nativeCurrency": {
    "name": "Polis",
    "symbol": "POLIS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.polis.tech"
    ],
    "faucets": [
    "https://faucet.polis.tech"
    ],
    "infoURL": "https://polis.tech"
    },
    {
    "name": "Arbitrum Rinkeby",
    "chainId": 421611,
    "shortName": "arb-rinkeby",
    "networkId": 421611,
    "nativeCurrency": {
    "name": "Arbitrum Rinkeby Ether",
    "symbol": "ARETH",
    "decimals": 18
    },
    "rpc": [
    "https://rinkeby.arbitrum.io/rpc"
    ],
    "faucets": [
    "http://fauceth.komputing.org?chain=421611&address=\${ADDRESS}"
    ],
    "infoURL": "https://arbitrum.io"
    },
    {
    "name": "Dexalot Testnet",
    "chainId": 432201,
    "shortName": "Dexalot",
    "networkId": 432201,
    "nativeCurrency": {
    "name": "Dexalot",
    "symbol": "ALOT",
    "decimals": 18
    },
    "rpc": [
    "https://subnets.avax.network/dexalot/testnet/rpc"
    ],
    "faucets": [
    "https://sfaucet.dexalot-test.com"
    ],
    "infoURL": "https://dexalot.com"
    },
    {
    "name": "Weelink Testnet",
    "chainId": 444900,
    "shortName": "wlkt",
    "networkId": 444900,
    "nativeCurrency": {
    "name": "Weelink Chain Token",
    "symbol": "tWLK",
    "decimals": 18
    },
    "rpc": [
    "https://weelinknode1c.gw002.oneitfarm.com"
    ],
    "faucets": [
    "https://faucet.weelink.gw002.oneitfarm.com"
    ],
    "infoURL": "https://weelink.cloud"
    },
    {
    "name": "OpenChain Mainnet",
    "chainId": 474142,
    "shortName": "oc",
    "networkId": 474142,
    "nativeCurrency": {
    "name": "OpenCoin",
    "symbol": "OPC",
    "decimals": 10
    },
    "rpc": [
    "https://baas-rpc.luniverse.io:18545?lChainId=1641349324562974539"
    ],
    "faucets": [],
    "infoURL": "https://www.openchain.live"
    },
    {
    "name": "CMP-Testnet",
    "chainId": 512512,
    "shortName": "cmp",
    "networkId": 512512,
    "nativeCurrency": {
    "name": "Caduceus Testnet Token",
    "symbol": "CMP",
    "decimals": 18
    },
    "rpc": [
    "https://galaxy.block.caduceus.foundation",
    "wss://galaxy.block.caduceus.foundation"
    ],
    "faucets": [
    "https://dev.caduceus.foundation/testNetwork"
    ],
    "infoURL": "https://caduceus.foundation/"
    },
    {
    "name": "Vision - Vpioneer Test Chain",
    "chainId": 666666,
    "shortName": "vpioneer",
    "networkId": 666666,
    "nativeCurrency": {
    "name": "VS",
    "symbol": "VS",
    "decimals": 18
    },
    "rpc": [
    "https://vpioneer.infragrid.v.network/ethereum/compatible"
    ],
    "faucets": [
    "https://vpioneerfaucet.visionscan.org"
    ],
    "infoURL": "https://visionscan.org"
    },
    {
    "name": "Vision - Mainnet",
    "chainId": 888888,
    "shortName": "vision",
    "networkId": 888888,
    "nativeCurrency": {
    "name": "VS",
    "symbol": "VS",
    "decimals": 18
    },
    "rpc": [
    "https://infragrid.v.network/ethereum/compatible"
    ],
    "faucets": [],
    "infoURL": "https://www.v.network"
    },
    {
    "name": "Eluvio Content Fabric",
    "chainId": 955305,
    "shortName": "elv",
    "networkId": 955305,
    "nativeCurrency": {
    "name": "ELV",
    "symbol": "ELV",
    "decimals": 18
    },
    "rpc": [
    "https://host-76-74-28-226.contentfabric.io/eth/",
    "https://host-76-74-28-232.contentfabric.io/eth/",
    "https://host-76-74-29-2.contentfabric.io/eth/",
    "https://host-76-74-29-8.contentfabric.io/eth/",
    "https://host-76-74-29-34.contentfabric.io/eth/",
    "https://host-76-74-29-35.contentfabric.io/eth/",
    "https://host-154-14-211-98.contentfabric.io/eth/",
    "https://host-154-14-192-66.contentfabric.io/eth/",
    "https://host-60-240-133-202.contentfabric.io/eth/",
    "https://host-64-235-250-98.contentfabric.io/eth/"
    ],
    "faucets": [],
    "infoURL": "https://eluv.io"
    },
    {
    "name": "Etho Protocol",
    "chainId": 1313114,
    "shortName": "etho",
    "networkId": 1313114,
    "nativeCurrency": {
    "name": "Etho Protocol",
    "symbol": "ETHO",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.ethoprotocol.com"
    ],
    "faucets": [],
    "infoURL": "https://ethoprotocol.com"
    },
    {
    "name": "Xerom",
    "chainId": 1313500,
    "shortName": "xero",
    "networkId": 1313500,
    "nativeCurrency": {
    "name": "Xerom Ether",
    "symbol": "XERO",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.xerom.org"
    ],
    "faucets": [],
    "infoURL": "https://xerom.org"
    },
    {
    "name": "Kintsugi",
    "chainId": 1337702,
    "shortName": "kintsugi",
    "networkId": 1337702,
    "nativeCurrency": {
    "name": "kintsugi Ethere",
    "symbol": "kiETH",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.kintsugi.themerge.dev"
    ],
    "faucets": [
    "http://fauceth.komputing.org?chain=1337702&address=\${ADDRESS}",
    "https://faucet.kintsugi.themerge.dev"
    ],
    "infoURL": "https://kintsugi.themerge.dev/"
    },
    {
    "name": "Kiln",
    "chainId": 1337802,
    "shortName": "kiln",
    "networkId": 1337802,
    "nativeCurrency": {
    "name": "Testnet ETH",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.kiln.themerge.dev"
    ],
    "faucets": [
    "https://faucet.kiln.themerge.dev",
    "https://kiln-faucet.pk910.de",
    "https://kilnfaucet.com"
    ],
    "infoURL": "https://kiln.themerge.dev/"
    },
    {
    "name": "PlatON Dev Testnet",
    "chainId": 2203181,
    "shortName": "platondev",
    "networkId": 1,
    "nativeCurrency": {
    "name": "LAT",
    "symbol": "lat",
    "decimals": 18
    },
    "rpc": [
    "https://devnetopenapi2.platon.network/rpc",
    "wss://devnetopenapi2.platon.network/ws"
    ],
    "faucets": [
    "https://faucet.platon.network/faucet/?id=e5d32df10aee11ec911142010a667c03"
    ],
    "infoURL": "https://www.platon.network"
    },
    {
    "name": "PlatON Dev Testnet2",
    "chainId": 2206132,
    "shortName": "platondev2",
    "networkId": 1,
    "nativeCurrency": {
    "name": "LAT",
    "symbol": "lat",
    "decimals": 18
    },
    "rpc": [
    "https://devnet2openapi.platon.network/rpc",
    "wss://devnet2openapi.platon.network/ws"
    ],
    "faucets": [
    "https://devnet2faucet.platon.network/faucet"
    ],
    "infoURL": "https://www.platon.network"
    },
    {
    "name": "Musicoin",
    "chainId": 7762959,
    "shortName": "music",
    "networkId": 7762959,
    "nativeCurrency": {
    "name": "Musicoin",
    "symbol": "MUSIC",
    "decimals": 18
    },
    "rpc": [
    "https://mewapi.musicoin.tw"
    ],
    "faucets": [],
    "infoURL": "https://musicoin.tw"
    },
    {
    "name": "Sepolia",
    "chainId": 11155111,
    "shortName": "sep",
    "networkId": 11155111,
    "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "SEP",
    "decimals": 18
    },
    "rpc": [],
    "faucets": [
    "http://fauceth.komputing.org?chain=11155111&address=\${ADDRESS}"
    ],
    "infoURL": "https://sepolia.otterscan.io"
    },
    {
    "name": "PepChain Churchill",
    "chainId": 13371337,
    "shortName": "tpep",
    "networkId": 13371337,
    "nativeCurrency": {
    "name": "PepChain Churchill Ether",
    "symbol": "TPEP",
    "decimals": 18
    },
    "rpc": [
    "https://churchill-rpc.pepchain.io"
    ],
    "faucets": [],
    "infoURL": "https://pepchain.io"
    },
    {
    "name": "IOLite",
    "chainId": 18289463,
    "shortName": "ilt",
    "networkId": 18289463,
    "nativeCurrency": {
    "name": "IOLite Ether",
    "symbol": "ILT",
    "decimals": 18
    },
    "rpc": [
    "https://net.iolite.io"
    ],
    "faucets": [],
    "infoURL": "https://iolite.io"
    },
    {
    "name": "SmartMesh Mainnet",
    "chainId": 20180430,
    "shortName": "spectrum",
    "networkId": 1,
    "nativeCurrency": {
    "name": "SmartMesh Native Token",
    "symbol": "SMT",
    "decimals": 18
    },
    "rpc": [
    "https://jsonapi1.smartmesh.cn"
    ],
    "faucets": [],
    "infoURL": "https://smartmesh.io"
    },
    {
    "name": "quarkblockchain",
    "chainId": 20181205,
    "shortName": "qki",
    "networkId": 20181205,
    "nativeCurrency": {
    "name": "quarkblockchain Native Token",
    "symbol": "QKI",
    "decimals": 18
    },
    "rpc": [
    "https://hz.rpc.qkiscan.cn",
    "https://jp.rpc.qkiscan.io"
    ],
    "faucets": [],
    "infoURL": "https://quarkblockchain.org/"
    },
    {
    "name": "Auxilium Network Mainnet",
    "chainId": 28945486,
    "shortName": "auxi",
    "networkId": 28945486,
    "nativeCurrency": {
    "name": "Auxilium coin",
    "symbol": "AUX",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.auxilium.global"
    ],
    "faucets": [],
    "infoURL": "https://auxilium.global"
    },
    {
    "name": "Joys Digital Mainnet",
    "chainId": 35855456,
    "shortName": "JOYS",
    "networkId": 35855456,
    "nativeCurrency": {
    "name": "JOYS",
    "symbol": "JOYS",
    "decimals": 18
    },
    "rpc": [
    "https://node.joys.digital"
    ],
    "faucets": [],
    "infoURL": "https://joys.digital"
    },
    {
    "name": "Aquachain",
    "chainId": 61717561,
    "shortName": "aqua",
    "networkId": 61717561,
    "nativeCurrency": {
    "name": "Aquachain Ether",
    "symbol": "AQUA",
    "decimals": 18
    },
    "rpc": [
    "https://c.onical.org",
    "https://tx.aquacha.in/api"
    ],
    "faucets": [
    "https://aquacha.in/faucet"
    ],
    "infoURL": "https://aquachain.github.io"
    },
    {
    "name": "Joys Digital TestNet",
    "chainId": 99415706,
    "shortName": "TOYS",
    "networkId": 99415706,
    "nativeCurrency": {
    "name": "TOYS",
    "symbol": "TOYS",
    "decimals": 18
    },
    "rpc": [
    "https://toys.joys.cash/"
    ],
    "faucets": [
    "https://faucet.joys.digital/"
    ],
    "infoURL": "https://joys.digital"
    },
    {
    "name": "Gather Mainnet Network",
    "chainId": 192837465,
    "shortName": "GTH",
    "networkId": 192837465,
    "nativeCurrency": {
    "name": "Gather",
    "symbol": "GTH",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.gather.network"
    ],
    "faucets": [],
    "infoURL": "https://gather.network"
    },
    {
    "name": "Neon EVM DevNet",
    "chainId": 245022926,
    "shortName": "neonevm-devnet",
    "networkId": 245022926,
    "nativeCurrency": {
    "name": "Neon",
    "symbol": "NEON",
    "decimals": 18
    },
    "rpc": [
    "https://proxy.devnet.neonlabs.org/solana"
    ],
    "faucets": [
    "https://neonswap.live/#/get-tokens"
    ],
    "infoURL": "https://neon-labs.org"
    },
    {
    "name": "Neon EVM MainNet",
    "chainId": 245022934,
    "shortName": "neonevm-mainnet",
    "networkId": 245022934,
    "nativeCurrency": {
    "name": "Neon",
    "symbol": "NEON",
    "decimals": 18
    },
    "rpc": [
    "https://proxy.mainnet.neonlabs.org/solana"
    ],
    "faucets": [],
    "infoURL": "https://neon-labs.org"
    },
    {
    "name": "Neon EVM TestNet",
    "chainId": 245022940,
    "shortName": "neonevm-testnet",
    "networkId": 245022940,
    "nativeCurrency": {
    "name": "Neon",
    "symbol": "NEON",
    "decimals": 18
    },
    "rpc": [
    "https://proxy.testnet.neonlabs.org/solana"
    ],
    "faucets": [],
    "infoURL": "https://neon-labs.org"
    },
    {
    "name": "OneLedger Mainnet",
    "chainId": 311752642,
    "shortName": "oneledger",
    "networkId": 311752642,
    "nativeCurrency": {
    "name": "OLT",
    "symbol": "OLT",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet-rpc.oneledger.network"
    ],
    "faucets": [],
    "infoURL": "https://oneledger.io"
    },
    {
    "name": "Gather Testnet Network",
    "chainId": 356256156,
    "shortName": "tGTH",
    "networkId": 356256156,
    "nativeCurrency": {
    "name": "Gather",
    "symbol": "GTH",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.gather.network"
    ],
    "faucets": [],
    "infoURL": "https://gather.network"
    },
    {
    "name": "Gather Devnet Network",
    "chainId": 486217935,
    "shortName": "dGTH",
    "networkId": 486217935,
    "nativeCurrency": {
    "name": "Gather",
    "symbol": "GTH",
    "decimals": 18
    },
    "rpc": [
    "https://devnet.gather.network"
    ],
    "faucets": [],
    "infoURL": "https://gather.network"
    },
    {
    "name": "IPOS Network",
    "chainId": 1122334455,
    "shortName": "ipos",
    "networkId": 1122334455,
    "nativeCurrency": {
    "name": "IPOS Network Ether",
    "symbol": "IPOS",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.iposlab.com",
    "https://rpc2.iposlab.com"
    ],
    "faucets": [],
    "infoURL": "https://iposlab.com"
    },
    {
    "name": "Aurora Mainnet",
    "chainId": 1313161554,
    "shortName": "aurora",
    "networkId": 1313161554,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://mainnet.aurora.dev"
    ],
    "faucets": [],
    "infoURL": "https://aurora.dev"
    },
    {
    "name": "Aurora Testnet",
    "chainId": 1313161555,
    "shortName": "aurora-testnet",
    "networkId": 1313161555,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://testnet.aurora.dev/"
    ],
    "faucets": [],
    "infoURL": "https://aurora.dev"
    },
    {
    "name": "Aurora Betanet",
    "chainId": 1313161556,
    "shortName": "aurora-betanet",
    "networkId": 1313161556,
    "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
    },
    "rpc": [
    "https://betanet.aurora.dev/"
    ],
    "faucets": [],
    "infoURL": "https://aurora.dev"
    },
    {
    "name": "Harmony Mainnet Shard 0",
    "chainId": 1666600000,
    "shortName": "hmy-s0",
    "networkId": 1666600000,
    "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
    },
    "rpc": [
    "https://api.harmony.one",
    "https://api.s0.t.hmny.io"
    ],
    "faucets": [
    "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://www.harmony.one/"
    },
    {
    "name": "Harmony Mainnet Shard 1",
    "chainId": 1666600001,
    "shortName": "hmy-s1",
    "networkId": 1666600001,
    "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
    },
    "rpc": [
    "https://api.s1.t.hmny.io"
    ],
    "faucets": [],
    "infoURL": "https://www.harmony.one/"
    },
    {
    "name": "Harmony Mainnet Shard 2",
    "chainId": 1666600002,
    "shortName": "hmy-s2",
    "networkId": 1666600002,
    "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
    },
    "rpc": [
    "https://api.s2.t.hmny.io"
    ],
    "faucets": [],
    "infoURL": "https://www.harmony.one/"
    },
    {
    "name": "Harmony Mainnet Shard 3",
    "chainId": 1666600003,
    "shortName": "hmy-s3",
    "networkId": 1666600003,
    "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
    },
    "rpc": [
    "https://api.s3.t.hmny.io"
    ],
    "faucets": [],
    "infoURL": "https://www.harmony.one/"
    },
    {
    "name": "Harmony Testnet Shard 0",
    "chainId": 1666700000,
    "shortName": "hmy-b-s0",
    "networkId": 1666700000,
    "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
    },
    "rpc": [
    "https://api.s0.b.hmny.io"
    ],
    "faucets": [
    "https://faucet.pops.one"
    ],
    "infoURL": "https://www.harmony.one/"
    },
    {
    "name": "Harmony Testnet Shard 1",
    "chainId": 1666700001,
    "shortName": "hmy-b-s1",
    "networkId": 1666700001,
    "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
    },
    "rpc": [
    "https://api.s1.b.hmny.io"
    ],
    "faucets": [],
    "infoURL": "https://www.harmony.one/"
    },
    {
    "name": "Harmony Testnet Shard 2",
    "chainId": 1666700002,
    "shortName": "hmy-b-s2",
    "networkId": 1666700002,
    "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
    },
    "rpc": [
    "https://api.s2.b.hmny.io"
    ],
    "faucets": [],
    "infoURL": "https://www.harmony.one/"
    },
    {
    "name": "Harmony Testnet Shard 3",
    "chainId": 1666700003,
    "shortName": "hmy-b-s3",
    "networkId": 1666700003,
    "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
    },
    "rpc": [
    "https://api.s3.b.hmny.io"
    ],
    "faucets": [],
    "infoURL": "https://www.harmony.one/"
    },
    {
    "name": "DataHopper",
    "chainId": 2021121117,
    "shortName": "hop",
    "networkId": 2021121117,
    "nativeCurrency": {
    "name": "DataHoppers",
    "symbol": "HOP",
    "decimals": 18
    },
    "rpc": [
    "https://23.92.21.121:8545"
    ],
    "faucets": [],
    "infoURL": "https://www.DataHopper.com"
    },
    {
    "name": "Pirl",
    "chainId": 3125659152,
    "shortName": "pirl",
    "networkId": 3125659152,
    "nativeCurrency": {
    "name": "Pirl Ether",
    "symbol": "PIRL",
    "decimals": 18
    },
    "rpc": [
    "https://wallrpc.pirl.io"
    ],
    "faucets": [],
    "infoURL": "https://pirl.io"
    },
    {
    "name": "OneLedger Testnet Frankenstein",
    "chainId": 4216137055,
    "shortName": "frankenstein",
    "networkId": 4216137055,
    "nativeCurrency": {
    "name": "OLT",
    "symbol": "OLT",
    "decimals": 18
    },
    "rpc": [
    "https://frankenstein-rpc.oneledger.network"
    ],
    "faucets": [
    "https://frankenstein-faucet.oneledger.network"
    ],
    "infoURL": "https://oneledger.io"
    },
    {
    "name": "Palm Testnet",
    "chainId": 11297108099,
    "shortName": "tpalm",
    "networkId": 11297108099,
    "nativeCurrency": {
    "name": "PALM",
    "symbol": "PALM",
    "decimals": 18
    },
    "rpc": [
    "https://palm-testnet.infura.io/v3/\${INFURA_API_KEY}"
    ],
    "faucets": [],
    "infoURL": "https://palm.io"
    },
    {
    "name": "Palm",
    "chainId": 11297108109,
    "shortName": "palm",
    "networkId": 11297108109,
    "nativeCurrency": {
    "name": "PALM",
    "symbol": "PALM",
    "decimals": 18
    },
    "rpc": [
    "https://palm-mainnet.infura.io/v3/\${INFURA_API_KEY}"
    ],
    "faucets": [],
    "infoURL": "https://palm.io"
    },
    {
    "name": "Ntity Mainnet",
    "chainId": 197710212030,
    "shortName": "ntt",
    "networkId": 197710212030,
    "nativeCurrency": {
    "name": "Ntity",
    "symbol": "NTT",
    "decimals": 18
    },
    "rpc": [
    "https://rpc.ntity.io"
    ],
    "faucets": [],
    "infoURL": "https://ntity.io"
    },
    {
    "name": "Haradev Testnet",
    "chainId": 197710212031,
    "shortName": "ntt-haradev",
    "networkId": 197710212031,
    "nativeCurrency": {
    "name": "Ntity Haradev",
    "symbol": "NTTH",
    "decimals": 18
    },
    "rpc": [
    "https://blockchain.haradev.com"
    ],
    "faucets": [],
    "infoURL": "https://ntity.io"
    },
    {
    "name": "Molereum Network",
    "chainId": 6022140761023,
    "shortName": "mole",
    "networkId": 6022140761023,
    "nativeCurrency": {
    "name": "Molereum Ether",
    "symbol": "MOLE",
    "decimals": 18
    },
    "rpc": [
    "https://molereum.jdubedition.com"
    ],
    "faucets": [],
    "infoURL": "https://github.com/Jdubedition/molereum"
    },
    {
    "name": "Godwoken Testnet (V1)",
    "chainId": 868455272153094,
    "shortName": "gw-testnet-v1-deprecated",
    "networkId": 868455272153094,
    "nativeCurrency": {
    "name": "CKB",
    "symbol": "CKB",
    "decimals": 8
    },
    "rpc": [
    "https://godwoken-testnet-web3-v1-rpc.ckbapp.dev"
    ],
    "faucets": [
    "https://homura.github.io/light-godwoken"
    ],
    "infoURL": "https://www.nervos.org"
    }
    ]
`
);