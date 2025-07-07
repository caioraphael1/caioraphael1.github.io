import { useTranslation } from 'react-i18next';
import { FadeInFromBottom } from '../../components';
// import { CursoCard, ExperienciaCard } from '../../components';
import './sobre.css';

const Sobre = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio__sobre' id='about'>
            <FadeInFromBottom>
                <div className='portfolio__sobre-header'>
                    <h1 className='portfolio__sobre-header_titulo'>{t('sobre.sobre-mim')}</h1>
                    <p className='portfolio__sobre-header_texto'>{t('sobre.texto-sobre')}</p>
                </div>
            </FadeInFromBottom>

            {/* dependendo da situação faz umas listas com esses caras pra iterar sobre
            <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
            >
                <div className='portfolio__sobre-cursos'>
                    <h2>{t('sobre.titulo-cursos')}</h2>

                    <CursoCard
                        titulo={t('sobre.titulo-curso-1')}
                        origem={t('sobre.origem-curso-1')}
                        descricao={t('sobre.descricao-curso-1')}
                    />

                    <CursoCard
                        titulo={t('sobre.titulo-curso-2')}
                        origem={t('sobre.origem-curso-2')}
                        descricao={t('sobre.descricao-curso-2')}
                    />

                    <CursoCard
                        titulo={t('sobre.titulo-curso-3')}
                        origem={t('sobre.origem-curso-3')}
                        descricao={t('sobre.descricao-curso-3')}
                    />
                </div>
            </motion.div>

            <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
            >
                <div className='portfolio__sobre-experiencias'>
                    <h2>{t('sobre.titulo-experiencias')}</h2>

                    <ExperienciaCard
                        titulo={t('sobre.titulo-experiencia-1')}
                        empresa={t('sobre.empresa-experiencia-1')}
                        descricao={t('sobre.descricao-experiencia-1')}
                    />

                    <ExperienciaCard
                        titulo={t('sobre.titulo-experiencia-2')}
                        empresa={t('sobre.empresa-experiencia-2')}
                        descricao={t('sobre.descricao-experiencia-2')}
                    />

                    <ExperienciaCard
                        titulo={t('sobre.titulo-experiencia-3')}
                        empresa={t('sobre.empresa-experiencia-3')}
                        descricao={t('sobre.descricao-experiencia-3')}
                    />
                </div>
            </motion.div> */}
        </div>
    )
}

export default Sobre;
