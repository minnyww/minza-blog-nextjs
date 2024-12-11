import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { MDXComponents } from "@/components/mdx-components";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: any }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt || "A blog post",
  };
}

export default async function PostPage({ params }: { params: any }) {
  const getParams = await params;
  const post = await getPostBySlug(getParams.slug);
  console.log("post : ", post.content);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-sm text-gray-500 dark:text-gray-400 hover:underline mb-4 inline-block"
      >
        &larr; Back to all posts
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <span>{post.author}</span>
        <span>&bull;</span>
        <time dateTime={post.date}>
          {format(new Date(post.date), "MMMM d, yyyy")}
        </time>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={`Cover image for ${post.title}`}
          width={700}
          height={400}
          className="rounded-lg object-cover w-full h-[400px] mb-8"
          // onError={(e) => {
          //   e.currentTarget.src = "/placeholder.svg?height=400&width=700";
          // }}
        />
      )}
      <Suspense fallback={<>Loading...</>}>
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={post.content} components={MDXComponents} />
        </div>
      </Suspense>
    </article>
  );
}
