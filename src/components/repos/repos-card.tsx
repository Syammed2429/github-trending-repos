import { Star} from 'lucide-react';
import { Card, CardHeader,  CardFooter } from '@/components/ui/card';
import { motion } from 'motion/react';
import { Repository } from '@/types/github';
import { StarryOverlay } from './star-overlay';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
            <Card className="h-[10rem] relative overflow-hidden">
                <StarryOverlay />
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <a
                                href={repository.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-semibold text-primary hover:underline line-clamp-1"
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
                <CardFooter className="absolute flex items-center justify-between w-full -bottom-2 space-x-4 text-sm text-muted-foreground">
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
                        <LanguageBadge language={repository.language} />
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}