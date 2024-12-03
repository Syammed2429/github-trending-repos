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
        <div className="fixed bottom-4 right-4 max-w-sm bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg shadow-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    API rate limit exceeded. Reset in {minutesRemaining} minute{minutesRemaining !== 1 ? 's' : ''}.
                </p>
            </div>
        </div>
    );
}