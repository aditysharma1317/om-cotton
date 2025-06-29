// Updated Blogs.tsx to handle missing fields
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { GET_POSTS } from '../api/hashnode';

interface PostSummary {
  id: string;
  title: string;
  brief?: string | null; // Make optional
  slug: string;
  coverImage?: { url: string } | null;
  publishedAt: string;
  author: { name: string };
}

const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gql.hashnode.com/?_=${Date.now()}`, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
      body: JSON.stringify({
        query: GET_POSTS,
        variables: { first: 20 },
      }),
    })
      .then(res => res.json())
      .then(json => {
        console.log('🔄 posts response:', json);
        const nodes = json.data.publication.posts.edges.map((e: any) => e.node);
        setPosts(nodes);
      })
      .catch(err => console.error('Hashnode error:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading articles…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No articles found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link to={`/blogs/${post.slug}`} key={post.slug}>
                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    {post.coverImage?.url ? (
                      <img
                        src={post.coverImage.url}
                        alt={post.title}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.brief || 'No description available'}
                    </p>
                    <div className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()} by{' '}
                      {post.author.name}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;