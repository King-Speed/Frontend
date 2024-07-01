import React from 'react'
import Navigation from 'layouts/Navigation'

const Header = () => {
    return (
        <>
            <header className="header header-about">
                <Navigation />

                <div className="about-us">
                    <div className="about-us__title">
                        About Us
                    </div>
                    <div className="about-us__description">
                        We are a group of experienced blockchain developers, game developers, artists and
                        cryptocurrency investors that understand the full potential of blockchain gaming as a place
                        where people can both enjoy games and earn at the same time. We work hard to bring enjoinable
                        games to people all over the world, and reward people for being a part of our games!
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
