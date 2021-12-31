import  React from "react";
import {Link} from "react-router-dom";

export default function HeaderComponent(){
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div></div>
                <ul className="navbar-nav">
                    <li ><Link className="nav-link" to="/register"> SingUp </Link></li>
                    <li ><Link className="nav-link" to="/login"> Login </Link></li>
                    <li ><Link className="nav-link" to="/reset"> Rest Password </Link></li>
                </ul>


            </nav>
        </header>

    )
}

