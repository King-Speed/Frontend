import { Carousel, Col, Row, Button } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import React from 'react'
import NavigationHome from '@/components/home/NavigationHome'
import featureData from '__mocks__/FeatureData'
import useWindowDimensions from 'hooks/useWindowDimensions'

const Feature = ({ fullpageApi }) => {
    const { width } = useWindowDimensions()
    const isMobileScreen = width < 768

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        speed: 0,
        swipeToSlide: true,
        slidesToScroll: 1,
        centerMode: true,
    }

    return (
        <>
            <NavigationHome />

            <section className="features">
                <h2 className="heading-secondary">FEATURES</h2>
                <div className="box-content">
                    <Row
                        gutter={[
                            { xs: 10, sm: 12, md: 16, lg: 30, xl: 50, xxl: 50 },
                            { xs: 10, sm: 12, md: 16, lg: 50, xl: 30, xxl: 50 },
                        ]}
                    >
                        {featureData.map((feature) => {
                            return (
                                <Col xs={12} xl={6} key={feature.id}>
                                    <div className="box-content__item">
                                        <img src={feature.image} alt={`img ${feature.id}`} />
                                        <div
                                            className="box-content__title"
                                            dangerouslySetInnerHTML={{ __html: feature.title }}
                                        ></div>
                                        <div className="box-content__description">
                                            {feature.description}
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>

                {isMobileScreen && (
                    <div className="box-content-mobile is-mobile">
                        <Carousel autoplay {...settings}>
                            {featureData.map((feature) => {
                                return (
                                    <div className="box-content__item" key={feature.id}>
                                        <img src={feature.image} alt={`img ${feature.id}`} />
                                        <div
                                            className="box-content__title"
                                            dangerouslySetInnerHTML={{ __html: feature.title }}
                                        ></div>
                                        <div className="box-content__description">
                                            {feature.description}
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                        ,
                    </div>
                )}
            </section>

            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined className="ic-back-top" />}
            />
        </>
    )
}

export default Feature
