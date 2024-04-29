import React from "react";
import {Section, BoxHeader,BoxMain} from "./styled-about";
import Carrosel from 'react-elastic-carousel';
import CSS from "../../assets/img/CSS.png";
import HTML from "../../assets/img/HTML.png";
import JS from "../../assets/img/JS.png";
import Git from "../../assets/img/git.png";

const About = ()=>{
    return(
        <>
            <Section>
                <BoxHeader>
                    <h1>About</h1>
                </BoxHeader>
                <BoxMain>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas odit tenetur voluptates enim corrupti, sapiente incidunt dicta asperiores nobis sint culpa impedit dolores quasi repellendus aspernatur sed laudantium accusantium voluptatem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem accusamus ratione cupiditate excepturi ipsum est atque, cumque similique quae reiciendis alias placeat velit incidunt mollitia a eaque quasi inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe dolor iste error nihil ratione labore! Itaque eveniet minima, vel aliquam doloremque harum in porro laborum nisi, nesciunt impedit modi.
                </BoxMain>
                <BoxHeader>
                    <h1>Skills</h1>
                </BoxHeader>
               
                    <BoxMain> 
                    <Carrosel>
                        <img src={HTML} alt="HTML"  width={180}/>
                        <img src={CSS} alt="CSS" width={180} />
                        <img src={JS} alt="CSS" width={180} />
                        <img src={Git} alt="GIT" width={180} />
                    </Carrosel>
                    </BoxMain>
                
            </Section>
        </>
    );
}

export default About;