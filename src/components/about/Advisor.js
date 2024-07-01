import { Row, Col } from "antd"
import React from 'react'

const Advisor = () => {
    return (
        <div className="section-team advisor">
            <h2 className="heading-secondary">
                The Advisors
            </h2>
            <Row gutter={[20, 30]}>
                <Col xs={24} md={8} xl={6}>
                    <div className="team__item">
                        <img className="member" src="./team/advisor-1.webp" alt="member" />
                        <div className="team__item-name">
                            Thi Truong
                        </div>
                        <div className="team__item-position">
                            Co-Founder and CEO of PolkaFoundry
                        </div>
                        <div className="team__item-info">
                            <div className="team__item-description">
                                Thi is the founder of Icetea Labs (icetea.io), PolkaFoundry (polkafoundry.com),
                                and Red Kite launchpad (redkite.polkafoundry.com).
                                Incubator of Faraland, Bunicorn, Swaperry, NFTify, Kaby Arena, StepHero and several other blockchain projects.
                                Advisor of Genesis Shards, PolkaRare, PolkaPlay, etc.
                            </div>
                            {/* <div className="team__item-social">
                                <Space size="large">
                                    <img src="./home/twitter_team.svg" alt="twitter team" />
                                    <img src="./home/telegram_team.svg" alt="twitter team" />
                                </Space>
                            </div> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Advisor
