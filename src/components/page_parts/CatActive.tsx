import React, { useState } from 'react'

interface CatProps { }

const Cat: React.FunctionComponent<CatProps> = () => {
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
                className="cat-img mb-5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    )
}

export default Cat