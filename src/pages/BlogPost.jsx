import { useParams, Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', content: 'This is the content of my first blog post. It\'s been an exciting journey starting this blog, and I can\'t wait to share more of my thoughts and experiences with you all.', date: '2023-04-01' },
  { id: 2, title: 'Reflections on React', content: 'React has been an amazing journey. The component-based architecture and the virtual DOM have revolutionized the way we build user interfaces. In this post, I\'ll share some of my favorite React features and patterns.', date: '2023-04-15' },
  { id: 3, title: 'The Joy of Coding', content: 'Coding brings me so much joy because it allows me to create something from nothing. The problem-solving aspect, the constant learning, and the satisfaction of seeing your code come to life are all part of what makes coding such a rewarding experience.', date: '2023-05-01' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="text-blue-500 hover:underline">&larr; Back to all posts</Link>
          <ThemeToggle />
        </div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.date}</p>
        <p className="mb-4">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
