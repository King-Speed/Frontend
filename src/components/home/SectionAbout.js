import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import NavigationHome from '@/components/home/NavigationHome'

const SectionAbout = ({ fullpageApi }) => {
    return (
        <>
            <div className="section-about">
                <Row>
                    <Col xs={24} sm={0}>
                        <div className="mobile-bgr-2">
                            <img loading='lazy' src="/home/mobile/bgr_car_2.webp" alt="bgr car 2" />
                        </div>
                    </Col>
                </Row>

                <NavigationHome />

                <section className="section-about-wrapper">
                    <div className="box-content-wapper"></div>
                    <div className="box-content">
                        <div className="box-content__title">
                            NFT Car Racing
                            <br></br>
                            on <span className="highlight">Blockchain</span>
                        </div>
                        <p>
                            Kingspeed is a blockchain-based racing game which allow players to
                            collect rare virtual items including Cars, Drivers, Gears and Land
                            Tracks. Player can use their collectibles to join the race, compete and
                            earn rewards.
                        </p>

                        <div className="box-content__footer">
                            <div>Powered By</div>
                            <img loading='lazy' src="/logo/bsc.svg" alt="bsc logo" />
                        </div>
                    </div>
                </section>
            </div>

            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined className="ic-back-top" />}
            />
        </>
    )
}

export default SectionAbout
