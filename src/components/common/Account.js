import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'
import styles from './Account.module.scss'
import Web3 from 'web3'
import Image from 'next/image'
import { notification, Tooltip } from 'antd'
import KingSpeedTokenContract from '../../contracts/KingSpeedStakingContract.json'
import AccountDetail from './AccountDetail'

const Account = () => {
    const [numberBalance, setNumberBalance] = useState('0 BNB')
    const [valueKSC, setValueKSC] = useState(0)

    const { account, chainId } = useWeb3React()

    const shortAccount = `${account.substr(0, 4)}...${account.substr(
        account.length - 4,
        account.length - 1
    )}`

    const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org:443'))

    const getTwoDecimal = (number) => {
        return parseFloat(number).toFixed(4)
    }

    async function getBalance() {
        try {
            const response = await web3.eth.getBalance(account)

            const numberBNB = `${getTwoDecimal(web3.utils.fromWei(response, 'ether'))} BNB`

            setNumberBalance(numberBNB)
        } catch (error) {
            notification.error({
                message: error.message,
            })
        }
    }

    async function getBalanceKSC() {
        try {
            const contract = new web3.eth.Contract(
                KingSpeedTokenContract.abi,
                process.env.NEXT_PUBLIC_KING_SPEED_CONTRACT
            )
            let amountKSC = await contract.methods.balanceOf(account).call()

            setValueKSC(
                `${Intl.NumberFormat().format(
                    getTwoDecimal(web3.utils.fromWei(amountKSC, 'ether'))
                )}`
            )
        } catch (error) {
            notification.error({
                message: error.message,
            })
        }
    }

    useEffect(() => {
        getBalance()
    }, [])

    useEffect(() => {
        if (account) {
            getBalanceKSC()
        }
    }, [account])

    return (
        <Tooltip
            placement="bottom"
            title={<AccountDetail />}
            overlayClassName="tooltip-account-detail"
        >
            <div className={styles.account}>
                <div className={styles.balance}>
                    <Image alt="balance" src="/icon-coin/token_ksc.svg" width={30} height={30} />
                    <span className={styles.amount}>{valueKSC}</span>
                </div>
                <div className={styles.balance}>
                    <Image alt="balance" src="/icon-coin/BNB.png" width={30} height={30} />
                    <span className={styles.amount}>{numberBalance}</span>
                </div>
                <div className={styles.address}>{shortAccount}</div>
            </div>
        </Tooltip>
    )
}

export default Account
