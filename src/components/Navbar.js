import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    let history = useHistory()
    function reloadmain() {
        history.push('/')
        window.location.reload(true)
    }
    function reloadhome() {
        history.push('/home')
        window.location.reload(true)
    }
    function reloadabout() {
        history.push('/about')
        window.location.reload(true)
    }
    function reloadbuild() {
        history.push('/mybuilds')
        window.location.reload(true)
    }
    function reloadinfo() {
        history.push('/myinfo')
        window.location.reload(true)
    }
    return (
        <nav className="navigation">
            <Link to="/" className="brand-name" onClick={reloadmain}>
                <div className='logopart'>
                    <div id='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                        </svg>
                        {/* <span class="material-symbols-outlined">
                            code_blocks
                        </span> */}
                    </div>
                    <div id='signature'>
                        Creative<br />Seamoon
                    </div>

                </div>
            </Link>
            <button
                className="btn"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* icon from Heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li> <Link to='/home' onClick={reloadhome}>
                        <i className="fa fa-home" style={{ fontSize: "16px", color: "white" }}> </i>
                    </Link></li>
                    <li> <Link to='/about' onClick={reloadabout}>ABOUT</Link></li>
                    <li> <Link to='/mybuilds' onClick={reloadbuild}>My Builds</Link></li>
                    <li> <Link to='/myinfo' onClick={reloadinfo}>My Info</Link></li>
                    <li> <Link to='/myteam'>My Team</Link></li>
                </ul>
            </div>
        </nav>
    );
}
