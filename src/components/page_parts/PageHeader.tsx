import React from 'react'
import Ruler from './Ruler'

interface PageHeaderProps {
    title: string,
    catImgSource: string
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title, catImgSource }) => {
    return (
        <div className='text-center'>
            <Ruler />
            <div className='d-flex flex-column align-items-center'>
                <h1 className='m-0'>{title}</h1>
                <img src={catImgSource} alt="Cat Logo" className='cat-stardard-size mt-5' />
            </div>
            <Ruler />
        </div>
    )
}

export default PageHeader