import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CustomMotionDivProps {
  showPage: boolean;
  children: ReactNode;
}

export const CustomMotionDiv: React.FC<CustomMotionDivProps> = ({
  showPage,
  children,
}) => {
  return showPage ? (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: {
          y: -20,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
            opacity: { duration: 0.4 },
          },
        },
      }}
    >
      {children}
    </motion.div>
  ) : null;
};

export default CustomMotionDiv;
