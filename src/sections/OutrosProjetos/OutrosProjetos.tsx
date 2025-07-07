import { useTranslation } from 'react-i18next';
import { FadeInFromBottom, OutroProjetoCard } from '../../components';
import './outrosProjetos.css';

const OutrosProjetos = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio__outrosProjetos'>
            <div className='portfolio__outrosProjetos-container'>
                <FadeInFromBottom>
                    <OutroProjetoCard
                        titulo1={t('outros-projetos.titulo-1')}
                        descricao1={t('outros-projetos.descricao-1')}
                        video1='https://www.youtube.com/embed/I4VD4OwUhDw'
                        titulo2={t('outros-projetos.titulo-2')}
                        descricao2={t('outros-projetos.descricao-2')}
                        video2='https://www.youtube.com/embed/I4VD4OwUhDw'
                    />
                </FadeInFromBottom>

                <FadeInFromBottom>
                    <OutroProjetoCard
                        titulo1={t('outros-projetos.titulo-3')}
                        descricao1={t('outros-projetos.descricao-3')}
                        video1='https://www.youtube.com/embed/I4VD4OwUhDw'
                        titulo2={t('outros-projetos.titulo-4')}
                        descricao2={t('outros-projetos.descricao-4')}
                        video2='https://www.youtube.com/embed/I4VD4OwUhDw'
                    />
                </FadeInFromBottom>

                <FadeInFromBottom>
                    <OutroProjetoCard
                        titulo1={t('outros-projetos.titulo-5')}
                        descricao1={t('outros-projetos.descricao-5')}
                        video1='https://www.youtube.com/embed/I4VD4OwUhDw'
                        titulo2={t('outros-projetos.titulo-6')}
                        descricao2={t('outros-projetos.descricao-6')}
                        video2='https://www.youtube.com/embed/I4VD4OwUhDw'
                    />
                </FadeInFromBottom>
            </div>
        </div>
    )
}

export default OutrosProjetos;
