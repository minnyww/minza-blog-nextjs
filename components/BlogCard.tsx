"use client";

import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }: any) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/3 mb-4 md:mb-0 md:pr-4">
          <Image
            src={post.image || "/placeholder.svg?height=200&width=300"}
            alt={`Cover image for ${post.title}`}
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-[200px]"
            // onError={(e) => {
            //   e.currentTarget.src =
            //     "/placeholder.svg?height=200&width=300";
            // }}
          />
        </div>
        <div className="md:w-2/3">
          <Link
            href={`/posts/${post.slug}`}
            className="text-2xl font-semibold hover:underline block mb-2"
          >
            {post.title}
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {post.date}
          </p>
          <p className="mb-4">{post.excerpt}</p>
          <Link
            href={`/posts/${post.slug}`}
            className="text-primary hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
