import { Section, Icons, Box, Text } from "./styled-footer";
import { FaXTwitter,FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = ()=>{
    return(
        <>
            <Section>
                <Icons>
                    <Box>
                    <FaGithub/>
                    </Box>
                    <Box><FaLinkedinIn/></Box>
                    <Box><FaInstagram/></Box>
                    <Box><FaXTwitter/></Box>
                </Icons>
                <Text>
                    Copyright c 2024 Developed by Kelven De Figueiredo Leopoldo | Todos direitos reservados
                </Text>
            </Section>
        </>
    );
}

export default Footer