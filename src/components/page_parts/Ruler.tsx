import React from 'react'

interface RulerProps { }

const Ruler: React.FunctionComponent<RulerProps> = () => {
    return (
        <p className='my-5' style={{ fontFamily: 'sans-serif' }}>_________________________</p>
    )
}

export default Ruler