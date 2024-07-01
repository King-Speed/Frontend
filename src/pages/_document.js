import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/logo.svg" />
                    <meta
                        name="facebook-domain-verification"
                        content="3e4iz6ptuyhse52puq9697915j7yw5"
                    />
                    <meta
                        name="description"
                        content="KingSpeed - Virtual NFT Car Racing Universe! 
                                 KingSpeed is a complete NFT car racing ecosystem where you can FREE to participate in car races, build your own NFT land track , and make a profit while playing it."
                    />
                    <meta itemProp="name" content="Welcome to KingSpeed" />
                    <meta
                        itemProp="description"
                        content="KingSpeed - Virtual NFT Car Racing Universe! 
                                 KingSpeed is a complete NFT car racing ecosystem where you can FREE to participate in car races, build your own NFT land track , and make a profit while playing it"
                    />
                    <meta itemProp="image" content="/kingspeed.png" />
                    <meta property="og:url" content="https://kingspeed.io" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Welcome to KingSpeed" />
                    <meta
                        property="og:description"
                        content="KingSpeed - Virtual NFT Car Racing Universe! 
                                 KingSpeed is a complete NFT car racing ecosystem where you can FREE to participate in car races, build your own NFT land track , and make a profit while playing it"
                    />
                    <meta property="og:image" content="/kingspeed.png" />
                    <meta name="twitter:title" content="Welcome to KingSpeed" />
                    <meta
                        name="twitter:description"
                        content="KingSpeed - Virtual NFT Car Racing Universe! 
                                 KingSpeed is a complete NFT car racing ecosystem where you can FREE to participate in car races, build your own NFT land track , and make a profit while playing it"
                    />
                    <meta
                        name="twitter:image"
                        content="https://s3.ap-southeast-1.amazonaws.com/kingspeed.storage/kingspeed.png"
                    />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RYEHSLYTJ2"></script>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                               window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-RYEHSLYTJ2');
                                `,
                        }}
                    />
                </Head>

                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBJDWPC"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
