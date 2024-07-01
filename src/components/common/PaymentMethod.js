import Error from '@/components/common/error/Error'
import styles from '@/components/common/PaymentMethod.module.scss'
import { CloseOutlined } from '@ant-design/icons'
import { useWeb3React } from '@web3-react/core'
import { Modal, notification } from 'antd'
import useInstalledMetaMask from 'hooks/useInstalledMetaMask'
import Image from 'next/image'
import React, { useState } from 'react'
import { injected } from 'utils/connectors'

const internalStyles = {
    modalBackground: { backgroundColor: 'rgb(20, 36, 51)', borderRadius: '1rem' },
}

const PaymentMethod = ({ visible, onCancel }) => {
    const [isError, setIsError] = useState(false)
    const { activate } = useWeb3React()
    const isConnected = useInstalledMetaMask()

    const connect = async () => {
        try {
            if (!isConnected) {
                setIsError(true)
                return
            }

            await activate(injected)

            localStorage.clear('disconnect')
            onCancel()
        } catch (error) {
            notification.error({
                message: error.message,
            })
        }
    }

    const HeaderPayment = () => {
        return (
            <div className={styles.headerPayment}>
                <div className={styles.messageHeader}>Payment Method</div>
            </div>
        )
    }

    return (
        <>
            <Modal
                title={null}
                visible={visible}
                onCancel={onCancel}
                centered={true}
                width={450}
                footer={null}
                wrapClassName="modal-common"
                closeIcon={<CloseOutlined className={styles.iconClose} />}
                bodyStyle={internalStyles.modalBackground}
            >
                <>
                    <HeaderPayment />

                    <div className={styles.paymentMethod}>
                        <div className={styles.paymentItem} onClick={connect}>
                            <div>
                                <Image
                                    src="/wallet/metamask.png"
                                    alt="metamask"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className={styles.namePayment}>MetaMask</div>
                        </div>
                    </div>
                </>
            </Modal>

            {isError && <Error visible={isError} onCancel={() => setIsError(!isError)} />}
        </>
    )
}

export default PaymentMethod
