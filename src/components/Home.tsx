import { FunctionComponent } from "react"
import Ruler from "./page_parts/Ruler";
import Cat from "./page_parts/CatActive";

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div className='home-div'>
            <div>
                <Ruler />
                <h1 className='home-title mb-5'>White Space</h1>
                <Cat />
                <h2 className='font2 mb-5'>An Abstract Place For Small Projects</h2>
                <Ruler />
            </div>
        </div>
    )
}

export default Home

