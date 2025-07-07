import React from 'react';
import './qualificacaoCard.css';

type QualificacaoCardProps = {
    icone: React.ReactNode;
    titulo: string;
    descricao: string;
}

const QualificacaoCard: React.FC<QualificacaoCardProps> = ({ icone, titulo, descricao }) => {
    return (
        <div className='portifolio__qualificacaoCard'>
            <div className='portifolio__qualificacaoCard-icone'>
                {icone}
            </div>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}

export default QualificacaoCard;
