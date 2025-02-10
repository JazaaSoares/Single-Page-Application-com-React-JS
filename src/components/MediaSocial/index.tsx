import React, { useState } from 'react';
import './index.css'

const MediaSocial: React.FC = () => {
  return (
    <section id="home">
            <div id="cta">
                <h1 className="title">
                    Olá, sou a 
                    <span>Jaza</span>
                </h1>

                <p className="description">
                    Estudante de Sistemas de Informações na UFC e artista nas horas vagas
                </p>

                <div id="cta_buttons">
                    <a href="#sobre" className="btn-default">
                        Saber mais
                    </a>

                </div>  
                <div className="social_media_buttons">
                    <a href="https://wa.me/+5588996656444">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/jaza.soares/" title="instagram" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jaza-soares/" title="linkedin" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jaza-soares/" title="github" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>

            <div id="banner">
                <img src="/assets/IMG_3376.jpg" alt="" width="500" height="500"/>
            </div>
        </section>
  );
};

export default MediaSocial;