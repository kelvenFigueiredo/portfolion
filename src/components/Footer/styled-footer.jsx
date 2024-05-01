import styled from "styled-components";

export const Section = styled.footer`
    width: 100%;
    height: 180px;
    background: linear-gradient(to right,  #0F969C 60%, #072E33 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
   // border: 1px solid black;
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.rem;
    }
`
export const Icons = styled.div`
  //  border: 1px solid black;
    width: 320px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
`
export const Box = styled.div`
    width: 50px;
    height: 100%;
    border: 3px solid black;
    border-radius: 12px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Text = styled.span`
    width: 780px;
    height: 60px;
    //border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px){
        height: 80px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
      //  border: 1px solid black;
        width: 100%;
    }
`