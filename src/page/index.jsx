import React from "react";
import './style.css'

const Page = () => {
    return (
        <div className="body">
            <div className="describe-content">
                <div className="titulo">
                    Mestrado Online em Tecnologia
                </div>
                <div className="texto">
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of
                    type and scrambled it to make a type
                    specimen book. It has survived not only
                    five centuries, but also the leap into
                    electronic typesetting, remaining
                    essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing
                    software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </div>
                <div className="botoes">
                    <div className="botao-home">Saiba mais</div>
                    <div className="botao-home">Sobre nós</div>
                </div>
            </div>
            <div className="contaienr-imagem">
                <img className="estudante" src={require('../img/aluna.png')} alt="" />
                <img className="background" src={require('../img/background.png')} alt="" />
            </div>
        </div>
    )
}

export default Page;