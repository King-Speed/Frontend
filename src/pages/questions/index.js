import Head from 'next/head'
import React from 'react'
import FQA from '@/components/faq/FQA'
import Header from '@/components/faq/Header'
import AppFooter from 'layouts/AppFooter'

export default function index() {
    return (
        <>
            <Head>
                <title>KingSpeed | FAQ</title>
            </Head>

            <Header />

            <FQA />

            <div className="app-footer">
                <AppFooter />
            </div>
        </>
    )
}
