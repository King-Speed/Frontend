import React, { useState } from 'react'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'

export default function QuestionItem({ question, questions }) {
    const [openQuestion, setOpenQuestion] = useState(questions[0])

    const handleShowAnswer = (questionId) => {
        setOpenQuestion(questions.find((question) => question.id === questionId))
    }

    return (
        <div className="question-item" onClick={() => handleShowAnswer(question.id)}>
            <div className="question-name">
                <div className="question-name__title">{question.nameQuestion}</div>
                <div className="question-name__icon-open">
                    {openQuestion.id === question.id ? (
                        <CloseOutlined style={{ color: '#ffffff', fontSize: '20px' }} />
                    ) : (
                        <PlusOutlined style={{ color: '#ffffff', fontSize: '20px' }} />
                    )}
                </div>
            </div>

            {openQuestion.id === question.id && (
                <div
                    className="question-answer"
                    dangerouslySetInnerHTML={{
                        __html: question.answer,
                    }}
                />
            )}
        </div>
    )
}
