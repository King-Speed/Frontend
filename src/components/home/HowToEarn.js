import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import dataHowToEarn from '__mocks__/HowToEarnData'
import NavigationHome from '@/components/home/NavigationHome'

const HowToEarn = ({ fullpageApi }) => {
    return (
        <>
            <NavigationHome />

            <div className="how-to-earn">
                <div className="how-to-earn__title">
                    How to <span className="highlight">earn?</span>
                </div>

                <Row
                    gutter={[
                        { xs: 12, md: 20, xl: 40 },
                        { xs: 12, md: 20, xl: 40 },
                    ]}
                >
                    {dataHowToEarn.map((step) => {
                        const { url } = step.image

                        return (
                            <Col xs={12} xl={12} key={step.id}>
                                <div className="how-to-earn__item">
                                    <img loading="lazy" src={url} alt={url} />
                                    <div className="item__title">{step.title}</div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>

            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined className="ic-back-top" />}
            />
        </>
    )
}

export default HowToEarn
