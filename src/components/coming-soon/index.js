import React from 'react'
import styles from './coming.module.scss'

export default function index() {
    return (
        <div className={styles.comingSoon}>
            <img
                src="/background/bgr-comingsoon.webp" alt="coming soon"
            />
        </div>
    )
}
