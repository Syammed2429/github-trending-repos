# GitHub Repository Explorer

A modern React application that showcases trending GitHub repositories with real-time updates, infinite scrolling, and a beautiful user interface. Built with React 18, TypeScript, and Tailwind CSS.

![GitHub Explorer Screenshot](https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200)

[Live Link](https://github-trending-repos-delta.vercel.app/)

## ✨ Features

- 🔍 Real-time repository search with debouncing
- 🏷️ Filter repositories by programming language
- 🌓 Dark/Light theme with system preference support
- ♾️ Infinite scrolling for seamless browsing
- 📱 Fully responsive design (320px to 1440px+)
- ⚡ Optimized performance with React Query caching
- 🎭 Smooth animations using Framer Motion
- 🚀 Built with modern React 18 and TypeScript
- 📊 GitHub API rate limit monitoring
- 💅 Beautiful UI with Tailwind CSS and shadcn/ui

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 7.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Syammed2429/github-trending-repos.git
cd github-trending-repos
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Built With

- [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://motion.dev/) - A production-ready motion library
- [TanStack Query](https://tanstack.com/query/latest) - Powerful asynchronous state management
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind
- [Axios](https://axios-http.com/) - Promise based HTTP client
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons

## 📖 Usage

### Searching Repositories

Use the search bar to find repositories by name or description:

```typescript
// Example search functionality
    const debouncedOnChange = useDebouncedCallback(
        (value: string) => {
            onChange(value);
        },
        300
    );
```

### Filtering by Language

Select a programming language from the dropdown to filter repositories:

```typescript
// Example language filtering
const handleValueChange = (newValue: string) => {
        onChange(newValue === 'all' ? '' : newValue);
    };
```

### Theme Switching

Toggle between light and dark themes:

```typescript
// Example theme switching
const { theme, setTheme } = useTheme();
setTheme(theme === 'light' ? 'dark' : 'light');
```


## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## 📝 Configuration

The application can be configured through environment variables:

```env
VITE_GITHUB_API_URL=https://api.github.com
VITE_ITEMS_PER_PAGE=10
```

## ⚙️ Architecture

The project follows a modular architecture:

```
src/
├── components/     # Reusable UI components
├── container/      # Feature-specific containers
├── hooks/         # Custom React hooks
├── types/         # TypeScript interfaces
├── utils/         # Helper functions
└── config/        # Configuration files
```

## 🔒 Rate Limiting

The application includes built-in handling for GitHub API rate limits:
- Monitors remaining API calls
- Shows visual feedback when approaching limits
- Implements exponential backoff for retries
- Caches responses to minimize API usage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

 [@GitHub](https://github.com/Syammed2429)

Project Link: [https://github.com/Syammed2429/github-trending-repos/](https://github.com/Syammed2429/github-trending-repos/)

## 🙏 Acknowledgments

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)