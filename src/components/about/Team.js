import { Col, Row, Carousel, Skeleton, Divider } from 'antd'
import React from 'react'
import teamData from '__mocks__/TeamData'
import CTO from './CTO'

const FOUNDING_TEAM_INDEX = 0

const Team = () => {
    return (
        <div className="section-team">
            <Carousel>
                {(teamData || []).map((team, index) => {
                    return (
                        <div key={index}>
                            <h2 className="heading-secondary">{team.nameTeam}</h2>
                            <Row gutter={[16, 16]}>
                                {(team.members || []).map((member) => {
                                    return (
                                        <Col
                                            xs={index === FOUNDING_TEAM_INDEX ? 24 : 12}
                                            md={index === FOUNDING_TEAM_INDEX ? 8 : 6}
                                            key={member.id}
                                        >
                                            <div className="team__item">
                                                {member.image ? (
                                                    <img
                                                        loading="lazy"
                                                        className="member"
                                                        src={member.image}
                                                        alt="member"
                                                    />
                                                ) : (
                                                    // <Skeleton.Avatar
                                                    //     active={true}
                                                    //     className="member"
                                                    //     style={{
                                                    //         right: '0',
                                                    //     }}
                                                    //     size="large"
                                                    //     shape="circle"
                                                    // />
                                                    <div className="member">
                                                        <CTO />
                                                    </div>
                                                )}

                                                <div className="team__item-name">
                                                    {member.name}

                                                    {member.social.linkedIn && (
                                                        <a
                                                            href={member.social.linkedIn}
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                        >
                                                            <img
                                                                src="./home/linkedin.png"
                                                                alt="linkedin team"
                                                            />
                                                        </a>
                                                    )}
                                                </div>
                                                <div className="team__item-position">
                                                    {member.position}
                                                </div>

                                                {member.description && (
                                                    <div className="team__item-info">
                                                        <div
                                                            className="team__item-description"
                                                            dangerouslySetInnerHTML={{
                                                                __html: member.description,
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Team
