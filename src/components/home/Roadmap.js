import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import NavigationHome from '@/components/home/NavigationHome'

const Roadmap = ({ fullpageApi }) => {
    return (
        <>
            <NavigationHome />

            <section className="roadmap">
                <h2 className="heading-secondary u-center-text roadmap__heading">ROADMAP</h2>
                <Row>
                    <Col xs={12} xl={4} className="col-7-of-row">
                        <div className="roadmap__item roadmap__item-1">
                            <div className="roadmap__time">
                                <span className="dot"></span>
                                August 2021
                            </div>
                            <div className="height-40"></div>
                            <div className="roadmap__title">Phase 1</div>
                            <div className="roadmap__detail roadmap__detail-odd">
                                <p>Game design and art concept</p>
                                <p>Private Sale</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={4} className="col-7-of-row">
                        <div className="roadmap__item roadmap__item-2">
                            <div className="roadmap__detail">
                                <p>IDO </p>
                                <p>Community Build Up</p>
                            </div>
                            <div className="roadmap__title">Phase 2</div>
                            <div className="height-40"></div>
                            <div className="roadmap__time">
                                <span className="dot"></span>
                                November 2021
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={4} className="col-7-of-row">
                        <div className="roadmap__item roadmap__item-3">
                            <div className="roadmap__time">
                                <span className="dot"></span>
                                December 2021
                            </div>
                            <div className="height-40"></div>
                            <div className="roadmap__title">Phase 3</div>
                            <div className="roadmap__detail roadmap__detail-odd">
                                <p>NFT cars release</p>
                                <p>Staking platform</p>
                                <p>Metaverse research</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={4} className="col-7-of-row">
                        <div className="roadmap__item roadmap__item-4">
                            <div className="roadmap__detail">
                                <p>INO: 1000 lootboxes</p>
                                <p>3D Beta version: Time trial + PvE mode</p>
                                <p>Open lootbox system</p>
                                <p>Marketplace</p>
                                <p>Renting system</p>
                                <p>
                                    PvP auto mode:
                                    + 1 vs 1, multiplayer
                                    + Play to earn
                                </p>
                                <p>Prediction system</p>
                            </div>
                            <div className="roadmap__title">Phase 4</div>
                            <div className="height-40"></div>
                            <div className="roadmap__time">
                                <span className="dot"></span>
                                Q1 2022
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={4} className="col-7-of-row">
                        <div className="roadmap__item roadmap__item-5">
                            <div className="roadmap__time">
                                <span className="dot"></span>
                                Q2 2022
                            </div>
                            <div className="height-40"></div>
                            <div className="roadmap__title">Phase 5</div>
                            <div className="roadmap__detail roadmap__detail-odd">
                                <p>NFT characters release</p>
                                <p>Garage</p>
                                <p>Land NFT - Build Road Tracks</p>
                                <p>Mobile release</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={4} className="col-7-of-row">
                        <div className="roadmap__item roadmap__item-6">
                            <div className="roadmap__detail">
                                <p>PvP control mode</p>
                                <p>Kingspeed's Quests Aggregator</p>
                            </div>
                            <div className="roadmap__title">Phase 6</div>
                            <div className="height-40"></div>
                            <div className="roadmap__time">
                                <span className="dot"></span>
                                Q3 2022
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={4} className="col-7-of-row">
                        <div className="roadmap__item roadmap__item-7">
                            <div className="roadmap__time">
                                <span className="dot"></span>
                                Q4 2022
                            </div>
                            <div className="height-40"></div>
                            <div className="roadmap__title">
                                Phase 7
                            </div>
                            <div className="roadmap__detail roadmap__detail-odd">
                                <p>Road to Metaverse: AR/VR</p>
                                <p>Kingspeed DAO release</p>
                                <p>Organize global tournaments</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined className="ic-back-top" />}
            />
        </>
    )
}

export default Roadmap
