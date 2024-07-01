import { BackTop } from "antd"
import Head from "next/head"
import React from 'react'

const AppLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>KingSpeed | Game Play</title>
            </Head>
            <div>
                <main>{children}</main>
            </div>
            <BackTop />
        </>
    )
}

export default AppLayout
