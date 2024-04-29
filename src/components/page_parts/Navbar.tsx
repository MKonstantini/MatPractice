import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App';

interface NavbarProps { }

const Navbar: React.FunctionComponent<NavbarProps> = () => {
    // Context
    const [user, setUser] = useContext(UserContext);

    // Functions
    const navigate = useNavigate();

    const logoutFunction = () => {
        sessionStorage.clear()
        setUser(null)
        navigate("/")
    }

    // Navbar
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Brand */}
                <Link to="/" className="nav-link d-flex align-items-center m-0">
                    <img src="/WS_Cat.svg" alt="Logo" className="me-2" />
                    <h2 className="navbar-brand m-0 me-2">White Space</h2>
                </Link>
                {/* Collapse Btn */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Nav Body */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 d-flex justify-content-between">
                        {/* Left */}
                        <div className="d-lg-flex flex-row">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link me-auto" to="/about">About</NavLink>
                            <NavLink className="nav-link me-auto" to="/store">Store</NavLink>
                            <NavLink className="nav-link me-auto" to="/game">Game</NavLink>
                            <NavLink className="nav-link me-auto" to="/tasks">Tasks</NavLink>
                        </div>
                        {/* Right */}
                        <div className="d-lg-flex flex-row">
                            {
                                user ?
                                    <button className="nav-link" onClick={logoutFunction}>
                                        <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                                        Logout
                                    </button> :
                                    <NavLink className="nav-link" to="/login">
                                        <i className="fa-regular fa-circle-user"></i>
                                        Login
                                    </NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar