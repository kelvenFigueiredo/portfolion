import styled from "styled-components";

export const Nav = styled.section`
    width: 100%;
    height: 6vw;
   // border: 1px solid black;
   /* position: sticky;
   top:0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #072E33 20%, #0F969C 100%);
     
`
export const Logo = styled.div`
    margin-left: 2vw;
    border: 1px solid black;
    font-size: 33px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    &:hover{
            color: #dad9d9;
        }
`
export const NavItems = styled.ul`
    margin-right: 2vw;
    display: flex;
    gap: 2.4rem;
    text-transform: uppercase;
`
export const Text = styled.span`
        color: white;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: larger;
        &:hover{
            color: #dad9d9;
        }
`
