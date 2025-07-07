import React from 'react';
import './cursoCard.css';

type CursoCardProps = {
    titulo: string;
    origem: string,
    descricao: string;
}

const CursoCard: React.FC<CursoCardProps> = ({ titulo, origem, descricao }) => {
    return (
        <div className='portfolio__cursoCard'>
            <h3>{titulo}</h3>
            <h4>{origem}</h4>
            <p>{descricao}</p>
        </div>
    )
}

export default CursoCard;
