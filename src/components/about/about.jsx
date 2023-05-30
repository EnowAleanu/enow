import React from 'react'
import './about.css'
import moi from '../../assets/avat1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return ( 
        <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Enow " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>several months of training</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small> </small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>1 Completed</small>
              </article>
            </div>
            <p>
              I am a young software engineer training at the Faculty of
              Engineering and Technology(FET) of the University of Buea . I am to get
              my B.eng in 2025. Being on demand for experience, I apply to
               
              today, I learned technologies such as react, react native,Node js, in
              short the MERN stack, I am still learning and counting on the
              support of Camsol to increase my knowledge at end of being an
              engineer not only graduate, but also qualified. I hold a
              French-speaking GCE O-level A-grade, my university studies at
              FET I did in English and French too. I can therefore express myself in French (Fairly-good) and
              in English (OK) .
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
     );
}
 
export default About;