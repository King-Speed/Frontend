import { Carousel } from 'antd'
import React from 'react'
import defaultNFTData from '__mocks__/NFTData'

const NFTCollectionMobile = ({ car, handleOnHover }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        speed: 0,
        swipeToSlide: false,
        swipe: false,
        pauseOnHover: false,
        prevArrow: false,
        nextArrow: false,
        slidesToScroll: 1,
    }

    const dataNFTMobile = [...defaultNFTData.slice(3), ...defaultNFTData.slice(0, 3)]

    return (
        <>
            <Carousel arrows {...settings}>
                {dataNFTMobile.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`nft-collection__item nft-collection__item-${item.id} ${
                                car.id === item.id && 'active'
                            }`}
                            onMouseEnter={() => handleOnHover(item.id)}
                        >
                            <img src={item.thumbnail} alt={item.name_car} />
                        </div>
                    )
                })}
            </Carousel>
        </>
    )
}

export default NFTCollectionMobile
