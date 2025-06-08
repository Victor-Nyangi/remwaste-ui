import { SkipCardSkeleton } from "@/components/skip-card";
import React from "react";

/**
 * Shows loading skeleton as data gets fetched from the API.
 */
export default function SkeleteonLoader() {
  return (
    <>
      <section className="min-h-screen my-[6rem] bg-background transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkipCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
