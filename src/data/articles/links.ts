import { ArticleLink, LinkStatusEnum } from '@/components/LinkEntry';
import { defineUrl } from '@/utils/utils';

const baseUrl = defineUrl('/articles', null, true);
const links: ArticleLink[] = [
    {
        name: 'avoid not invented here',
        status: LinkStatusEnum.WIP,
        size: '1.0',
        icon: 'document',
        published: '2026-03-01',
        texts: [
            {
                lang: 'en',
                title: 'Avoid "Not Invented Here" (ANIH) syndrome',
                description: '"Not Invented Here" (NIH) syndrome is the tendency to reject external ideas, products, or knowledge',
                category: 'Social',
                content: 'This is the content of the article in English.',
                tags: ['nih', 'culture', 'collaboration'],
            },
            {
                lang: 'br',
                title: 'Evite a síndrome "Not Invented Here" (ANIH)',
                description: '"Não Inventado Aqui" (NIH) é a tendência de rejeitar ideias, produtos ou conhecimentos externos',
                category: 'Social',
                content: 'Este é o conteúdo do artigo em Português.',
            },
        ],
    },
    {
        name: 'structuring software better',
        status: LinkStatusEnum.NotReady,
        size: '1.0',
        icon: 'document',
        published: '2026-03-01',
        url: '-',
        texts: [
            {
                lang: 'en',
                // title: 'SS+: How to Better Structure Software Code',
                // description: 'SS+ is a software design approach that prioritizes modularity, separation of concerns, and maintainability.',
                title: 'SS+: ???',
                description: '---',
                category: 'Professional',
                content: 'This is the content of the article in English.',
            },
            {
                lang: 'br',
                // title: 'SS+: Como estruturar melhor o código de um software',
                // description:
                //     'SS+ é uma abordagem de design de software que prioriza a modularidade, a separação de responsabilidades e a manutenibilidade.',
                title: 'SS+: ???',
                description: '---',
                category: 'Professional',
                content: 'Este é o conteúdo do artigo em Português.',
            },
        ],
    },
    {
        name: 'coder experience',
        status: LinkStatusEnum.NotReady,
        size: '1.0',
        icon: 'document',
        published: '2026-03-01',
        url: '-',
        texts: [
            {
                lang: 'en',
                // title: 'CX: Coder Experience',
                // description: 'Improving the experience of software developers through better tools and practices.',
                category: 'Professional',
                title: 'CX: ???',
                description: '---',
                content: 'This is the content of the article in English.',
            },
            {
                lang: 'br',
                // title: 'CX: Coder Experience (Experiência do Programador)',
                // description: 'Melhorando a experiência dos desenvolvedores de software através de melhores ferramentas e práticas.',
                title: 'CX: ???',
                description: '---',
                category: 'Professional',
                content: 'Este é o conteúdo do artigo em Português.',
            },
        ],
    },
];

links.forEach((link) => {
    if (!link.slug) link.slug = link.name.toLowerCase().replace(/\s+/g, '-');
    if (!link.url) link.url = defineUrl(link.slug, baseUrl);
    // link.route = link.url.split('?')[0];
});

export { links };
