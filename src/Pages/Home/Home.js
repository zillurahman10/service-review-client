import React from 'react';
import Banner from './Banner';
import Services from './Services';
import AboutMe from './AboutMe';
import AddService from './AddService';

const Home = () => {
    const services = [
        {
            name: "Portfolio website development",
            developer: "Md. Zillur Rahman",
            photo: "https://i.ibb.co/7K7swwq/preview.jpg",
            description: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. And I am a professional front-end developer. You can relay on me'
        },
        {
            name: "E-commerce website development",
            developer: "Md. Zillur Rahman",
            photo: "https://i.ibb.co/7K7swwq/preview.jpg",
            description: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. And I am a professional front-end developer. You can relay on me'
        },
        {
            name: "Educational website development",
            developer: "Md. Zillur Rahman",
            photo: "https://i.ibb.co/7K7swwq/preview.jpg",
            description: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. And I am a professional front-end developer. You can relay on me'
        },
        {
            name: "Religious website development",
            developer: "Md. Zillur Rahman",
            photo: "https://i.ibb.co/7K7swwq/preview.jpg",
            description: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. And I am a professional front-end developer. You can relay on me'
        },
        {
            name: "Governmental website development",
            developer: "Md. Zillur Rahman",
            photo: "https://i.ibb.co/7K7swwq/preview.jpg",
            description: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. And I am a professional front-end developer. You can relay on me'
        },
        {
            name: "Full-stack website development",
            developer: "Md. Zillur Rahman",
            photo: "https://i.ibb.co/7K7swwq/preview.jpg",
            description: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. And I am a professional front-end developer. You can relay on me'
        },
    ]
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AddService></AddService>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;