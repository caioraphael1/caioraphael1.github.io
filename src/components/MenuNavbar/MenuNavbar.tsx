import { useTranslation } from 'react-i18next';
import './menuNavbar.css';

const MenuNavbar = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio__menuNavbar'>
            <>
                <p><a href="#home">{t('menu.inicio')}</a></p>
                <p><a href="#about">{t('menu.sobre')}</a></p>
                <p><a href="#skills">{t('menu.qualificacoes')}</a></p>
                <p><a href="#projects">{t('menu.projetos')}</a></p>
                <p><a href="#contact">{t('menu.contato')}</a></p>
            </>    
        </div>
    )
}

export default MenuNavbar;
