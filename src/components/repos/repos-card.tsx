import { Star } from 'lucide-react';
import { Card, CardHeader, CardFooter } from '@/components/ui/card';
import { motion } from 'motion/react';
import { Repository } from '@/types/github';
import { StarryOverlay } from './star-overlay';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { LanguageBadge } from './language-badge';

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
            className="group"
        >
            <Card className="relative h-[10rem] overflow-hidden">
                <StarryOverlay />
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <a
                                href={repository.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="line-clamp-1 text-xl font-semibold text-primary hover:underline"
                            >
                                {repository.name}
                            </a>
                            <p className="line-clamp-2 text-muted-foreground">
                                {repository.description || 'No description available'}
                            </p>
                        </div>
                        <div className="flex items-center space-x-1 rounded-full bg-secondary/50 px-2.5 py-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">
                                {repository.stargazers_count.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </CardHeader>
                <CardFooter className="absolute -bottom-2 flex w-full items-center justify-between space-x-4 text-sm text-muted-foreground">
                    <a
                        href={repository.owner.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center transition-colors hover:text-primary"
                    >
                        <Avatar className="mr-2 h-6 w-6 rounded-full">
                            <AvatarImage src={repository.owner.avatar_url} />
                            <AvatarFallback>{repository.owner.login}</AvatarFallback>
                        </Avatar>
                        <span>{repository.owner.login}</span>
                    </a>
                    {repository.language && <LanguageBadge language={repository.language} />}
                </CardFooter>
            </Card>
        </motion.div>
    );
};
