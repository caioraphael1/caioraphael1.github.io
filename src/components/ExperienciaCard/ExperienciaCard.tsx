import React from 'react';
import './experienciaCard.css';

type ExperienciaCardProps = {
    titulo: string;
    empresa: string;
    descricao: string;
}

const ExperienciaCard: React.FC<ExperienciaCardProps> = ({ titulo, empresa, descricao }) => {
    return (
        <div className='portfolio__experienciaCard'>
            <h3>{titulo}</h3>
            <h4>{empresa}</h4>
            <p>{descricao}</p>
        </div>
    )
}

export default ExperienciaCard;
