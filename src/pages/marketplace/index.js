import React from 'react'
import Head from 'next/head'
import Navigation from 'layouts/Navigation'
import ComingSoon from '@/components/coming-soon'
import AppFooter from 'layouts/AppFooter'

export default function index() {
    return (
        <>
            <Head>
                <title>KingSpeed | Market Place</title>
            </Head>

            <header className="header">
                <Navigation />
            </header>

            <ComingSoon />

            <div className="app-footer">
                <AppFooter />
            </div>
        </>
    )
}
