import React, { useState } from 'react';
import './roundPic.css';

type RoundPicProps = {
    image: string; 
    alt: string;
};

const RoundPic: React.FC<RoundPicProps> = ({ image, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    return (
        <div
            className={`portfolio__round-pic ${isZoomed ? 'zoomed' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={image} alt={alt} />
        </div>
    )
}

export default RoundPic;
