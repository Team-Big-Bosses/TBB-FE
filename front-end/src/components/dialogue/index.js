import React, { useState } from 'react'
import Typist from 'react-typist'
import useEventListener from '@use-it/event-listener'

import './index.css'

function DialogueBox() {
    const [show, setShow] = useState(false)

    useEventListener('keydown', ({ code }) => {
        if (code === 'Enter') {
            return setShow(!show)
        }
    })

    return (
        <>
            {show ? <div
                className={'dialogue-container'}
                style={{
                    position: 'absolute',
                    zIndex: '1001',
                    height: '48px',
                    width: '100%',
                    top: '75%',
                    color: 'white',
                    fontSize: '0.4rem'
                }}
            >
                <div 
                    className="dialogue-box"
                    style={{
                        backgroundColor: 'rgba(49, 89, 145, 0.80)',
                        border: '1px solid #f5f2d0',
                        height: '100%',
                        width: '85%',
                        margin: '0 auto',
                        padding: '0.25rem'
                    }}
                >
                    <p>「Flask」</p>
                    <div
                        style={{
                            marginLeft: '0.25rem'
                        }}
                    >
                        <Typist
                            stdTypingDelay={0}
                            avgTypingDelay={25}
                            cursor={{ show: false }}
                        >
                            Flask has wares, if you have coin.
                        </Typist>
                    </div>
                </div>
            </div> : null}
        </>
    )
}

export default DialogueBox