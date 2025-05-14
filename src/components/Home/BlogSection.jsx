import React from "react";
import { Link } from "react-router";
import Container from "../Container/Container";

const blogPosts = [
  {
    date: "22 March, 2024",
    author: "Md Sohag",
    comments: 14,
    title: "Low-Fidelity vs High-Fidelity Prototyping: A Complete Guide",
    image: "/src/assets/images/blogs/blog_1.png",
  },
  {
    date: "25 April, 2024",
    author: "Istiak Ahmed",
    comments: 26,
    title: "Who are you affiliated with?",
    image: "/src/assets/images/blogs/blog_2.png",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#0E0F11] text-white py-20 relative">
      <Container>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block border-[1px] border-[rgba(255, 255, 255, .3)] text-[#ccc] text-sm px-5 py-1 rounded-full uppercase mb-4 tracking-wider text-[18px]">
            News & Blogs
          </span>
          <h2 className="text-[40px] md:text-[60px] font-bold mb-14">
            Latest Blog Posts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group"
              >
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bottom-[-50px] p-6 flex flex-col justify-end group-hover:bottom-0 duration-300">
                  <div className="absolute top-4 left-4 bg-white text-black text-sm px-4 py-1 rounded font-semibold shadow-md">
                    {post.date}
                  </div>
                  <p className="text-md text-gray-300 mb-1 text-start">
                    {post.author} • {post.comments} Comments
                  </p>
                  <h3 className="text-[27px] font-semibold leading-tight text-start">
                    {post.title}
                  </h3>
                  <Link
                    href="#"
                    className="mt-2 text-md font-semibold underline text-start transition-all ease-in-out delay-100 duration-700"
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
