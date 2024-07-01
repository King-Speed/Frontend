import React from 'react'
import { Col, Row } from 'antd'
import Link from 'next/link'
import {
    DISCORD_URL,
    MEDIUM_URL,
    TELEGRAM_URL,
    TOKENOMIC_URL,
    WHITE_PAPER,
    TWITTER_URL,
    FACEBOOK_URL,
    TIKTOK_URL,
} from 'constants/common'

const AppFooter = () => {
    return (
        <>
            <Row
                gutter={[
                    { xs: 10, sm: 12, md: 16, lg: 20 },
                    { xs: 10, sm: 12, md: 16, lg: 20 },
                ]}
            >
                <Col xs={24} lg={15}>
                    <div className="app-footer__logo">
                        <div className="copy-right">© 2022 KINGSPEED</div>
                        <div className="email-contact">contact@kingspeed.io</div>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                    <div className="app-footer__item">
                        <div className="app-footer__title">ABOUT</div>
                        <div className="app-footer__li">
                            <a href={WHITE_PAPER} target="_blank">
                                White Paper
                            </a>
                        </div>
                        <div className="app-footer__li">
                            <a href={TOKENOMIC_URL} target="_blank" rel="noreferrer noopener">
                                Tokenomics
                            </a>
                        </div>
                        <div className="app-footer__li">
                            <Link href="/about-us">About Us</Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                    <div className="app-footer__item">
                        <div className="app-footer__title">SOCIAL</div>
                        <div>
                            <a
                                className="app-footer__li"
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Telegram
                            </a>
                        </div>
                        <div>
                            <a
                                className="app-footer__li"
                                href={TWITTER_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Twitter
                            </a>
                        </div>
                        <div>
                            <a
                                className="app-footer__li"
                                href={DISCORD_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Discord
                            </a>
                        </div>
                        <div>
                            <a
                                className="app-footer__li"
                                href={MEDIUM_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Medium
                            </a>
                        </div>

                        <div>
                            <a
                                className="app-footer__li"
                                href={FACEBOOK_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Facebook
                            </a>
                        </div>
                        <div>
                            <a
                                className="app-footer__li"
                                href={TIKTOK_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Tiktok
                            </a>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                    <div className="app-footer__item">
                        <div className="app-footer__title">INFO</div>
                        <div className="app-footer__li">Disclaimer</div>
                        <div className="app-footer__li">Term And Conditions</div>
                        <div className="app-footer__li">Official Token</div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default AppFooter
