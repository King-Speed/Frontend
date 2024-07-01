import React from 'react'
import styles from './KSCTokenInfo.module.scss'
import { Space, Tooltip } from 'antd'
import { DEXT_TOOLS, PANCAKE_SWAP, COIN_GECKO } from 'constants/common'

export default function KSCTokenInfo() {
    const onCopyAddress = () => {
        navigator.clipboard.writeText('0x3ac0f8cecc1fb0ee6c2017a072d52e85b00c6694')
    }

    return (
        <div className={`${styles.kscInfo} hidden-mobile`}>
            <div className={styles.kscAddressOfficial}>
                Official token address: <span className={styles.kscAddress}>0x3ac0f8ce…0c6694</span>{' '}
                <Tooltip title="Click to copy" color="#00aed6">
                    <img
                        className={styles.copy}
                        src="/home/copy.svg"
                        alt="copy"
                        onClick={onCopyAddress}
                    />
                </Tooltip>
            </div>
            <div className={styles.kscList}>
                <div className={styles.mascot}>
                    <img src="/images/mascot.png" />
                </div>
                <Space size="large">
                    <a href={DEXT_TOOLS} target="_blank" rel="noreferrer noopener">
                        <img
                            className={styles.dextools}
                            src="/home/dextools.webp"
                            alt="dev-tools"
                        />
                    </a>
                    <a
                        href={PANCAKE_SWAP}
                        style={{ marginLeft: '1rem' }}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            className={styles.pancakeSwap}
                            src="/home/pancake_swap.webp"
                            alt="pancake_swap"
                        />
                    </a>
                    <a
                        href={COIN_GECKO}
                        style={{ marginLeft: '1rem' }}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            className={styles.coinGecko}
                            src="/home/coin_gecko.png"
                            alt="pancake_swap"
                        />

                        <span
                            style={{
                                marginLeft: '5px',
                                color: '#fff',
                                fontWeight: '700',
                                fontSize: '17px',
                            }}
                        >
                            CoinGecko
                        </span>
                    </a>
                </Space>
            </div>
        </div>
    )
}
