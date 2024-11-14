import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 820px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(to bottom, #072E33 0%, #0F969C 100%);
    //border: 1px solid whitesmoke;
    gap: 3rem;
    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 980px;
        
    }
`

export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 220px;
    border: 1px solid white;
    position: relative;
`
export const Icons = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-evenly;
    //border: 1px solid white;
    position: relative;
    flex-direction: row;
`

export const Aside = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 460px;
    border-radius: 28px;
    flex-direction: column;
   // border: 1px solid white;
    gap: 1.5rem;
    background: linear-gradient(to top, #0F969C 0%, #6DA5C0 100%);
    //background-color: #949494;
    box-shadow: 37px 36px 25px -6px rgba(0,0,0,0.75);

`
export const Img = styled.img`
    width: 300px;
    height: 490px;
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    //border: 1px solid white;
    //box-shadow: 27px 16px 25px -6px rgba(0,0,0,0.75);
`

export const Form = styled.form`
   // display: flex;
   background: linear-gradient(to bottom, #072E33 0%, #0F969C 100%);
   border-radius: 18px 0px;
    width: 380px;
    height: 450px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 27px 16px 25px -6px rgba(0,0,0,0.75);
`
export const Submit = styled.input`
    width: 50%;
    height: 46px;
    border: none;
    border-radius: 12px;
    display: flex;
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
export const Input1 = styled.input`
    width: 80%;
    display: flex;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline-style: none;
    color: aliceblue;
    font-size: large;
`
export const Textarea = styled.textarea`
    width: 80%;
    display: flex;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline-style: none;
`
export const Label = styled.label`
    color: white;
    width: 80%;
    display: flex;
`
export const Hr = styled.hr`
    width: 80%;
    color: white;
`
export const A = styled.a`
    width: 45px;
    height: 100%;
    border: 1px solid white;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const AlertBox = styled.div`
    padding: 12px 20px;
    margin: 15px 0;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    background-color: ${({ type }) => (type === 'success' ? '#4CAF50' : '#f44336')};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
    
    &.fadeOut {
        opacity: 0;
    }
`