import React, { useState } from 'react'

interface CatActiveProps { }

const CatActive: React.FunctionComponent<CatActiveProps> = () => {
    const [catImgSrc, setCatImgSrc] = useState<string>('/WS_Cat.svg');

    return (
        <div className='m-0'>
            <img
                src={catImgSrc}
                alt="cat"
                className="home-cat-img mb-5"
                onMouseEnter={() => { setCatImgSrc('WS_CatActive.svg') }}
                onMouseLeave={() => { setCatImgSrc('WS_Cat.svg') }}
            />
        </div>
    )
}

export default CatActive