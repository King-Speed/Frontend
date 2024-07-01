import React from 'react'
import { Button, Col, Row } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import AppFooter from 'layouts/AppFooter'
import NavigationHome from './NavigationHome'

export default function FooterHome({ fullpageApi }) {
    return (
        <>
            <NavigationHome />

            <div className="app-footer">
                <Row>
                    <Col xs={24} lg={0}>
                        <div className="divide"></div>
                    </Col>
                </Row>

                <AppFooter />
            </div>

            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined />}
            />
        </>
    )
}
