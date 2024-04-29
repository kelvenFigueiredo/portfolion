import React from "react";
import { Section, ProjectMain, Text } from "./styled-projects";
import Carrosel from 'react-elastic-carousel';

const Projects = ()=>{
    return(
        <>
            <Section>
                <Carrosel>
                    <Text>projects</Text>
                    <Text>trabalhos</Text>
                    <Text>brincadeiras</Text>
                </Carrosel>
                <ProjectMain>

                </ProjectMain>
            </Section>
        </>
    );
}

export default Projects;