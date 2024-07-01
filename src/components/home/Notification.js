import { Modal } from 'antd'
import Image from 'next/image'
import React from 'react'

export default function Notification({ isNotification, handleCancel }) {
    return (
        <Modal
            title={null}
            centered
            footer={null}
            visible={isNotification}
            onCancel={handleCancel}
            bodyStyle={{ aspectRatio: '2/1.1' }}
            width="800px"
            style={{
                borderRadius: '10px',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                }}
            >
                <a href="https://www.nftciti.io/laeeb" target="_blank">
                    <Image
                        src="/images/notification.png"
                        layout="fill"
                        style={{ objectFit: 'cover', borderRadius: '10px' }}
                    />
                </a>
            </div>
        </Modal>
    )
}
