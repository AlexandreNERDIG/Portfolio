import { useState } from 'react';
import './ResumeV2.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiPython, SiAdafruit } from 'react-icons/si';

const ResumeV2 = () => {

    const [activeButton, setActiveButton] = useState<number>(0);

    const contentDiv = [
        {
            id: 0,
            name: "Experience",
            title: "Mon Experience",
            description: "Voici une liste des différents expériences proffesionnelles pertinantes que j'ai eu au cours des dernières années",
            infoExp: [
                {
                    duration: "2024 - 1 mois",
                    poste: "Développeur de Web App",
                    entreprise: "Thales Alenia Space"
                },
                {
                    duration: "2024 - 1 mois",
                    poste: "Développeur de Web App",
                    entreprise: "Thales Alenia Space"
                },
                {
                    duration: "2024 - 1 mois",
                    poste: "Développeur de Web App",
                    entreprise: "Thales Alenia Space"
                },
                {
                    duration: "2024 - 1 mois",
                    poste: "Développeur de Web App",
                    entreprise: "Thales Alenia Space"
                },
                {
                    duration: "2024 - 1 mois",
                    poste: "Développeur de Web App",
                    entreprise: "Thales Alenia Space"
                },
            ]
        },
        {
            id: 1,
            name: "Diplôme et Formation",
            title: "Mes Diplôme et Formation",
            description: "Voici une liste des différents diplômes que je possède et différentes formations que j'ai terminé.",
            infoDegree: [
                {
                    institution: "INSA Toulouse",
                    degree : "Ingénieur Informatique et réseau",
                    duration: "2023 - 2027"
                },
                {
                    institution: "INSA Toulouse",
                    degree : "Ingénieur Informatique et réseau",
                    duration: "2023 - 2027"
                },
                {
                    institution: "INSA Toulouse",
                    degree : "Ingénieur Informatique et réseau",
                    duration: "2023 - 2027"
                },
                {
                    institution: "INSA Toulouse",
                    degree : "Ingénieur Informatique et réseau",
                    duration: "2023 - 2027"
                },
                {
                    institution: "INSA Toulouse",
                    degree : "Ingénieur Informatique et réseau",
                    duration: "2023 - 2027"
                },
            ]
        },
        {
            id: 2,
            name: "Compétences",
            title: "Mes Compétences",
            description: "Voici une liste des différentes technologies et languages de programation que je peux utiliser.",
            infoSkills : [
                {
                    logo: <FaHtml5 size={75} color="#E34F26" />,
                    nom: "Html 5"
                },
                {
                    logo: <FaCss3Alt size={75} color="#1572B6" />,
                    nom: "Css 3"
                },
                {
                    logo: <FaJs size={75} color="#F7DF1E" />,
                    nom: "Javascript"
                },
                {
                    logo: <SiTypescript size={75} color="#3178C6" />,
                    nom: "Typescript"
                },
                {
                    logo: <SiPython size={75} color="#3776AB" />,
                    nom: "Python"
                },
                {
                    logo: <SiAdafruit size={75} color="#0033A0" />,
                    nom: "Ada"
                },
                {
                    logo: <FaReact size={75} color="#61DAFB" />,
                    nom: "React"
                },
                {
                    logo: <FaNodeJs size={75} color="#339933" />,
                    nom: "Node"
                },
            ]
        },
        {
            id: 3,
            name: "A Propos de moi",
            title: "A Propos de moi",
            description: "Voici une liste des différentes informations dont vous pouviez avoir besoin me concernant.",
            infoAbout: [
                {
                    fieldName: "Nom/Prénom",
                    fieldValue: "Nerdig Alexandre"
                },
                {
                    fieldName: "Téléphone",
                    fieldValue: "(+33) 06 74 89 85 26"
                },
                {
                    fieldName: "Nationalité",
                    fieldValue: "Française"
                },
                {
                    fieldName: "Langues",
                    fieldValue: "Français, Anglais"
                },
                {
                    fieldName: "Experience",
                    fieldValue: "2 ans"
                },
                {
                    fieldName: "Email",
                    fieldValue: "nerdig@insa-toulouse.fr"
                },
            ]
        }
    ];

    const handleActiveButton = (id : number) => {
        setActiveButton(id)
    }

    const displayCurrentContent = () => {
        let currentInfo;
        switch(activeButton) {
            case 0:
                currentInfo = contentDiv[activeButton].infoExp;
                return currentInfo?.map((element, index) => (
                    <div className="ExperienceContent" key={index}>
                        <h4>{element.duration}</h4>
                        <h1>{element.poste}</h1>
                        <p>{element.entreprise}</p>
                    </div>
                ))
            case 1:
                currentInfo = contentDiv[1].infoDegree;
                return currentInfo?.map((element, index) => (
                    <div className="DegreeContent" key={index}>
                        <h4>{element.duration}</h4>
                        <h1>{element.degree}</h1>
                        <p>{element.institution}</p>
                    </div>
                ));
            case 2:
                currentInfo = contentDiv[2].infoSkills;
                return currentInfo?.map((element, index) => (
                    <div className="SkillsContent" key={index}>
                        <div className='LogoSkillContent'>{element.logo}</div>
                        <p>{element.nom}</p>
                    </div>
                ));
            case 3:
                currentInfo = contentDiv[3].infoAbout;
                return currentInfo?.map((element, index) => (
                    <div className="AboutContent" key={index}>
                        <h4>{element.fieldName} </h4>
                        <p>{element.fieldValue}</p>
                    </div>
                ));
            default:
                return null;
        }
    }
    
    const currentClassName = () => {
        switch (activeButton) {
            case 0:
                return ("DisplayExperience")
            case 1:
                return ("DisplayDegree")
            case 2:
                return ("DisplaySkills")
            case 3:
                return ("DisplayAbout")
            default:
                return ('NoContent');
        }
    }
    
    return(
        <>
            <div className="globalAboutMeSection">


                <div className="categorieList">
                    <div className="sectionTitle"><p>Pourquoi Moi ?</p></div>
                    <h4>Avec une expérience solide en développement de Web Apps, je combine expertise technique et passion pour offrir des solutions innovantes et efficaces.</h4>
                    <div className="list">{contentDiv.map((element) => (
                        <div className={`${activeButton !== element.id ? 'elementList' : 'activeElement'}`} key={element.id} onClick={() => handleActiveButton(element.id)}>{element.name}</div>
                        ))}
                    </div>
                </div>

                <div className="contente">
                        <h1>{contentDiv[activeButton].title}</h1>
                        <p>{contentDiv[activeButton].description}</p>
                        <div className={currentClassName()}>{displayCurrentContent()}</div>
                </div>

            </div>
        </>
    )
}

export default ResumeV2;