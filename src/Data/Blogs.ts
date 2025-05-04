export interface BlogArticle {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    image: string;
    author: {
      name: string;
      image: string;
      role?: string;
      bio?: string;
      socialLinks?: {
        twitter?: string;
        linkedin?: string;
        website?: string;
      };
    };
    content?: { type: string; text?: string; url?: string; caption?: string }[];
    tags?: string[];
    relatedArticles?: { id: number; title: string; excerpt: string; image: string; author: string; date: string; category: string; readTime: string }[];
  }
  
  export const blogPosts: BlogArticle[] = [
    {
      id: 1,
      title: 'The Future of Sustainable Cotton Farming in 2025',
      excerpt: 'Discover how innovative farming techniques are revolutionizing the cotton industry while preserving our planet for future generations.',
      category: 'Sustainability',
      readTime: '5 min',
      date: 'May 1, 2025',
      tags: ['Sustainable Farming', 'AgTech'],
      author: {
        name: 'Emma Johnson',
        image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20woman%20with%20short%20brown%20hair%2C%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20natural%20smile&width=50&height=50&seq=author1&orientation=squarish',
        role: 'Senior Agricultural Scientist',
        bio: 'Emma Johnson is a renowned agricultural scientist...',
        socialLinks: {
          twitter: '#',
          linkedin: '#',
          website: '#',
        },
      },
      image: 'https://readdy.ai/api/search-image?query=sustainable%20cotton%20farming%20with%20modern%20technology%2C%20drone%20monitoring%20cotton%20fields%2C%20workers%20using%20tablets%2C%20lush%20green%20cotton%20plants%2C%20sustainable%20agriculture%20practices%2C%20bright%20sunlight%2C%20clear%20blue%20sky%2C%20photorealistic&width=400&height=250&seq=blog1&orientation=landscape'
    },
];
  