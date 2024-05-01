import React from "react";
import { Section, BoxHeader, BoxMain,BoxMainCarrosel } from "./styled-about";
import Carrosel from "react-elastic-carousel";
import CSS from "../../assets/img/CSS.png";
import HTML from "../../assets/img/HTML.png";
import JS from "../../assets/img/JS.png";
import Git from "../../assets/img/git.png";

const About = () => {
  return (
    <>
      <Section>
        <BoxHeader>
          <h1>About</h1>
        </BoxHeader>
        <BoxMain>
             Olá, sou Kelven De
          Figueiredo Leopoldo, um entusiasta moçambicano da programação
          frontend. Atualmente, estou no terceiro ano do curso de Engenharia
          Informática na UEM, onde dei meus primeiros passos na programação.
          Além dos estudos, dedico parte do meu tempo ao desenvolvimento de
          projetos pessoais e colaborações, ampliando meu conhecimento prático.
          Meu interesse está em criar interfaces cativantes que expressem
          emoções e contem histórias aos usuários. Estou ansioso para continuar
          minha jornada na programação frontend, explorando novas técnicas e
          contribuindo para projetos impactantes.
        </BoxMain>
        <BoxHeader>
          <h1>Skills</h1>
        </BoxHeader>

        <BoxMainCarrosel>
          <Carrosel>
            <img src={HTML} alt="HTML" width={180} />
            <img src={CSS} alt="CSS" width={180} />
            <img src={JS} alt="CSS" width={180} />
            <img src={Git} alt="GIT" width={180} />
          </Carrosel>
        </BoxMainCarrosel>
      </Section>
    </>
  );
};

export default About;
