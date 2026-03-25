import { LinkStatusEnum, type Link } from '@/components/LinkEntry';
import { Articles } from '@/pages/Articles';
import { defineUrl } from '@/utils/utils';
import { texts as ArticleTexts } from '../articles/texts';
import { texts as BlogTexts } from '../blog/texts';

export const links: Link[] = [
    {
        name: 'articles',
        url: defineUrl('/articles'),
        element: Articles,
        status: LinkStatusEnum.Active,
        size: '2+',
        icon: 'folder',
        texts: ArticleTexts,
    },
    {
        name: 'blog',
        url: defineUrl('/blog'),
        status: LinkStatusEnum.NotReady,
        size: '0',
        icon: 'folder',
        texts: BlogTexts,
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/brunnofoggia',
        status: LinkStatusEnum.Active,
        size: '-',
        icon: 'instagram',
        external: true,
        texts: [
            {
                lang: 'en',
                title: 'Instagram',
                description: 'Photos, stories and reels',
                category: 'Social',
            },
            {
                lang: 'br',
                title: 'Instagram',
                description: 'Fotos, stories e reels',
                category: 'Social',
            },
        ],
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/brunnofoggia',
        status: LinkStatusEnum.Active,
        size: '-',
        icon: 'linkedin',
        external: true,
        texts: [
            {
                lang: 'en',
                title: 'LinkedIn',
                description: 'Professional network and career',
                category: 'Professional',
            },
            {
                lang: 'br',
                title: 'LinkedIn',
                description: 'Rede profissional e carreira',
                category: 'Professional',
            },
        ],
    },
    {
        name: 'github',
        url: 'https://github.com/brunnofoggia',
        status: LinkStatusEnum.Active,
        size: '-',
        icon: 'github',
        external: true,
        texts: [
            {
                lang: 'en',
                title: 'GitHub',
                description: 'Open source projects and code',
                category: 'Dev',
            },
            {
                lang: 'br',
                title: 'GitHub',
                description: 'Projetos open source e código',
                category: 'Dev',
            },
        ],
    },
];

export const internalLinks = links.filter((link) => !link.external && !!link.element);
