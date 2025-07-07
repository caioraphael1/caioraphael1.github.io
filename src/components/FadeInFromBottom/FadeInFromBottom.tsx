import React from 'react';
import { motion } from 'framer-motion';

type FadeInFromBottomProps = {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    offsetY?: number;
};

const FadeInFromBottom: React.FC<FadeInFromBottomProps> = ({
    children,
    delay = 0,
    duration = 1,
    offsetY = 50
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: offsetY }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInFromBottom;
