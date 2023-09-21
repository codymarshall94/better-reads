import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-start">
        <h2 className="text-2xl text-[#76DF3C]">&#91;News you choose&#93;</h2>
        <h1 className="text-8xl md:text-9xl">
          Bette<span className="text-[#9015D5]">R</span>eads
        </h1>
        <Link
          href="/news"
          className="text-center border-b-2 border-[#76DF3C] py-2 hover:bg-[#76DF3C] hover:text-[#9015D5] transition 550 ease-in-out text-lg"
        >
          Read Now
        </Link>
      </div>
    </div>
  );
}
