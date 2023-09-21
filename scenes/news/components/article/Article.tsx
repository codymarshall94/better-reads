"use client";

import getArticles from "@/hooks/getArticles";
import { useState } from "react";

type ArticleProps = {
  topic: string;
};

export default function Article({ topic }: ArticleProps) {
  const [currentArticle, setCurrentArticle] = useState<number>(0);
  const [currentResults, setCurrentResults] = useState<number>(1);
  const { data: articles, loading, error } = getArticles(topic, currentResults);

  const handleNextArticle = () => {
    if (currentArticle === articles.length - 1) {
      return;
    }
    setCurrentArticle((prev) => prev + 1);
  };

  if (loading) return <div className="text-6xl">Loading...</div>;

  if (articles && articles.articles.length > 0) {
    const article = articles.articles[currentArticle];

    return (
      <div className="flex flex-col items-start max-w-screen-lg">
        <div className="flex flex-row justify-between items-baseline w-48">
          <h3 className="text-2xl">{article?.author || "No Author"}</h3>
          <h5>{new Date(article.publishedAt).toLocaleDateString()}</h5>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl">{article.title}</h1>
          <div className="h-1 w-full bg-[#76DF3C] my-2"></div>
          <h4 className="text-2xl">{article.description}</h4>
        </div>
        <a
          href={article.url}
          target="_blank"
          className="bg-[#9015D5] p-4 text-xl mt-2"
        >
          Read full &gt;&gt;
        </a>
        <div className="absolute bottom-2 right-2">
          <button
            className="hover:text-[#9015D5] text-4xl transition 300 ease-in-out"
            onClick={handleNextArticle}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
