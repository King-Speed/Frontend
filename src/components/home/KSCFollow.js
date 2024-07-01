import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import NavigationHome from '@/components/home/NavigationHome'

export default function KSCFollow({ fullpageApi }) {
    return (
        <>
            <NavigationHome />
            <section className="nft-collection">
                <div className="nft-collection__title">
                    KSC TOKEN <span className="highlight">FOLLOW</span>
                </div>

                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: '1200px',
                    }}
                >
                    <img loading="lazy" src="/background/bg_ksc_follow.svg" />
                </div>

                <Button
                    onClick={() => fullpageApi.moveTo(1, 0)}
                    className="btn-back-top hidden-mobile"
                    icon={<VerticalAlignTopOutlined className="ic-back-top" />}
                />
            </section>
        </>
    )
}
