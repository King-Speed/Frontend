import React from 'react'
import { Row, Col } from 'antd'
import ReactPlayer from 'react-player'
const MAX_SCORE = 10

const NFTItem = ({ car }) => {
    const maxSpecification = MAX_SCORE

    return (
        <div className="nft__item">
            <Row gutter={[20, 20]}>
                <Col xs={0} md={12}>
                    <div className="description">{car.description}</div>
                    <div className={`properties property_${car.id}`}>
                        {(car.properties || []).map((item, index) => {
                            return (
                                <div className={`property__item ${item.className}`} key={index}>
                                    <img
                                        style={{
                                            width: item.icon.width,
                                            height: item.icon.height,
                                            marginRight: '2.5rem',
                                        }}
                                        src={item.icon.image}
                                        alt={car.name_car}
                                    />
                                    <div className="title">
                                        <div
                                            className="title__specification"
                                            style={{
                                                width: `${(
                                                    (item.value * 100) /
                                                    maxSpecification
                                                ).toFixed(2)}%`,
                                            }}
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="number">{item.value}</div>
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className="information-car">
                        {/* <div className="information-car__item">
                            <div
                                className="car-level"
                                style={{
                                    backgroundColor: car.color.background,
                                    color: car.color.text,
                                }}
                            >
                                {car.name_car}
                            </div>
                        </div> */}
                        <div className="information-car__item">
                            <div className="car-name"
                                style={{
                                    backgroundColor: car.color.background,
                                    color: car.color.text,
                                }}>{car.level_car}</div>
                        </div>
                        <div className="car-editions">{car.number_editions} editions</div>
                        <div className="car-image">
                            <ReactPlayer
                                url={car.video}
                                light={car.image}
                                playing
                                width="100%"
                                className="introduction-car"
                                controls
                            />
                        </div>
                    </div>
                </Col>

                <Col xs={24} md={0}>
                    <div className="description">{car.description}</div>
                    <div className={`properties property_${car.id}`}>
                        {(car.properties || []).map((item, index) => {
                            return (
                                <div className={`property__item ${item.className}`} key={index}>
                                    <img
                                        style={{
                                            width: item.icon.width,
                                            height: item.icon.height,
                                            marginRight: '2.5rem',
                                        }}
                                        src={item.icon.image}
                                        alt={car.name_car}
                                    />
                                    <div className="title">
                                        <div
                                            className="title__specification"
                                            style={{
                                                width: `${(
                                                    (item.value * 100) /
                                                    maxSpecification
                                                ).toFixed(2)}%`,
                                            }}
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="number">{item.value}</div>
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default NFTItem
