import { Star } from 'lucide-react';
import { Card, CardHeader, CardFooter } from '@/components/ui/card';
import { motion } from 'motion/react';
import { Repository } from '@/types/github';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedStar } from '../background/animated-star';


interface RepositoryCardProps {
    repository: Repository;
}

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.02 }}

        >
            <Card className="h-[12rem] relative group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <CardHeader >
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <a
                                href={repository.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-semibold text-primary hover:underline line-clamp-1 text-ellipsis max-w-[70%]"
                            >
                                {repository.name}
                            </a>
                            <p className="text-muted-foreground line-clamp-2">
                                {repository.description || 'No description available'}
                            </p>
                        </div>
                        <div className="flex items-center space-x-1 bg-secondary/50 px-2.5 py-1 rounded-full">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">
                                {repository.stargazers_count.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </CardHeader>
                <CardFooter className="absolute bottom-0 flex items-center justify-between space-x-4 text-sm text-muted-foreground w-full">
                    <a
                        href={repository.owner.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-primary transition-colors"
                    >
                        <Avatar
                            className="w-6 h-6 rounded-full mr-2"
                        >
                            <AvatarImage src={repository.owner.avatar_url} />
                            <AvatarFallback>{repository.owner.login}</AvatarFallback>
                        </Avatar>

                        <span>{repository.owner.login}</span>
                    </a>
                    {repository.language && (
                        <span className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-primary/20 mr-1.5" />
                            {repository.language}
                        </span>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}