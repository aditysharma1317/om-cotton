// src/pages/BlogDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { client, GET_POST_BY_SLUG } from '../api/hashnode';

interface PostDetail {
  title: string;
  brief: string;
  content: { html: string };
  coverImage: { url: string };
  publishedAt: string;
  author: { name: string; profilePicture: string; role?: string; bio?: string; socialLinks?: { twitter?: string; linkedin?: string; website?: string } };
  tags?: string[];
  relatedArticles?: { id: number; title: string; excerpt: string; category: string; readTime: string; date: string; author: string; image: string }[];
}

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    client
      .request<{ publication: { post: PostDetail } }>(GET_POST_BY_SLUG, { slug })
      .then(res => setPost(res.publication.post))
      .catch(err => console.error('Hashnode fetch error:', err))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Om-Cottons`;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', post.brief);
    }
  }, [post]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>;
  if (!post) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">Article not found.</p></div>;

  const tags = post.tags ?? [];
  const related = post.relatedArticles ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">

        {/* Back to Blog */}
        <div className="mb-8">
          <Link to="/blogs" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <i className="fas fa-arrow-left mr-2" /> Back to Blog
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={post.coverImage.url} alt={post.title} className="w-full h-[500px] object-cover object-top" />
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex items-center mb-4">
              {tags[0] && <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mr-3">{tags[0]}</span>}
              <span className="text-gray-500 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <div className="flex items-center mb-8">
              {/* <img src={post.author.profilePicture} alt={post.author.name} className="w-12 h-12 rounded-full mr-4 object-cover" /> */}
              <div>
                <p className="font-medium text-gray-900">By {post.author.name}</p>
                {post.author.role && <p className="text-gray-600 text-sm">{post.author.role}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Article + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div
                className="max-w-3xl mx-auto prose prose-lg prose-indigo"
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              ></div>
              {/* Tags */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">{tag}</span>)}
                </div>
              </div>
            </article>

            {/* Related Articles */}
            {related.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {related.map(a => (
                    <article key={a.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer">
                      <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">{a.category}</span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{a.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{a.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{a.author}</span><span>{a.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Comments Section (static) */}
            {/* ...existing comment JSX as before... */}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Share Widget */}
            {/* Table of Contents, Newsletter, etc. keep your original JSX */}
          </div>
        </div>

        {/* Back to top */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors cursor-pointer">
          <i className="fas fa-arrow-up"></i>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
