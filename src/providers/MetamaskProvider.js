import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import { injected } from 'utils/connectors'

const MetamaskProvider = ({ children }) => {
    const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React()

    let isDisconnect
    if (typeof window !== 'undefined') {
        isDisconnect = localStorage.getItem('disconnect')
    }

    useEffect(() => {
        if (!isDisconnect) {
            injected
                .isAuthorized()
                .then((isAuthorized) => {
                    if (isAuthorized && !networkActive && !networkError) {
                        activateNetwork(injected)
                    }
                })
                .catch(() => {})
        }
    }, [activateNetwork, networkActive, networkError])

    return children
}

export default MetamaskProvider
