import { FunctionComponent } from "react"
import PageHeader from "./page_parts/PageHeader"
import Ruler from "./page_parts/Ruler"

interface LoginProps { }

const Login: FunctionComponent<LoginProps> = () => {
    return (
        <div className="page-margins text-center d-flex flex-column align-items-center">
            <PageHeader title={"Login"} catImgSource="/WS_Cat.svg" />
            <div>
                <p>Email:</p>
                <p className="m-0">Password:</p>
            </div>
            <Ruler />
        </div>
    )
}

export default Login

