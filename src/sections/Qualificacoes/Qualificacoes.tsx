import { useTranslation } from 'react-i18next';
import { Network, Dot } from 'lucide-react';
import { FadeInFromBottom, QualificacaoCard } from '../../components';
import './qualificacoes.css';

const Qualificacoes = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio__qualificacoes' id='skills'>
            <FadeInFromBottom>
                <h1>{t('qualificacoes.titulo')}</h1>
            </FadeInFromBottom>

            <div className='portfolio__qualificacoes-container1'>
                <div className='portfolio__qualificacoes-container1_dots'>
                    <Dot size={64} color='#f3f3f3' />
                    <Dot size={64} color='#f3f3f3' />
                    <Dot size={64} color='#f3f3f3' />
                </div>

                <div className='portfolio__qualificacoes-container1_cards'>
                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-1')}
                        descricao={t('qualificacoes.skill-descricao-1')}
                        />

                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-2')}
                        descricao={t('qualificacoes.skill-descricao-2')}
                    />

                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-3')}
                        descricao={t('qualificacoes.skill-descricao-3')}
                    />
                </div>
            </div>

            <div className='portfolio__qualificacoes-container2'>
                <div className='portfolio__qualificacoes-container2_dots'>
                    <Dot size={64} color='#f3f3f3' />
                    <Dot size={64} color='#f3f3f3' />
                </div>

                <div className='portfolio__qualificacoes-container2_cards'>
                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-4')}
                        descricao={t('qualificacoes.skill-descricao-4')}
                        />

                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-5')}
                        descricao={t('qualificacoes.skill-descricao-5')}
                    />

                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-6')}
                        descricao={t('qualificacoes.skill-descricao-6')}
                    />
                </div>
            </div>

            <div className='portfolio__qualificacoes-container3'>
                <div className='portfolio__qualificacoes-container3_dots'>
                    <Dot size={64} color='#f3f3f3' />
                </div>

                <div className='portfolio__qualificacoes-container3_cards'>
                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-7')}
                        descricao={t('qualificacoes.skill-descricao-7')}
                        />

                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-8')}
                        descricao={t('qualificacoes.skill-descricao-8')}
                    />

                    <QualificacaoCard
                        icone={<Network size={40} color="#f3f3f3"  />}
                        titulo={t('qualificacoes.skill-titulo-9')}
                        descricao={t('qualificacoes.skill-descricao-9')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Qualificacoes;
