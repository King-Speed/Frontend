import { InjectedConnector } from '@web3-react/injected-connector'

//https://stackoverflow.com/questions/68345619/how-to-keep-metamask-connection-to-the-ui-persistent-with-web3-react
export const injected = new InjectedConnector({
    supportedNetworks: [
        1, // 1 : Mainet
        3, // 2:Ropsten
        4, // 3: Rinkeby
        5, // 4:Goerli
        42, // 5:Kovan
        56, // BNB Mainnet
        97, // BNB Testnet
    ],
})
