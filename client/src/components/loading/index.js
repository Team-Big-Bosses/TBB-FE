import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Typist from 'react-typist'

function Loading(props) {
    const [count, setCount] = useState(1)

    useEffect(() => {
        setCount(1)
    }, [count, props.loading])

    return (
        <>
            {props.loading ? (
                <div
                    className={'loading-container'}
                    style={{
                        position: 'absolute',
                        zIndex: '1001',
                        top: '0',
                        color: 'white',
                        fontSize: '0.5rem',
                        width: '100%'
                    }}
                >
                    <div 
                        className="loading-animation"
                        style={{
                            height: '100%',
                            width: '22.5%',
                            padding: '0.25rem'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ display: 'flex' }}>
                                Loadin
                                {count ? (
                                <Typist
                                    avgTypingDelay={250}
                                    stdTypingDelay={0}
                                    cursor={{ show: false }}
                                    onTypingDone={() => setCount(0)}
                                >
                                    g....
                                </Typist>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

function mapStateToProps(state) {
    return {
        ...state.map
    }
}

export default connect(mapStateToProps)(Loading)