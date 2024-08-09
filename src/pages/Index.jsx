import { useState } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', content: 'This is the content of my first blog post...', date: '2023-04-01' },
  { id: 2, title: 'Reflections on React', content: 'React has been an amazing journey...', date: '2023-04-15' },
  { id: 3, title: 'The Joy of Coding', content: 'Coding brings me so much joy because...', date: '2023-05-01' },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">My Personal Blog</h1>
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full p-2 mb-8 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="mb-4">{post.content.substring(0, 150)}...</p>
              <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
