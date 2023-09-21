import Link from "next/link";
import React from "react";

const topics = [
  {
    id: 1,
    name: "business",
  },
  {
    id: 2,
    name: "entertainment",
  },
  {
    id: 3,
    name: "general",
  },
  {
    id: 4,
    name: "health",
  },
  {
    id: 5,
    name: "science",
  },
  {
    id: 6,
    name: "sports",
  },
  {
    id: 7,
    name: "technology",
  },
];

export default function Topics() {
  return (
    <>
      <h1 className="text-6xl md:text-9xl p-2">Find Trending News in</h1>
      <div className="h-1 w-full bg-[#76DF3C] mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
        {topics.map((topic) => (
          <Link
            href={`/news/${topic.name}`}
            className="text-4xl hover:text-[#9015D5] transition 300 ease-in"
          >
            {topic.name}
          </Link>
        ))}
      </div>
    </>
  );
}
