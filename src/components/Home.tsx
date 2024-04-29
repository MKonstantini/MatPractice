import { FunctionComponent } from "react"
import Ruler from "./page_parts/Ruler";
import CatActive from "./page_parts/CatActive";

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div className='home-div'>
            <div>
                <Ruler />
                <h1 className='mb-5'>White Space</h1>
                <CatActive />
                <p className='mb-5'>An Abstract Place For Small Projects.</p>
                <Ruler />
            </div>
        </div>
    )
}

export default Home

