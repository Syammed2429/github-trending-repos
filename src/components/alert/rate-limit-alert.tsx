import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { getRateLimitInfo } from '@/utils/services/github-service';

export const RateLimitAlert = () => {
    const [rateLimitInfo, setRateLimitInfo] = useState(getRateLimitInfo());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRateLimitInfo(getRateLimitInfo());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!rateLimitInfo.isLimited) {
        return null;
    }

    const minutesRemaining = Math.ceil((rateLimitInfo.resetTime - Date.now()) / 1000 / 60);

    return (
        <div className="fixed bottom-4 right-4 max-w-sm rounded-lg border border-yellow-200 bg-yellow-50 p-4 shadow-lg dark:border-yellow-800 dark:bg-yellow-900/20">
            <div className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-yellow-500" />
                <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    API rate limit exceeded. Reset in {minutesRemaining} minute
                    {minutesRemaining !== 1 ? 's' : ''}.
                </p>
            </div>
        </div>
    );
};
