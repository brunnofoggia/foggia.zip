import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import { defineBaseUrl } from './utils/utils.ts';

import { NotFound } from './pages/NotFound.tsx';
import { Index } from './pages/Index.tsx';
import { Article } from './pages/Article.tsx';

import { internalLinks as InternalIndexLinks } from './data/index/links.ts';
import { links as ArticlesLinks } from './data/articles/links.ts';

const queryClient = new QueryClient();

const basename = defineBaseUrl();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="/" element={<Index />} />
                    {InternalIndexLinks.filter((link) => link.status !== 'notready').map((link) => {
                        const Element = link.element;
                        return <Route key={link.name} path={link.url} element={<Element link={link} />} />;
                    })}
                    {ArticlesLinks.filter((link) => link.status !== 'notready').map((link) => {
                        return <Route key={link.name} path={link.route} element={<Article slug={link.slug} />} />;
                    })}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
