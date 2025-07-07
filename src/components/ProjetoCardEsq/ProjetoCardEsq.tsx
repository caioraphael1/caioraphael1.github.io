import React from 'react';
import './projetoCardEsq.css';

type ProjetoCardEsqProps = {
    titulo: string;
    descricao: string;
    video: string;
}

const ProjetoCardEsq: React.FC<ProjetoCardEsqProps> = ({ titulo, descricao, video }) => {
    return (
        <div className='portfolio__projetoCardEsq'>
            <div className='portfolio__projetoCardEsq-texto'>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
            
            <div className='portfolio__projetoCardEsq-video'>
                <iframe
                    width="100%"
                    height="315"
                    src={video}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default ProjetoCardEsq;
