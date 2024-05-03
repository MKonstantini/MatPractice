import { FunctionComponent } from "react"
import PageHeader from "./page_parts/PageHeader"
import Ruler from "./page_parts/Ruler"
import { useNavigate } from "react-router-dom"

interface LoginProps { }

const Login: FunctionComponent<LoginProps> = () => {
    const navigate = useNavigate();

    function enterAsDemo() {
        navigate('/')
    }

    function register() {
        navigate('/register')
    }

    function login() {
        navigate('/')
    }

    return (
        <div className="page-margins text-center d-flex flex-column align-items-center">
            <PageHeader title={"Login"} catImgSource="/WS_CatWelcome.svg" />
            <form onSubmit={login}>
                <div className="mb-4 d-flex flex-column">
                    <label className="mb-2" htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="mb-4 d-flex flex-column">
                    <label className="mb-2" htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="d-flex mt-5">
                    <button type="submit" className="button-style me-3 btn btn-outline-dark">Login</button>
                    <button onClick={register} type="button" className="button-style btn btn-outline-dark">Register</button>
                </div>
            </form>
            <Ruler />
            <p onClick={enterAsDemo} className="demo-link">[ OR USE DEMO USER ! ]</p>
        </div>
    )
}

export default Login

