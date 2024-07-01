import { useEffect, useState } from "react"
import Web3 from "web3"

export default function useInstalledMetaMask() {
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        const checkConnection = async () => {
            // Check if browser is running Metamask
            let web3;
            if (window.web3) {
                web3 = new Web3(window.web3.currentProvider)

                // Check if User is already connected by retrieving the accounts
                web3.eth.getAccounts()
                    .then(async (addr) => {
                        // Set User account into state
                        console.log(addr)
                    });

                setIsConnected(true)
            } else {
                setIsConnected(false)
            }
        }

        checkConnection()
    }, []);

    return isConnected
}