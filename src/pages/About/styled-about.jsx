import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 820px;
  //border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #072e33 0%, #0f969c 100%);
  @media (max-width: 426px) {
    height: 920px;
  }
`;
export const BoxHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 50px;
  // border: 1px solid white;
  align-items: center;
  color: white;
`;
export const BoxMain = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 250px;
  border-radius: 20px 0px;
  font-size: 100%;
  background: linear-gradient(to bottom, #072e33 0%, #0f969c 100%);
  box-shadow: 37px 26px 35px -6px rgba(0, 0, 0, 0.75);
  //border: 1px solid white;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  @media (max-width: 616px) {
    height: 520px;
    font-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const BoxMainCarrosel = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 220px;
  border: 1px solid white;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  @media (max-width: 616px) {
    height: 250px;
  }
`;
