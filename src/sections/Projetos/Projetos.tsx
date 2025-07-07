import { FadeInFromBottom, FadeInFromLeft, FadeInFromRight, ProjetoCardEsq } from '../../components';
import { useTranslation } from 'react-i18next';
import './projetos.css';

const Projetos = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio__projetos' id='projects'>
            <FadeInFromBottom>
                <h1>{t('projetos.titulo')}</h1>
            </FadeInFromBottom>
            
            <div className='portfolio__projetos-cards'>
                <FadeInFromLeft>
                    <ProjetoCardEsq
                        titulo={t('projetos.titulo-1')}
                        descricao={t('projetos.descricao-1')}
                        video='https://www.youtube.com/embed/I4VD4OwUhDw'
                    />
                </FadeInFromLeft>

                <FadeInFromRight>
                    <ProjetoCardEsq
                        titulo={t('projetos.titulo-2')}
                        descricao={t('projetos.descricao-2')}
                        video='https://www.youtube.com/embed/I4VD4OwUhDw'
                    />
                </FadeInFromRight>

                <FadeInFromLeft>
                    <ProjetoCardEsq
                        titulo={t('projetos.titulo-3')}
                        descricao={t('projetos.descricao-3')}
                        video='https://www.youtube.com/embed/I4VD4OwUhDw'
                    />
                </FadeInFromLeft>

                <FadeInFromRight>
                    <ProjetoCardEsq
                        titulo={t('projetos.titulo-4')}
                        descricao={t('projetos.descricao-4')}
                        video='https://www.youtube.com/embed/I4VD4OwUhDw'
                    />
                </FadeInFromRight>

                <FadeInFromLeft>
                    <ProjetoCardEsq
                        titulo={t('projetos.titulo-5')}
                        descricao={t('projetos.descricao-5')}
                        video='https://www.youtube.com/embed/I4VD4OwUhDw'
                    />
                </FadeInFromLeft>
            </div>
        </div>
    )
}

export default Projetos;
