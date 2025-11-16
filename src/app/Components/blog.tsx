'use client'

import { blogs } from '@/contents/blogs';
import Link from 'next/link';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

export default function Blogs() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.url}
              className="bg-white/90 dark:bg-dark/40 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Title */}
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {blog.title}
                </h3>
              </a>

              {/* Description (NOT white — readable) */}
              <p className="text-white-700 dark:text-gray-300 mb-4">
                {blog.excerpt}
              </p>
-
              {/* Meta info */}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-3">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {new Date(blog.date).toLocaleDateString()}
                </span>

                <span className="flex items-center">
                  <FaClock className="mr-2" />
                  {blog.readTime}
                </span>
              </div>

              {/* Platform badge */}
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {blog.platform}
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Posts
          </Link>
        </div>

      </div>
    </section>
  );
}
