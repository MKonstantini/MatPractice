import PageHeader from "./page_parts/PageHeader"
import Ruler from "./page_parts/Ruler"

interface AboutProps { }

const About: React.FunctionComponent<AboutProps> = () => {
    return (
        <div className="page-margins text-center d-flex flex-column align-items-center">
            <PageHeader title={"About"} catImgSource="/WS_CatQuestion.svg" />
            <div className="w-75 text-center">
                <h2 className="mb-3">White Space: A Canvas for Creative Exploration</h2>
                <p>
                    White Space is an abstract playground where I experiment, tinker, and bring small projects to life.
                </p>
                <p className="mb-0">
                    Here, you'll find a diverse collection of mini-projects that showcase my abilities in various technologies.
                </p>
            </div>
            <Ruler />
            <div className="w-75 text-center my-3">
                <h2 className="mb-3">What You'll Find Here:</h2>
                <p>
                    * Interactive Grocery Store:<br />This mini-project lets you experience a simple e-commerce platform. Shopping cart included.
                </p>
                <p>
                    * Game - Tick-Tac-Toe:<br />Classic game coded in JavaScript. Showcasing problem-solving and interactive web development.
                </p>
                <p className="mb-0">
                    * Task Management with MongoDB:<br />Take a peek into my back-end capabilities with this task management project. It utilizes an API to connect with a MongoDB database, demonstrating my knowledge of Node.js and Express.
                </p>
            </div>
            <Ruler />
        </div>
    )
}

export default About