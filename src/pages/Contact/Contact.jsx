import React from "react";
import { Section,Aside,Hr, Img,Icons,Box, Form,Submit, Input1,Textarea,Label} from "./styled-contact";
import Imagem from "./../../assets/img/Iphone.png"
import { MdOutlineAddIcCall, MdAddLocationAlt } from "react-icons/md";
import { FaXTwitter,FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
//import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = ()=>{
    return(
        <>
            <Section>
                <Aside>
                    <Icons>
                        <h1>INFORMAÇÕES</h1>
                    </Icons>
                    <Img src={Imagem} alt="Contact"/>
                    <Icons>
                        <Box><MdOutlineAddIcCall /></Box>
                        <h5>(+258) 844801971</h5>
                    </Icons>
                    <Hr />
                    <Icons>
                        <h6>kelven.de.figueiredo.leopoldo@gmail.com</h6>
                    </Icons>
                    <Hr />
                    <Icons>
                        <Box><MdAddLocationAlt /></Box>
                        <h5>Maputo, Moçambique</h5>
                    </Icons>
                    <Hr/>
                    <Icons>
                        <Box><FaWhatsapp /></Box>
                        <Box><FaLinkedinIn /></Box>
                        <Box><FaInstagram /></Box>
                        <Box><FaXTwitter /></Box>
                    </Icons>
                </Aside>
                <Form>
                    <h1>CONTACT US</h1>
                    <Label htmlFor="username">Username:</Label>
                    <Input1 type="text" name="username" id="username" placeholder="Type Your Username..." required/>
                    <Label htmlFor="email">Email:</Label>
                    <Input1 type="email" name="email" id="email" placeholder="Type Your email..." required/>
                    <Label htmlFor="comment">Comment:</Label>
                    <Textarea name="comment" id="comment" cols="30" rows="1" placeholder="Type your comment..." required></Textarea>
                    <Submit type="submit" value="enviar" />
                </Form>
               
            </Section>
        </>
    );
}

export default Contact;