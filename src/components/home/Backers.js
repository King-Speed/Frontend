import React from 'react'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import NavigationHome from '@/components/home/NavigationHome'
import BackerData from '__mocks__/BackerData'
import PartnerData from '__mocks__/PartnerData'
import styles from '@/components/home/Backers.module.scss'

const Backers = ({ fullpageApi }) => {
    return (
        <>
            <NavigationHome />

            <section className={styles.backer}>
                <h2 className={styles.backer__heading}>Backed By</h2>
                <div className="box-content">
                    <Row
                        gutter={[
                            { xs: 30, sm: 30, md: 30, lg: 40 },
                            { xs: 30, sm: 30, md: 30, lg: 30 },
                        ]}
                        align="middle"
                    >
                        {BackerData.map((backed) => {
                            return (
                                <Col xs={8} sm={8} md={6} lg={4} key={backed.id}>
                                    <a href={backed.url} target="_blank" rel="noreferrer noopener">
                                        <img
                                            loading='lazy'
                                            src={backed.image}
                                            className={styles[`${backed.className}`]}
                                            alt={backed.name}
                                        />
                                    </a>
                                </Col>
                            )
                        })}
                    </Row>
                </div>

                <div className={styles.sectionPartner}>
                    <h2 className={styles.backer__heading}>Partners</h2>
                    <div className="box-content">
                        <Row
                            gutter={[
                                { xs: 30, sm: 30, md: 30, lg: 40 },
                                { xs: 30, sm: 30, md: 30, lg: 30 },
                            ]}
                            align="middle"
                        >
                            {PartnerData.map((partner) => {
                                return (
                                    <Col xs={8} sm={8} md={6} lg={4} key={partner.id}>
                                        <a
                                            href={partner.url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <img
                                                src={partner.image}
                                                className={styles[`${partner.className}`]}
                                                alt={partner.name}
                                            />
                                        </a>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </section>

            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined className="ic-back-top" />}
            />
        </>
    )
}

export default Backers
