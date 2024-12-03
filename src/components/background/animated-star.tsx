import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface AnimatedStarProps {
    size?: number;
    delay?: number;
}

export const AnimatedStar = ({ size = 16, delay = 0 }: AnimatedStarProps) => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0.3 }}
            animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3],
            }}
            transition={{
                duration: 2,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Star size={size} className="text-yellow-400" />
        </motion.div>
    );
}