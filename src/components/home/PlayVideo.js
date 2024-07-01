import { Button, Col, Row } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import NavigationHome from '@/components/home/NavigationHome'
import styles from '@/components/home/PlayVideo.module.scss'
import { YOUTUBE_URL } from 'constants'
import useWindowDimensions from 'hooks/useWindowDimensions'
import ReactPlayer from 'react-player/youtube'

const PlayVideo = ({ fullpageApi }) => {
    const [isPlay, setIsPlay] = useState(false)

    const { width } = useWindowDimensions()
    const isMobileScreen = width < 768

    const playVideo = () => {
        setIsPlay(true)
    }

    const VideoFrame = () => {
        return (
            <div className={styles.displayVideo}>
                <ReactPlayer
                    playing={isPlay}
                    width="100%"
                    height="100%"
                    className="introduction-video"
                    url={YOUTUBE_URL}
                />
            </div>
        )
    }

    const VideoInformation = () => {
        return (
            <div className={`${styles.information} ${styles.informationMobile}`}>
                <div className={styles.title}>
                    A NEW ERA <span className={styles.hightLight}>OF RACING</span>
                </div>
                <div className={styles.description}>
                    As the weather becomes more severe in the future with extreme phenomena like
                    earthquakes, tsunamis, volcanic eruptions occurring frequently - race
                    tournaments are held to find the best and most fuel-efficient cars that can
                    withstand different weathers and terrains.
                </div>

                <div onClick={playVideo}>
                    <div className={styles.btnWatch}>Watch video</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <NavigationHome />
            <div className={styles.playVideo}>
                {isMobileScreen ? (
                    <Row
                        gutter={[
                            { xs: 12, md: 16, xl: 100 },
                            { xs: 50, md: 16, xl: 100 },
                        ]}
                    >
                        <Col xs={24} md={12}>
                            <VideoFrame />
                        </Col>
                        <Col xs={24} md={12}>
                            <VideoInformation />
                        </Col>
                    </Row>
                ) : (
                    <Row
                        gutter={[
                            { xs: 12, md: 16, xl: 100 },
                            { xs: 50, md: 16, xl: 100 },
                        ]}
                    >
                        <Col xs={24} md={12}>
                            <VideoInformation />
                        </Col>
                        <Col xs={24} md={12}>
                            <VideoFrame />
                        </Col>
                    </Row>
                )}
            </div>
            <div>
                <Button
                    onClick={() => fullpageApi.moveTo(1, 0)}
                    className="btn-back-top hidden-mobile"
                    icon={<VerticalAlignTopOutlined className="ic-back-top" />}
                />
            </div>
        </>
    )
}

export default PlayVideo
