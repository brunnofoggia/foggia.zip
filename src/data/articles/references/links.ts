import { ArticleLink, LinkStatusEnum } from '@/components/LinkEntry';
import { defineUrl } from '@/utils/utils';

const baseUrl = defineUrl('/articles', null, true);
const links: ArticleLink[] = [
    {
        name: 'ref clean code',
        status: LinkStatusEnum.Active,
        size: '1.0',
        icon: 'document',
        published: '2026-03-01',
        texts: [
            {
                lang: 'en',
                title: 'Clean Code',
                description:
                    'Clean Code is a software development philosophy that emphasizes writing code that is easy to read, understand, and maintain.',
                category: 'Professional',
            },
            {
                lang: 'br',
                title: 'Clean Code (Código Limpo)',
                description:
                    'Código Limpo é uma filosofia de desenvolvimento de software que enfatiza escrever código que seja fácil de ler, entender e manter.',
                category: 'Professional',
            },
        ],
    },
    {
        name: 'ref solid principles',
        status: LinkStatusEnum.Active,
        size: '1.0',
        icon: 'document',
        published: '2026-03-01',
        texts: [
            {
                lang: 'en',
                title: 'SOLID Principles',
                description:
                    'SOLID is a set of design principles for object-oriented software development that aims to make software more maintainable and scalable.',
                category: 'Professional',
                content: 'This is the content of the article in English.',
            },
            {
                lang: 'br',
                title: 'Princípios SOLID',
                description:
                    'SOLID é um conjunto de princípios de design para desenvolvimento de software orientado a objetos que visa tornar o software mais manutenível e escalável.',
                category: 'Professional',
                content: 'Este é o conteúdo do artigo em Português.',
            },
        ],
    },
    {
        name: 'ref kiss yagni dry',
        status: LinkStatusEnum.Active,
        size: '1.0',
        icon: 'document',
        published: '2026-03-01',
        texts: [
            {
                lang: 'en',
                title: 'Design Principles: KISS, YAGNI, DRY',
                description: 'KISS, YAGNI, and DRY are software design principles that aim to improve code quality and maintainability.',
                category: 'Professional',
                content: 'This is the content of the article in English.',
            },
            {
                lang: 'br',
                title: 'Princípios de Design: KISS, YAGNI, DRY',
                description:
                    'KISS, YAGNI e DRY são princípios de design de software que visam melhorar a qualidade e a manutenibilidade do código.',
                category: 'Professional',
                content: 'Este é o conteúdo do artigo em Português.',
            },
        ],
    },
    {
        name: 'ref pdry',
        status: LinkStatusEnum.Active,
        size: '1.0',
        icon: 'document',
        published: '2026-03-01',
        texts: [
            {
                lang: 'en',
                title: 'A deep dive into DRY: Please do repeat yourself',
                description: 'basically give yourself the time and space to come up with the right abstractions',
                category: 'Professional',
                content: 'This is the content of the article in English.',
            },
            {
                lang: 'br',
                title: 'Um mergulho profundo no DRY: Por favor, repita-se',
                description: 'basicamente dê a si mesmo o tempo e o espaço para criar as abstrações corretas',
                category: 'Professional',
                content: 'Este é o conteúdo do artigo em Português.',
            },
        ],
    },
    {
        name: 'ref 8 principles',
        status: LinkStatusEnum.NotReady,
        size: '1.0',
        icon: 'document',
        published: '2027-04-01',
        texts: [
            {
                lang: 'en',
                title: '8 key coding principles',
                description: 'A simple and objective list of coding principles.',
                category: 'Professional',
                content: 'This is the content of the article in English.',
            },
            {
                lang: 'br',
                title: '8 princípios importantes de programação',
                description: 'Uma lista simples e objetiva de princípios de programação.',
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
