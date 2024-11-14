import React, { useState } from "react";
import { Section,Aside,Hr, Img,Icons,A, Form,Submit, Input1,Textarea,Label, AlertBox} from "./styled-contact";
import Imagem from "./../../assets/img/Iphone.png"
import { MdOutlineAddIcCall, MdAddLocationAlt } from "react-icons/md";
import { FaXTwitter,FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
//import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState({type: '', message: ''});

    function sendEmail(e){
        e.preventDefault();

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }
        
        emailjs.send("service_so44wej", "template_hwjf4qb", templateParams, "UNryDfypqRm_xu8ZP")
        .then((response)=>{
            setAlert({ type: 'success', message: 'Email enviado com sucesso!' }); 
            //console.log("EMAIL ENVIADO!", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            setAlert({ type: 'error', message: 'Erro ao enviar o email. Tente novamente.' });
            //console.log("ERROR", err)
        })
    }

    return(
        <>
        
            <Section>
                <Aside>
                    <Icons>
                        <h1>INFORMAÇÕES</h1>
                    </Icons>
                    <Img src={Imagem} alt="Contact"/>
                    <Icons>
                        <A><MdOutlineAddIcCall /></A>
                        <h5>(+258) 844801971</h5>
                    </Icons>
                    <Hr />
                    <Icons>
                        <h6>kelven.de.figueiredo.leopoldo@gmail.com</h6>
                    </Icons>
                    <Hr />
                    <Icons>
                        <A><MdAddLocationAlt /></A>
                        <h5>Maputo, Moçambique</h5>
                    </Icons>
                    <Hr/>
                    <Icons>
                        <A href="https://wa.me/+258844801971" target="blank"><FaWhatsapp /></A>
                        <A href="https://linkedin.com/in/kelven-de-figueiredo-leopoldo-a83036153" target="blank"><FaLinkedinIn /></A>
                        <A href="" target="blank"><FaInstagram /></A>
                        <A href="https://twitter.com/kelven_leopoldo?t=-_m2eCa7TZl3o6ogVqFaYA&s=09" target="blank"><FaXTwitter /></A>
                    </Icons>
                </Aside>
                <Form onSubmit={sendEmail}>

                {alert.message && (
                    <AlertBox type={alert.type}>
                        {alert.message}
                    </AlertBox>
                )}
                    <h1>CONTACTE-NOS</h1>
                    <Label htmlFor="username">Username:</Label>
                    <Input1 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Type Your Username..." 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <Label htmlFor="email">Email:</Label>
                    <Input1 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Type Your email..." 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <Label htmlFor="comment">Comment:</Label>
                    <Textarea 
                        name="comment" 
                        id="comment" 
                        cols="30" 
                        rows="1" 
                        placeholder="Type your comment..." 
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    >
                    </Textarea>
                    <Submit type="submit" value="enviar" />
                </Form>
               
            </Section>
        </>
    );
}

export default Contact;