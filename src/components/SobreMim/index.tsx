import React from 'react';
import './index.css';

const SobreMim: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/assets/curriculum.pdf"; // Caminho do arquivo na pasta public/
        link.download = "MeuCurriculo.pdf"; // Nome do arquivo baixado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="sobre">
            <h2 className="section-title">Sobre mim</h2>
            <h3 className="section-subtitle">Me conheça um pouco mais</h3>

            <div id="sobre-mim">
                <div className="sobre-m">
                    <img
                        className="banner2 eu"
                        src="/assets/fb5b28eb-c015-43cf-954b-85149985ef6a.jpg"
                        alt="Minha foto"
                        width="400"
                        height="400"
                    />
                    <div id="description">
                        <p>
                            No estágio do curso técnico de edificações, tive experiência em criar projetos em plataformas como AutoCAD e Sketchup, gerar soluções para problemas trazidos pelos clientes, fiscalização de obras e cálculos orçamentários. Aptidão e interesse em aprender, organizada, comunicativa e com facilidade em trabalhar em grupo. No curso de programação para as engenharias, tive contato com Python, C#, .NET Framework. Em cursos extracurriculares, pude trabalhar com tecnologias como WebAPI, método SCRUM, SQL Server e AzureDevOps, etc.
                        </p>
                        <button id="curriculo-button" className="btn-default" onClick={handleDownload}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreMim;
