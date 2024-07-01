import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Space } from 'antd'
import Icon from '@ant-design/icons'
import { useWeb3React } from '@web3-react/core'
import { MEDIUM_SVG, TELEGRAM_SVG, TWITTER_SVG } from 'assets/svg/IconSVG'
import {
    MEDIUM_URL,
    TELEGRAM_URL,
    TWITTER_URL,
    STAKING_URL,
    MARKETPLACE_URL,
} from 'constants/common'
import NavigationMobile from '@/components/common/NavigationMobile'
import PaymentMethod from '@/components/common/PaymentMethod'
import Account from '@/components/common/Account'

export default function Navigation() {
    const router = useRouter()

    const [visible, setVisible] = useState(false)
    const [visibleWallet, setVisibleWallet] = useState(false)

    const TwitterIcon = (props) => <Icon component={TWITTER_SVG} {...props} />
    const TelegramIcon = (props) => <Icon component={TELEGRAM_SVG} {...props} />
    const MediumIcon = (props) => <Icon component={MEDIUM_SVG} {...props} />

    const { active: networkActive } = useWeb3React()

    return (
        <>
            <div className="header__logo-box">
                <Link href="/">
                    <img src="./logo.svg" alt="Logo" className="header__logo" />
                </Link>
            </div>
            <div className="icon-bar" onClick={() => setVisible(!visible)}>
                <Image alt="category" src="/icon-bar.svg" width={25} height={22} />
            </div>
            <div className="navigation">
                <div className="navigation-top">
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

                    <div className="path"></div>

                    <Link href="/questions">
                        <span
                            className={`navigation__white-paper ${
                                router.pathname == '/questions' ? 'active' : ''
                            }`}
                        >
                            FAQ
                        </span>
                    </Link>

                    <div className="path"></div>

                    <Space size="large" className="navigation-social">
                        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer noopener">
                            <TelegramIcon className="icon-telegram" style={{ color: '#FFFFFF' }} />
                        </a>
                        <a href={TWITTER_URL} target="_blank" rel="noreferrer noopener">
                            <TwitterIcon className="icon-twitter" style={{ color: '#FFFFFF' }} />
                        </a>
                        <a href={MEDIUM_URL} target="_blank" rel="noreferrer noopener">
                            <MediumIcon className="icon-medium" style={{ color: '#FFFFFF' }} />
                        </a>
                    </Space>
                </div>

                {networkActive ? (
                    <Account />
                ) : (
                    <div className="connect-wallet" onClick={() => setVisibleWallet(true)}>
                        <span>CONNECT WALLET</span>
                    </div>
                )}
            </div>

            {visibleWallet && (
                <PaymentMethod
                    visible={visibleWallet}
                    onCancel={() => setVisibleWallet(!visibleWallet)}
                />
            )}

            {visible && (
                <NavigationMobile visible={visible} onCancel={() => setVisible(!visible)} />
            )}
        </>
    )
}
