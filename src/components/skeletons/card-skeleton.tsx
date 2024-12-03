import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export const CardSkeleton = () => {
    return (
        <Card className="w-full">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <Skeleton className="h-6 w-3/4" />
                        <div className="mt-2 space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    </div>
                    <Skeleton className="h-8 w-16" />
                </div>
                <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center">
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="ml-2 h-4 w-20" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </CardContent>
        </Card>
    )
}

