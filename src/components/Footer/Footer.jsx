import { Section, Icons, Box, Text } from "./styled-footer";
import { FaXTwitter,FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = ()=>{
    return(
        <>
            <Section>
                <Text>
                    Copyright © 2024 Desenvolvido por Kelven De Figueiredo Leopoldo | Todos direitos reservados
                </Text>
                <Icons>
                    <Box>
                    <FaGithub/>
                    </Box>
                    <Box><FaLinkedinIn/></Box>
                    <Box><FaInstagram/></Box>
                    <Box><FaXTwitter/></Box>
                </Icons>

            </Section>
        </>
    );
}

export default Footer