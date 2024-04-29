import React, { useState } from 'react'

interface CatActiveProps { }

const CatActive: React.FunctionComponent<CatActiveProps> = () => {
    const [catImgSrc, setCatImgSrc] = useState<string>('/WS_Cat.svg');

    const handleMouseEnter = () => {
        setCatImgSrc('/WS_CatActive.svg')
    }
    const handleMouseLeave = () => {
        setCatImgSrc('/WS_Cat.svg')
    }

    return (
        <div className='m-0'>
            <img
                src={catImgSrc}
                alt="cat"
                className="home-cat-img mb-5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    )
}

export default CatActive