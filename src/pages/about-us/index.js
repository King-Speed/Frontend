import Head from 'next/head'
import React from 'react'
import Header from "@/components/about/Header"
import Team from '@/components/about/Team'
import FooterAbout from '@/components/about/FooterAbout'

export default function index() {
    return (
        <>
            <Head>
                <title>KingSpeed | About Us</title>
            </Head>
            <Header />

            <main>
                <Team />
            </main>

            <FooterAbout />
        </>
    )
}
