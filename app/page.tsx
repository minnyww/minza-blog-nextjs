import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";

export const metadata = {
  title: "Blog Posts",
  description: "List of all blog posts",
};

export default async function BlogList({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const posts = await getAllPosts();
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const postsPerPage = 5;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
      <ul className="space-y-8">
        {paginatedPosts.map((post) => (
          <li key={post.slug} className="border-b pb-8">
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} />
    </div>
  );
}
