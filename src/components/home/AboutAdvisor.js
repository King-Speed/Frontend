import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import Advisor from "../about/Advisor"
import NavigationHome from './NavigationHome'

const AboutAdvisor = ({ fullpageApi }) => {
    return (
        <>
            <Row>
                <Col xs={0} xl={24}>
                    <NavigationHome />
                </Col>
                <div className="about-advisor">
                    <Advisor />
                </div>
            </Row>
            <Row>
                <Col xs={0} xl={24}>
                    <Button
                        onClick={() => fullpageApi.moveTo(1, 0)}
                        className="btn-back-top"
                        icon={<VerticalAlignTopOutlined className="ic-back-top" />}
                    />
                </Col>
            </Row>
        </>
    )
}

export default AboutAdvisor
