import React from "react";
import { Nav,NavItems,Logo, Text } from "./styled-header";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
            <Nav>
                    <Link to="/">
                        <Logo>KL</Logo>
                    </Link>
                <NavItems>
                        <li>
                            <Link to="/"><Text>home</Text> </Link>
                        </li>
                        <li>
                            <Link to="/About"><Text> about</Text></Link>
                        </li>
                        <li>
                            <Link to="/Projects"><Text>projects</Text> </Link>
                        </li>
                        <li>
                            <Link to="/Contact"><Text>contact</Text> </Link>
                        </li>
                </NavItems>
            </Nav>
        </>
    );
}

export default Header