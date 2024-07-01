import { VerticalAlignTopOutlined } from '@ant-design/icons'
import NavigationHome from './NavigationHome'
import { Button } from 'antd'
import defaultNFTData from '__mocks__/NFTData'
import React, { useState } from 'react'
import NFTItem from '@/components/home/NFTItem'
import NFTCollectionMobile from '@/components/home/NFTCollectionMobile'
import useWindowDimensions from 'hooks/useWindowDimensions'

const DEFAULT_ID_CAR = 3

const NFTCollection = ({ fullpageApi }) => {
    const defaultCar = (defaultNFTData || []).filter((car) => car.id === DEFAULT_ID_CAR)
    const [car, setCar] = useState(defaultCar[0])

    const { width } = useWindowDimensions()
    const isMobileScreen = width < 768

    const handleOnHover = (carId) => {
        if (carId === 3 || carId === 4) {
            const foundCar = defaultNFTData.find((car) => car.id === carId)
            setCar(foundCar)
        }
    }

    return (
        <>
            <NavigationHome />

            <div className="nft-collection">
                <div className="nft-collection__title">
                    NFT CAR <span className="highlight">COLLECTIONS</span>
                </div>

                {isMobileScreen ? (
                    <div className="nft-collection__list nft-collection__mobile">
                        <NFTCollectionMobile car={car} handleOnHover={handleOnHover} />
                    </div>
                ) : (
                    <>
                        <div className="nft-collection__list nft-collection__desktop">
                            {defaultNFTData.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className={`nft-collection__item nft-collection__item-${item.id
                                            } ${car.id === item.id && 'active'}`}
                                        onMouseEnter={() => handleOnHover(item.id)}
                                    >
                                        <img loading='lazy' src={item.thumbnail} alt={item.name_car} />
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}

                <div className={`divide divide_${car.id}`}></div>

                <div className="information">
                    <NFTItem car={car} />
                </div>
            </div>

            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined className="ic-back-top" />}
            />
        </>
    )
}

export default NFTCollection
