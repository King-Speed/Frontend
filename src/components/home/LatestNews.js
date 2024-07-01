import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button, Row, Col, Carousel } from 'antd'
import React from 'react'
import NavigationHome from '@/components/home/NavigationHome'
import LatestNewsData from '__mocks__/LatestNews'
import useWindowDimensions from 'hooks/useWindowDimensions'

export default function LatestNews({ fullpageApi }) {
    const { width } = useWindowDimensions()
    const isMobileScreen = width < 768

    return (
        <>
            <NavigationHome />
            <section className="nft-collection last-news">
                <div className="nft-collection__title">
                    LATEST <span className="highlight">NEWS</span>
                </div>

                <Row gutter={20} className="hidden-mobile">
                    {(LatestNewsData || []).map((article) => {
                        return (
                            <Col xs={24} lg={8} key={article.id}>
                                <div className="article">
                                    <img loading='lazy' src={article.image} />

                                    <div className="article-title">{article.name}</div>
                                    <div className="article-date">{article.date}</div>
                                    <div className="article-description">{article.description}</div>

                                    <a
                                        href={article.url}
                                        className="btn-sprited btn-sprited--outlined"
                                        target="_blank"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </Col>
                        )
                    })}
                </Row>

                {isMobileScreen && (
                    <Carousel>
                        {(LatestNewsData || []).map((article) => {
                            return (
                                <Col xs={24} key={article.id}>
                                    <div className="article">
                                        <img src={article.image} />

                                        <div className="article-title">{article.name}</div>
                                        <div className="article-date">{article.date}</div>
                                        <div className="article-description">
                                            {article.description}
                                        </div>

                                        <a
                                            href={article.url}
                                            className="btn-sprited btn-sprited--outlined"
                                            target="_blank"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </Col>
                            )
                        })}
                    </Carousel>
                )}

                <Button
                    onClick={() => fullpageApi.moveTo(1, 0)}
                    className="btn-back-top hidden-mobile"
                    icon={<VerticalAlignTopOutlined className="ic-back-top" />}
                />
            </section>
        </>
    )
}
