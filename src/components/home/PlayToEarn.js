import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import NavigationHome from '@/components/home/NavigationHome'

const PlayToEarn = ({ fullpageApi }) => {
    return (
        <>
            <div className="play-to-earn">
                <Row>
                    <Col xs={24} sm={0}>
                        <div className="mobile-bgr-3">
                            <img loading='lazy' src="/home/mobile/bgr_car_3.webp" alt="bgr car 2" />
                        </div>
                    </Col>
                </Row>

                <NavigationHome />

                <div className="play-to-earn-wrapper">
                    <div className="box-content-wrapper"></div>
                    <div className="box-content">
                        <div className="box-content__title">
                            Free-to-Play
                            <br></br>
                            <span className="highlight">Play-to-Earn</span>
                        </div>
                        <p>
                            Our aim is to everyone to start playing the Kingspeed game without
                            having to pay a large amount of money to acquire NFTs at the beginning.
                            <br></br>
                            We give all users the ability to claim and use a simple & generic NFT
                            car with the same basic stats, although NFT cars that are more unique or
                            in special collections will have more advantages than the free, generic
                            NFT cars.
                        </p>
                    </div>
                </div>
            </div>

            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined className="ic-back-top" />}
            />
        </>
    )
}

export default PlayToEarn
