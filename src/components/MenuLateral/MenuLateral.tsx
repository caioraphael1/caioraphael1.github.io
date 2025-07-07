import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { BotaoIdioma, MenuNavbar } from '../../components';
import './menuLateral.css';
import './animations.css';

const MenuLateral = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [closingMenu, setClosingMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuClose = () => {
        setClosingMenu(true);
        setTimeout(() => {
            setToggleMenu(false);
            setClosingMenu(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                handleMenuClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="portfolio__menuLateral">
            <div className="portfolio__menuLateral-btn">
                {toggleMenu ? (
                    <X size={28} color="#f3f3f3" onClick={handleMenuClose} />
                    ) : (
                    <Menu size={28} color="#f3f3f3" onClick={() => setToggleMenu(true)} />
                )}
            </div>

            {toggleMenu && (
                <>
                    <div
                        ref={menuRef}
                            className={`portfolio__menuLateral-container ${
                                closingMenu ? 'slide-in-right-menu' : 'slide-in-left'
                            }`}
                    >
                    <div className="portfolio__menuLateral-container_links">
                        <MenuNavbar />
                        <div className='portfolio__menuLateral-container_botaoIdioma'>
                            <BotaoIdioma />
                        </div>
                    </div>
                </div>
            <div
                className={`portfolio__menuLateral-overlay ${toggleMenu ? 'show' : ''}`}
                    onClick={handleMenuClose}
            ></div>
        </>
      )}
    </div>
  );
};

export default MenuLateral;
