import React from "react";
import { Nav,NavItems,Logo } from "./styled-header";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
            <Nav>
                <Logo>
                    <Link to="/">
                        <h1>KL</h1>
                    </Link>
                    
                </Logo>
                <NavItems>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/About">about</Link>
                        </li>
                        <li>
                            <Link to="/Projects">projects</Link>
                        </li>
                        <li>
                            <Link to="/Contact">contact</Link>
                        </li>
                </NavItems>
            </Nav>
        </>
    );
}

export default Header