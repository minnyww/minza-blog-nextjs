"use client";

import Image from "next/image";
import Link from "next/link";
import ShineBorder from "./ui/shine-border";
import Particles from "./ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const BlogCard = ({ post }: any) => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      <ShineBorder
        className="relative flex flex-col md:flex-row md:items-center"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
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
            <div className="mb-2">
              {post.tags &&
                post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <Link
              href={`/posts/${post.slug}`}
              className="text-primary hover:underline"
            >
              Read more →
            </Link>
          </div>
        </div>
      </ShineBorder>
    </div>
  );
};

export default BlogCard;
