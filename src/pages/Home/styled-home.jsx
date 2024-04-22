import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    width: 100%;
    //border: 1px solid blue;
    height: 820px;
    background: linear-gradient(to top, #072E33 0%, #0F969C 100%);
`
export const Article = styled.article`
    width: 58%;
    height: 820px;
   // border: 1px solid violet;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const Aside = styled.aside`
    width: 42%;
    height: 820px;
   // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Inf = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid black;
    flex-wrap: wrap;
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
    width: 160px;
    height: 50px;
    border-radius: 18px;
    border: none;
    cursor: pointer;
`

export const Text = styled.div`
    display: flexbox;
    //border: 1px solid black;
    color: white;

`
export const Name = styled.p`
    font-size:45px;
    //border: 1px solid black;
`
export const Letra = styled.span`
    font-size:90px;
`
export const Img = styled.img`
    width: 75%;
    height: 60%;
`