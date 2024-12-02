// components/ui/articles.tsx
import React from 'react';

interface Article {
  title: string;
  description: string;
  link: string;
}

const articles: Article[] = [
  {
    title: 'The Future of AI in Technology',
    description: 'Exploring the advancements and implications of artificial intelligence in various sectors.',
    link: 'https://example.com/future-of-ai',
  },
  {
    title: 'Web Development Trends in 2023',
    description: 'A look at the latest trends in web development and what to expect in the coming years.',
    link: 'https://example.com/web-development-trends',
  },
  {
    title: 'Understanding Cloud Computing',
    description: 'An overview of cloud computing concepts and its benefits for businesses.',
    link: 'https://example.com/cloud-computing',
  },
];

export function Articles() {
  return (
    <section id="articles" className="container py-24 sm:py-32">
      <h2 className="text-2xl font-bold text-center">Latest Articles</h2>
      <div className="mt-8 space-y-8">
        {articles.map((article, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="mt-2 text-muted-foreground">{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}