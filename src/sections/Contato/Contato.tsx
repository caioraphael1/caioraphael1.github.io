import { useTranslation } from 'react-i18next';
import { FadeInFromBottom } from '../../components';
import './contato.css';

const Contato = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio__contato' id='contact'>
            <FadeInFromBottom>
                <h1 className='portfolio__contato-titulo'>{t('contato.titulo')}</h1>
            </FadeInFromBottom>

            <FadeInFromBottom>
                <div className='portfolio__contato-infos'>
                    <p>{t('contato.titulo-email')}: <a href="mailto:email@email.com">{t('contato.email')}</a></p>
                    <p>{t('contato.titulo-discord')}: <a href="#">{t('contato.discord')}</a></p>
                    <p>{t('contato.titulo-github')}: <a href="https://github.com/caioraphael1">{t('contato.github')}</a></p>
                </div>
            </FadeInFromBottom>

            <FadeInFromBottom>
                <p className='portfolio__contato-dev'>{t('contato.dev')}: <a href="https://github.com/caioraphael1">{t('contato.github-dev')}</a></p>
            </FadeInFromBottom>
        </div>
    )
}

export default Contato;
