import React from 'react';
import { motion } from 'framer-motion';

type FadeInFromLeftProps = {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    offsetX?: number;
};

const FadeInFromLeft: React.FC<FadeInFromLeftProps> = ({
    children,
    delay = 0,
    duration = 1,
    offsetX = -50
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: offsetX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration, delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInFromLeft;
