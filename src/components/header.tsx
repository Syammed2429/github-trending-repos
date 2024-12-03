export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Trending Repos
                    </h1>
                    <div className="flex items-center gap-2">
                    </div>
                </div>
            </div>
        </header>
    );
}