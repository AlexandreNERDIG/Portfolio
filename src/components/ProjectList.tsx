import { useState } from 'react';
import { GitHub, ArrowUpRight, ChevronLeft, ChevronRight} from 'react-feather';
import './ProjectList.css';

const ProjectList = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const projects = [
        {
            num: "01",
            title: "Color Generator",
            description: "Un générateur de couleurs RGB/Hex interactif pour générez, personnalisez et enregistrez des couleurs facilement.",
            categorie: "Html 5, Css 3, Typescript",
            image: "./img/ColorGenerator.png",
            live: '',
            gitHub: 'https://github.com/AlexandreNERDIG/Color-Generator'
        },
        {
            num: "02",
            title: "Project Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis sequi Fugiat perspiciatis sequi",
            categorie: "Html 5, Css 3, Typescript",
            image: "./img/template.png",
            live: '',
            gitHub: ''
        },
        {
            num: "03",
            title: "Project Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis sequi Fugiat perspiciatis sequi",
            categorie: "Html 5,  Css 3,  Typescript",
            image: "./img/template.png",
            live: '',
            gitHub: ''
        },
        {
            num: "04",
            title: "Project Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis sequi Fugiat perspiciatis sequi",
            categorie: "Html 5, Css 3, Typescript",
            image: "./img/main.jpg",
            live: '',
            gitHub: ''
        },
    ];

    const handleLeftSwipe = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const handleRightSwipe = () => {
        if (currentIndex != (projects.length - 1)) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <>
            <div className="sectionHeader"><p>Exemple de projet fini</p></div>
            <br />
            <br />
            <div className="globalSectionProject">

                <div className="leftSection">
                    <div className="pageNum">{projects[currentIndex].num}</div>
                    <div className="projectName">{projects[currentIndex].title}</div>
                    <div className="projectDescription">{projects[currentIndex].description}</div>
                    <div className="projectCategorie">{projects[currentIndex].categorie}</div>
                    <hr className='horizontalBar'/>
                    <div className="icons">
                        <div className="Icon"><a href={projects[currentIndex].live}><ArrowUpRight></ArrowUpRight></a></div>
                        <div className="Icon"><a href={projects[currentIndex].gitHub}><GitHub></GitHub></a></div>
                    </div>
                </div>

                <div className="rightSection">
                    <div className="projectImage"><img src={projects[currentIndex].image} alt="No Image for this Project" /></div>
                    <div className="buttons">
                        <div className="button" onClick={handleLeftSwipe}><p><ChevronLeft></ChevronLeft></p></div>
                        <div className="button" onClick={handleRightSwipe}><p><ChevronRight></ChevronRight></p></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectList;