import { useWeb3React } from '@web3-react/core'
import { Tooltip } from 'antd'
import { BSC_SCAN_URL } from 'constants'
import React from 'react'
import styles from './AccountDetail.module.scss'

const AccountDetail = () => {
    const { account, deactivate } = useWeb3React()

    const shortAccount = `${account.substr(0, 4)}...${account.substr(
        account.length - 4,
        account.length - 1
    )}`

    const disconnectAccount = () => {
        localStorage.setItem('disconnect', true)
        deactivate()
    }

    return (
        <div className={styles.accountInfo}>
            <div className={styles.detail}>
                <div className={styles.detailItem}>
                    <Tooltip placement="top" title="View Address on BscScan">
                        <a
                            href={`${BSC_SCAN_URL}${account}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <div className={styles.numberAccount}>{shortAccount}</div>
                        </a>
                    </Tooltip>
                </div>
                <div className={styles.detailItem} onClick={disconnectAccount}>
                    Disconnect
                </div>
            </div>
        </div>
    )
}

export default AccountDetail
