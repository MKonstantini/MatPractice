import { FunctionComponent } from "react"
import Ruler from "./page_parts/Ruler";
import Cat from "./page_parts/CatActive";

interface NotFoundProps { }

const NotFound: FunctionComponent<NotFoundProps> = () => {
    return (
        <div className='home-div'>
            <div>
                <Ruler />
                <h1 className='home-title mb-5'>Oops!</h1>
                <Cat />
                <h2 className='font2 mb-5'>Page Not Found.</h2>
                <Ruler />
            </div>
        </div>
    )
}

export default NotFound

