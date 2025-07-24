// components/BlogCard.js
import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <div className="blog-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-aos="fade-up" data-aos-delay={post.id * 100}>
      <div className="relative overflow-hidden h-48">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition duration-500 hover:scale-110" />
        <div className={`absolute top-4 right-4 ${post.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-indigo-600 transition">
          <Link href={post.link}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <div className="flex justify-between items-center">
          <Link href={post.link} className="text-indigo-600 font-semibold hover:underline">Read More</Link>
          <div className="flex space-x-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs hover:bg-indigo-600 hover:text-white transition">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}