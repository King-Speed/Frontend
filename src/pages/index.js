import React, { useState } from 'react'
import FooterHome from '@/components/home/FooterHome'
import ReactFullpage from '@fullpage/react-fullpage'
import Head from 'next/head'
import AboutTeam from '../components/home/AboutTeam'
import Backers from '../components/home/Backers'
import Feature from '../components/home/Feature'
import HowToEarn from '../components/home/HowToEarn'
import NFTCollection from '../components/home/NFTCollection'
import PlayToEarn from '../components/home/PlayToEarn'
import PlayVideo from '../components/home/PlayVideo'
import Roadmap from '../components/home/Roadmap'
import SectionAbout from '../components/home/SectionAbout'
import AppHeader from '../layouts/AppHeader'
import KSCFollow from '@/components/home/KSCFollow'
import LatestNews from '@/components/home/LatestNews'
import Notification from '@/components/home/Notification'

export default function Home() {
    const [isNotification, setIsNotification] = useState(true)

    return (
        <div className="home">
            <Head>
                <title>KingSpeed | Play To Earn</title>
            </Head>

            <ReactFullpage
                navigation
                scrollOverflow={true}
                responsiveWidth={1200}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section fp-auto-height-responsive">
                                <AppHeader />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <PlayVideo fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <SectionAbout fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <PlayToEarn fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <Feature fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <HowToEarn fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive hidden-mobile">
                                <KSCFollow fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <NFTCollection fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <Roadmap fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <LatestNews fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <AboutTeam fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <Backers fullpageApi={fullpageApi} />
                            </div>
                            <div className="section fp-auto-height-responsive">
                                <FooterHome fullpageApi={fullpageApi} />
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }}
            />

            {isNotification && (
                <Notification
                    isNotification={isNotification}
                    handleCancel={() => setIsNotification(false)}
                />
            )}
        </div>
    )
}
