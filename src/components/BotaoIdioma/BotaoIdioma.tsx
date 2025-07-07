import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './botaoIdioma.css';

const BotaoIdioma = () => {
    const { i18n, t } = useTranslation();
    
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className='portfolio__botaoIdioma'>
            <Globe size={20} color="#f3f3f3" style={{ marginRight: '0.5em' }} />
            <p onClick={() => changeLanguage('en')}>{t('botao-idioma.en')}</p>
            <p onClick={() => changeLanguage('pt')}>{t('botao-idioma.pt')}</p>
        </div>
    )
}

export default BotaoIdioma;
