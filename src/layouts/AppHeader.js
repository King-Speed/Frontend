import React from 'react'
import { DoubleRightOutlined } from '@ant-design/icons'
import { PLAY_KING_SPEED_IO, KING_SPEED_LEADER_BOARD } from 'constants/common'
import Navigation from './Navigation'
import KSCTokenInfo from '@/components/common/KSCTokenInfo'

import Image from 'next/image'

const AppHeader = () => {
    return (
        <>
            <header className="header header-home">
                <Navigation />

                <div className="section-intro">
                    <div className="section-intro__item">
                        <div className="racing-game">RACING GAME</div>
                    </div>
                    <div className="section-intro__item">
                        <div className="section-intro__text-2">BUILD. RACE. EARN</div>
                    </div>
                    <div className="section-intro__item join-the-race">
                        <div className="play-game-btn">
                            <a href={PLAY_KING_SPEED_IO} target="_blank" rel="noreferrer noopener">
                                Join the Race{' '}
                                <DoubleRightOutlined className="ic-double-angle-bracket" />
                            </a>
                        </div>
                    </div>
                    <div className="section-intro__item leader-board-item">
                        <a href={KING_SPEED_LEADER_BOARD} target="_blank" rel="noreferrer noopener">
                            <div className="leader-board">Check the Leaderboard</div>
                        </a>
                    </div>
                </div>
            </header>

            <div
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translate(-50%, 0%)',
                    cursor: 'pointer',
                }}
            >
                <a
                    href="https://kingspeed-assets.s3.ap-southeast-1.amazonaws.com/kingspeed_prod_build8.apk"
                    download
                >
                    <Image src="/images/android.svg" width={200} height={100} />
                </a>
            </div>

            <KSCTokenInfo />
        </>
    )
}

export default AppHeader
