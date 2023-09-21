import Article from "@/scenes/news/components/article/Article";
import React from "react";

type Params = {
  params: {
    topic: string;
  };
};

export default function TopicPage({ params }: Params) {
  return <Article topic={params.topic} />;
}
