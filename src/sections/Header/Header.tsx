import { FadeInFromBottom, RoundPic } from '../../components';
import { useTranslation } from 'react-i18next';
import fotoCapa from '../../assets/foto-capa.webp';
import './header.css';

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio__header' id='home'>
            <div className='portfolio__header-content'>
                <FadeInFromBottom>
                    <div className='portfolio__header-content_info'>
                        <RoundPic
                            image={fotoCapa}
                            alt={t('capa.alt')}
                        />
                        <h1>{t('capa.nome')}</h1>
                        <h2>{t('capa.descricao')}</h2>
                    </div>
                </FadeInFromBottom>
            </div>
        </div>
    )
}

export default Header;
