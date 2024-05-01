import React from "react";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { Section, Article, Aside,Name,Letra, Inf, Text,Buttons, Img, Button} from "./styled-home";
import Perfil from "../../assets/img/Perfil.png"

const Home = ()=>{
    return(
        <>
            <Section>
                <Aside>
                    <Img src={Perfil} alt="Perfil"  />
                </Aside>
                <Article>
                    <Inf>
                        <Text>
                            <h3>Hi there, I'm</h3>
                            <Name><Letra>K</Letra>elven <Letra>L</Letra>eopoldo</Name>
                            <h2>Front-End Developer</h2>
                        </Text>
                        <Buttons>
                            <Button>Ver CV  <i class="bi bi-arrow-up"></i></Button>
                            <Button> <a href="https://github.com/kelvenFigueiredo/portfolio.git">Ver GitHub <i class="bi bi-arrow-up-right"></i></a></Button>
                        </Buttons>
                    </Inf>
                </Article>
            </Section>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
}

export default Home;