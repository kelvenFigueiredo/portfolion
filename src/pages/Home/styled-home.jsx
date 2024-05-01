import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    width: 100%;
   // border: 1px solid blue;
    justify-content: space-around;
    height: 820px;
    background: linear-gradient(to top, #072E33 0%, #0F969C 100%);
    @media(max-width: 800px) {
        background-color: #000707;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const Article = styled.div`
    width: 400px;
    height: 820px;
  // border: 1px solid violet;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media(max-width: 360px) {
       // background-color: #000707;
        display: flex ;
        justify-content: center;
    }
`
export const Aside = styled.aside`
    width: 500px;
    height: 820px;
  // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Inf = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
   //border: 1px solid black;
    border-radius: 0px 46px;
    box-shadow: 27px 16px 25px -6px rgba(0,0,0,0.75);
    flex-wrap: wrap;
    background: linear-gradient(to left, #072E33 0%, #0F969C 100%);

    @media(max-width: 800px) {
       // background-color: #000707;
       // margin-left: auto;
       // margin-right: auto;
        display: flex ;
        justify-content: center;
        width: 100%;
    height: 100%;
    }
`

export const Buttons = styled.div`
    width: 80%;
    height: 60px;
    //border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`
export const Button = styled.button`
    width: 120px;
    height: 50px;
    border-radius: 18px;
    border: none;
    cursor: pointer;
    background: linear-gradient(to bottom, #072E33 0%, #0F969C 100%);
    box-shadow: 27px 16px 25px -6px rgba(0,0,0,0.75);
    &:hover{
        width: 60%;
        height: 58px;
        transition: 0.9s;
        background: linear-gradient(to top, #0F969C 0%, #6DA5C0 100%);
        box-shadow: 27px 16px 25px -6px rgba(0,0,0,0.75);
    }
`

export const Text = styled.div`
    margin-left: 50px;
    //border: 1px solid black;
    color: white;
 

`
export const Name = styled.p`
    font-size:45px;
    //border: 1px solid black;
    font-family: "Montserrat", sans-serif;
`
export const Letra = styled.span`
    font-size:90px;
`
export const Img = styled.img`
    width: 65%;
    height: 50%;
    &:hover{
        width: 75%;
        height: 60%;
        transition: 0.5s;
    }

`