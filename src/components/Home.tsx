import React, { FunctionComponent, useState } from "react"

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
    const [catImgSrc, setCatImgSrc] = useState<string>('/WS_Cat.svg');

    const handleMouseEnter = () => {
        setCatImgSrc('/WS_CatActive.svg')
    }
    const handleMouseLeave = () => {
        setCatImgSrc('/WS_Cat.svg')
    }

    return (
        <div className='home-div'>
            <div>
                <p className='mb-5'>_________________________</p>
                <h1 className='home-title mb-5'>White Space</h1>
                <img
                    src={catImgSrc}
                    alt="cat"
                    className="cat-img mb-5"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <h2 className='font2 mb-5'>An Abstract Place For Small Projects</h2>
                <p>_________________________</p>
            </div>
        </div>
    )
}

export default Home

