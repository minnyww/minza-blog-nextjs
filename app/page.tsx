import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import FilterTag from "@/components/FilterTag";

export const metadata = {
  title: "Minza Blog",
  description: "Web Blog For Everyone",
};

export default async function BlogList({
  searchParams,
}: {
  searchParams: any;
}) {
  const posts = await getAllPosts();
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const tag = params.tag;
  const filteredPosts = tag
    ? posts.filter((post) => post.tags && post.tags.includes(tag))
    : posts;

  const postsPerPage = 5;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
      <FilterTag posts={posts} tag={tag} />
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
