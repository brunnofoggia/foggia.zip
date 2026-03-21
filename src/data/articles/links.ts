import { Text, type Link } from '@/components/LinkEntry';
import { defineUrl } from '@/utils/utils';

const baseUrl = defineUrl('/articles', null, true);
const links: Link[] = [
    {
        name: 'avoid not invented here',
        status: 'active',
        size: '1.0',
        icon: 'document',
        published: '2026-03-01',
        texts: [
            {
                lang: 'en',
                title: 'Avoid "Not Invented Here"',
                description: '"Not Invented Here" (NIH) syndrome is the tendency to reject external ideas, products, or knowledge',
                category: 'Social',
                content: 'This is the content of the article in English.',
            },
            {
                lang: 'br',
                title: 'Evite "Não Inventado Aqui"',
                description: '"Não Inventado Aqui" (NIH) é a tendência de rejeitar ideias, produtos ou conhecimentos externos',
                category: 'Social',
                content: 'Este é o conteúdo do artigo em Português.',
            },
        ],
    },
    {
        name: 'something else',
        status: 'notready',
        size: '1.0',
        icon: 'document',
        published: '2027-04-01',
        texts: [
            {
                lang: 'en',
                title: 'Something Else',
                description: 'Professional network and career',
                category: 'Professional',
                content: 'This is the content of the article in English.',
            },
            {
                lang: 'br',
                title: 'Algo Mais',
                description: 'Rede profissional e carreira',
                category: 'Professional',
                content: 'Este é o conteúdo do artigo em Português.',
            },
        ],
    },
];

links.forEach((link) => {
    if (!link.slug) link.slug = link.name.toLowerCase().replace(/\s+/g, '-');
    if (!link.url) link.url = defineUrl(link.slug, baseUrl);
    link.route = link.url.split('?')[0];
});

export { links };
