import { motion } from 'framer-motion'

const MotionWrap = ({ children }) => {
        const variants = {
                hidden: { opacity: 0, x: -200, y: 0 },
                enter: { opacity: 1, x: 0, y: 0 },
                exit: { opacity: 0, x: 0, y: -100 },
        }


        return (
                <motion.div variants={variants} 
                        initial="hidden" 
                        animate="enter" 
                        exit="exit" 
                        transition={{ type: 'linear' }}
                >
                        {children}
                </motion.div>
        )
}

export default MotionWrap