import { useState, useEffect } from 'react'
import { Linkedin, Instagram, GitHub, Download } from 'react-feather';
import './HomePage.css'

function HomePage() {
  null;

  return (
    <> 
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h4>Bienvenue sur mon Portfolio!</h4>
        <h1>Je suis <span className="name">Alexandre</span>, étudiant ingénieur à <span className="linkINSA"><a href="https://www.insa-toulouse.fr/">l'INSA</a></span> Toulouse</h1>
        <p>J'excelle dans la création d'expériences numériques élégantes et je maîtrise divers langages de programmation et technologies.</p>
        <div className="linkBar">
          <a className='BouttonPourleCV' href="../Annexe/NERDIG_Alexandre_CV.pdf" download={"NERDIG_Alexandre_CV"}>Télécharger le CV <Download className='logoCV'></Download></a>
          <div className="Socials">
            <a href="https://github.com/AlexandreNERDIG"><GitHub></GitHub></a>
            <a href="https://www.linkedin.com/in/alexandre-nerdig-8980382a5/"><Linkedin></Linkedin></a>
            <a href="https://www.instagram.com/nerdig.alex/?hl=fr"><Instagram></Instagram></a>
          </div>
        </div>
      </div>
            <div className="image"><img src="img/Selfie.jpg"/></div>
    </header>
    <div className="eyeCatchingInfos">
      <div className="info">
        <div className="infoValue"><p>2</p></div>
        <div className="infoKey"><p>Années d'expériences</p></div>
      </div>
      <div className="info">
        <div className="infoValue"><p>12</p></div>
        <div className="infoKey"><p>Projets terminé</p></div>
      </div>
      <div className="info">
        <div className="infoValue"><p>4</p></div>
        <div className="infoKey"><p>Language maitrisée</p></div>
      </div>
      <div className="info">
        <div className="infoValue"><p>+100</p></div>
        <div className="infoKey"><p>Code review</p></div>
      </div>
    </div>
    </>
  )
}

export default HomePage;
