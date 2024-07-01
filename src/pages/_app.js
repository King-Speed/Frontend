import 'antd/dist/antd.css'
import Router, { useRouter } from 'next/router'
import AppLayout from 'layouts/AppLayout'
import { Web3ReactProvider } from "@web3-react/core"
import Web3 from "web3"
import "scss/main.scss"
import React, { useEffect } from 'react'
import MetamaskProvider from 'providers/MetamaskProvider'
import { notification } from 'antd'
import Fonts from '@/components/common/Fonts'
import FacebookPixel from '@/components/common/FacebookPixel'
import Head from 'next/head'

notification.config({
    placement: "bottomLeft",
    duration: 3,
});

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    const getLibrary = (provider) => {
        const library = new Web3(provider)
        library.pollingInterval = 15000

        return library
    }

    const handleRouteChange = (url) => {
        window.gtag('config', 'G-RYEHSLYTJ2', {
            page_path: url,
        });
    };

    // Initiate GTM
    useEffect(() => {
        Router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        };
    }, [router.events]);

    return (
        <>
            <Fonts />
            <Head>
                <FacebookPixel />
            </Head>

            <Web3ReactProvider getLibrary={getLibrary}>
                <MetamaskProvider>
                    <AppLayout>
                        <Component {...pageProps} />
                    </AppLayout>
                </MetamaskProvider>
            </Web3ReactProvider>
        </>
    )
}

export default MyApp
