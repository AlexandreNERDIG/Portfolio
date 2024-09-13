import { useState, useEffect } from 'react'
import { Mail, Phone, Linkedin, Instagram } from 'react-feather';
import NavBar from './NavBar';
import emailjs from 'emailjs-com'
import './ContactPage.css';

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const ContactPage = () => {

    const [nom, setNom] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const handleChange1 = (e : string) => {
        setNom(e)
    }
    const handleChange2 = (e : string) => {
        setEmail(e)
    }
    const handleChange3 = (e : string) => {
        setMessage(e)
    }

    const handleSubmit = () => {
        emailjs.send(
            'service_cce2e4e',
            'template_byw5i7k',
            {
                from_name: nom,
                to_name : 'Alexandre',
                from_email: email,
                to_email: 'alexandre.nerdig@gmail.com',
                message: message,
            },
            'JKjh3Ykqg8WLl_lGw'
        )
        .then(() => {
            alert('Votre email à bien était envoyé, je reviendrais vers vous dans les plus brefs délai');
            setNom('');
            setEmail('');
            setMessage('');
        })
        .catch(() => {
            alert("Un problème est survenue, votre mail n'a pas était envoyé")
        })
    }

    const Copier = () => {
        navigator.clipboard.writeText('06 74 89 85 26').then(() => {
            alert("Le texte à bien était copié");
        })
        .catch((err) => {
            console.error("Could not copy text: ", err);
        });
    }

    const Copier2 = () => {
        navigator.clipboard.writeText('nerdig@insa-toulouse.fr').then(() => {
            alert("Le texte à bien était copié");
        })
        .catch((err) => {
            console.error("Could not copy text: ", err);
        });
    }


    return(
        <>
            <div className="globalSection">
                <div className="MailForm">
                    <h3>Prendre Contact</h3>
                    <h1>Contact.</h1>
                    <div className="form">
                        <div className="formField">
                            <label htmlFor="YourName">Votre Nom</label>
                            <textarea placeholder='Quelle est votre nom ?' value={nom} onChange={(e) => handleChange1(e.target.value)}/>
                        </div>
                        <div className="formField">
                            <label htmlFor="YourName">Votre Email</label>
                            <textarea placeholder='Quelle est votre email ?' value={email} onChange={(e) => handleChange2(e.target.value)}/>
                        </div>
                        <div className="formField">
                            <label htmlFor="YourName">Votre Message</label>
                            <textarea className='MessageField' placeholder='De quoi souhaitez vous parler ?' value={message} onChange={(e) => handleChange3(e.target.value)}/>
                        </div>
                        <div className="sendButton">
                            <input type="submit" value={"Envoyer"} onClick={handleSubmit}/>
                        </div>
                    </div>
                </div>

                <div className="contactSection">
                    <div className="sectionHeader"><p>Comment me contacter ?</p></div>
                    <div className="subSection">
                        <div className="iconContainer">
                            <h2>Par Téléphone</h2>
                            <Phone></Phone>
                        </div>
                        <div className="sectionInfo"><p> (+33) 06 74 89 85 26</p></div>
                        <div className="copyButton"><input type="submit" value={"Copier"} onClick={Copier}/></div>
                    </div>

                    <div className="subSection">
                        <div className="iconContainer">
                            <h2>Par Mail</h2>
                            <Mail></Mail>
                        </div>
                        <div className="sectionInfo"><p>nerdig@insa-toulouse.fr</p></div>
                        <div className="copyButton"><input type="submit" value={"Copier"} onClick={Copier2}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;