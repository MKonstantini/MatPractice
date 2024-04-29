import { FunctionComponent } from "react"
import Ruler from "./page_parts/Ruler";
import CatActive from "./page_parts/CatActive";

interface NotFoundProps { }

const NotFound: FunctionComponent<NotFoundProps> = () => {
    return (
        <div className='home-div'>
            <div>
                <Ruler />
                <h1 className='home-title mb-5'>Oops!</h1>
                <CatActive />
                <p className='font2 mb-5'>Page Not Found.</p>
                <Ruler />
            </div>
        </div>
    )
}

export default NotFound

