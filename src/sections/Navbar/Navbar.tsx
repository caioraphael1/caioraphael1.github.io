import { useState, useEffect } from 'react';
import { BotaoIdioma, MenuLateral, MenuNavbar } from '../../components';
import './navbar.css';

const Navbar = () => {
    const [applyShadow, setApplyShadow] = useState(false);
    const [removeShadow, setRemoveShadow] = useState(false);

    useEffect(() => {
        const handleScrollBlur = () => {
            const scrollPosition = window.scrollY;
            const headerHeight = 0;

            if (scrollPosition > headerHeight && !applyShadow) {
                setApplyShadow(true);
                setRemoveShadow(false);
            } else if (scrollPosition <= headerHeight && applyShadow) {
                setApplyShadow(false);
                setRemoveShadow(true);
            }
    };
        window.addEventListener('scroll', handleScrollBlur);

        return () => {
            window.removeEventListener('scroll', handleScrollBlur);
        };
    }, [applyShadow, removeShadow]);

    return (
        <div className={`portfolio__navbar ${applyShadow ? 'navbar-shadow' : ''} ${removeShadow ? 'navbar-no-shadow' : ''}`}>
            <div className='portfolio__navbar-content'>
                <div className='portfolio__navbar-content_links'>
                    <MenuNavbar />
                </div>
                <div className='portfolio__navbar-content_menuLateral'>
                    <MenuLateral />
                </div>
                <div className='portfolio__navbar-content_botaoIdioma'>
                    <BotaoIdioma />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
