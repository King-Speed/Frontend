import React, { useState } from 'react'
import FQAData from '__mocks__/FAQ'
import { Col, Row } from 'antd'
import QuestionItem from './QuestionItem'

const DEFAULT_GROUP = 1

export default function FQA() {
    const foundGroup = FQAData.find((group) => group.id === DEFAULT_GROUP)
    const [selectGroup, setSelectGroup] = useState(foundGroup)

    const handleSelectGroup = (groupId) => {
        setSelectGroup(FQAData.find((group) => group.id === groupId))
    }

    return (
        <div className="fqa">
            <div className="fqa-title">
                Have a <span className="fqa-highlight">Question?</span>
                <div className="txt-look-here">Look here</div>
            </div>
            <Row gutter={[20, 20]}>
                <Col xs={24} lg={6}>
                    {FQAData.map((fqa) => {
                        return (
                            <div
                                className={`group ${
                                    fqa.id === selectGroup.id ? 'active-group' : ''
                                }`}
                                key={fqa.id}
                                onClick={() => handleSelectGroup(fqa.id)}
                            >
                                <div className="group-name">{fqa.groupName}</div>
                            </div>
                        )
                    })}
                </Col>
                <Col xs={24} lg={18}>
                    {selectGroup.questions.map((question) => {
                        return (
                            <QuestionItem
                                question={question}
                                key={question.id}
                                selectGroup={selectGroup}
                                questions={selectGroup.questions}
                            />
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}
