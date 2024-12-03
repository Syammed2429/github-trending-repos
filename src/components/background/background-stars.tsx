import { motion } from 'motion/react';
import { AnimatedStar } from './animated-star';


interface StarBackgroundProps {
    count?: number;
}

export const StarBackground = ({ count = 20 }: StarBackgroundProps) => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    }}
                    animate={{
                        y: [null, window.innerHeight + 100],
                        x: (i % 2 === 0) ? '+=100' : '-=100'
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                >
                    <AnimatedStar
                        size={8 + Math.random() * 8}
                        delay={Math.random() * 2}
                    />
                </motion.div>
            ))}
        </div>
    );
}