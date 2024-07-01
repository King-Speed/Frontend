import { Drawer } from 'antd'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MEDIUM_URL, TELEGRAM_URL, TWITTER_URL, STAKING_URL, MARKETPLACE_URL } from 'constants/common'

const NavigationMobile = ({ visible, onCancel }) => {
    return (
        <Drawer
            title="KingSpeed"
            placement="left"
            closable={true}
            bodyStyle={{
                background: "#1a1a1a"
            }}
            width="80%"
            onClose={onCancel}
            visible={visible}
        >
            <div className="category">
                <div className="category__item">
                    <a href={STAKING_URL} target="_blank">
                        <span className="navigation__white-paper">
                            Staking
                        </span>
                    </a>
                </div>
                <div className="category__item">
                    <a href={MARKETPLACE_URL} target="_blank">
                        <span className="navigation__white-paper">
                            Marketplace
                        </span>
                    </a>
                </div>
                <div className="category__item">
                    <a href={TELEGRAM_URL} target="_blank" rel="noreferrer noopener">
                        <Image src="/home/telegram.svg" alt="telegram" width="20" height="17" />
                    </a>
                </div>
                <div className="category__item">
                    <a href={TWITTER_URL} target="_blank" rel="noreferrer noopener">
                        <Image src="/home/twitter.svg" alt="twitter" width="20" height="17" />
                    </a>
                </div>
                <div className="category__item">
                    <a href={MEDIUM_URL} target="_blank" rel="noreferrer noopener">
                        <Image src="/home/medium.svg" alt="medium" width="20" height="17" />
                    </a>
                </div>

                <div className="connect-wallet">
                    <span>CONNECT WALLET</span>
                </div>
            </div>
        </Drawer>
    )
}

export default NavigationMobile
