"use client";

import { Button } from "@/components/ui/button";

const Pagination = ({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) => {
  return (
    <div className="flex justify-between mt-8">
      <Button
        variant="outline"
        disabled={page <= 1}
        onClick={() => {
          const prevPage = Math.max(1, page - 1);
          window.location.href = `/?page=${prevPage}`;
        }}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        disabled={page >= totalPages}
        onClick={() => {
          const nextPage = Math.min(totalPages, page + 1);
          window.location.href = `/?page=${nextPage}`;
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
