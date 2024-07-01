import React from 'react'

export default function CTO() {
    return (
        <div className="halo">
            <div className="avatar">
                <span className="image">
                    {/* <img
                        src="/team/one_duck.png"
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '100%',
                        }}
                    /> */}
                    <span className="shine"></span>
                </span>
            </div>
            <div className="light spinning-rings">
                <div className="spinning logo">
                    <div className="rings">
                        <span className="tilt one">
                            <span className="ring one">
                                <span className="texture"></span>
                            </span>
                        </span>
                        <span className="tilt two">
                            <span className="ring two">
                                <span className="texture"></span>
                            </span>
                        </span>
                        <span className="tilt three">
                            <span className="ring three">
                                <span className="texture"></span>
                            </span>
                        </span>
                        <span className="tilt four">
                            <span className="ring four">
                                <span className="texture"></span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
