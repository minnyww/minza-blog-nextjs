"use client";

import { Button } from "@/components/ui/button";

const FilterTag = ({ posts, tag }: any) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Filter by tag:</h3>
      <div className="flex flex-wrap gap-2">
        {Array.from(new Set(posts.flatMap((post: any) => post.tags || []))).map(
          (tag: any) => (
            <Button
              key={tag}
              variant={"outline"}
              size="sm"
              onClick={() => {
                const url = new URL(window.location.href);
                url.searchParams.set("tag", tag);
                url.searchParams.delete("page");
                window.location.href = url.toString();
              }}
            >
              {tag}
            </Button>
          )
        )}
        {tag && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const url = new URL(window.location.href);
              url.searchParams.delete("tag");
              url.searchParams.delete("page");
              window.location.href = url.toString();
            }}
          >
            Clear filter
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterTag;
