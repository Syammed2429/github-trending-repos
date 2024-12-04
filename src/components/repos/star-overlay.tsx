import { AnimatedStar } from "../background/animated-star";

export const StarryOverlay = () => {
    return (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent" />
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{
                        left: `${Math.random() * 80}%`,
                        top: `${Math.random() * 80}%`,
                        transform: 'scale(0.4)',
                        transition: `all ${0.2 + i * 0.1}s ease-out`,
                    }}
                >
                    <AnimatedStar delay={i * 0.15} />
                </div>
            ))}
        </div>
    );
};