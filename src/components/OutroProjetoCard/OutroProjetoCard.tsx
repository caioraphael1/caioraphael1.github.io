import React from 'react';
import './outroProjetoCard.css';

type OutroProjetoCardProps = {
    titulo1: string,
    descricao1: string,
    video1: string,
    titulo2: string,
    descricao2: string,
    video2: string
}

const OutroProjetoCard: React.FC<OutroProjetoCardProps> = ({ titulo1, descricao1, video1, titulo2, descricao2, video2 }) => {
    return (
        <div className='portfolio__outroProjetoCard'>
            <div className='portfolio__outroProjetoCard-container1'>
                <div className='portfolio__outroProjetoCard-container1_texto'>
                    <h2>{titulo1}</h2>
                    <p>{descricao1}</p>
                </div>
                <div className='portfolio__outroProjetoCard-container1_video'>
                    <iframe
                        width="100%"
                        height="315"
                        src={video1}
                        title='Youtube Video'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            <div className='portfolio__outroProjetoCard-container2'>
                <div className='portfolio__outroProjetoCard-container2_texto'>
                    <h2>{titulo2}</h2>
                    <p>{descricao2}</p>
                </div>
                <div className='portfolio__outroProjetoCard-container2_video'>
                    <iframe
                        width="100%"
                        height="315"
                        src={video2}
                        title='Youtube Video'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default OutroProjetoCard;
