import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal } from 'antd';
import React from 'react';
import styles from "./Error.module.scss";

const internalStyles = {
    modalBackground: { backgroundColor: "rgb(20, 36, 51)", borderRadius: "1rem" }
}

const Error = ({ visible, onCancel }) => {

    return (
        <Modal
            title={null}
            visible={visible}
            onCancel={onCancel}
            centered={true}
            height={400}
            footer={null}
            wrapClassName="modal-common"
            closeIcon={<CloseOutlined className={styles.iconClose} />}
            bodyStyle={internalStyles.modalBackground}
        >
            <div className={styles.error}>
                <div className={styles.title}>
                    Error
                </div>
                <div className={styles.notification}>
                    Metamask is not installed
                </div>

                <Button onClick={onCancel} className={styles.btnClose}>
                    Close
                </Button>
            </div>
        </Modal>
    )
}

export default Error
