import { useWeb3React } from '@web3-react/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Account from '@/components/common/Account'
import PaymentMethod from '@/components/common/PaymentMethod'
import { STAKING_URL, MARKETPLACE_URL } from 'constants/common'

const NavigationHome = () => {
    const router = useRouter()

    const { active: networkActive } = useWeb3React()
    const [visibleWallet, setVisibleWallet] = useState(false)

    return (
        <>
            <div className="nav-home hidden-mobile">
                <div className="nav-home-wrap">
                    <div className="nav-home__logo-box">
                        <Link href="/">
                            <img src="./logo.svg" alt="Logo" className="header__logo" />
                        </Link>
                    </div>
                    <div className="navigation">
                        <a href={STAKING_URL} target="_blank">
                            <span
                                className={`navigation__white-paper ${
                                    router.pathname == '/staking' ? 'active' : ''
                                }`}
                            >
                                Staking
                            </span>
                        </a>
                        <div className="path"></div>
                        <a href={MARKETPLACE_URL} target="_blank">
                            <span
                                className={`navigation__white-paper ${
                                    router.pathname == '/market' ? 'active' : ''
                                }`}
                            >
                                Marketplace
                            </span>
                        </a>

                        {networkActive ? (
                            <Account />
                        ) : (
                            <div className="connect-wallet" onClick={() => setVisibleWallet(true)}>
                                <span>CONNECT WALLET</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {visibleWallet && (
                <PaymentMethod
                    visible={visibleWallet}
                    onCancel={() => setVisibleWallet(!visibleWallet)}
                />
            )}
        </>
    )
}

export default NavigationHome
