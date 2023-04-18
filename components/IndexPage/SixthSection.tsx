import Link from "next/link";
import React from "react";
import BlogLink from "./SixthSection_Children/BlogLink";

export default function SixthSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-[10%] py-12">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl">Our blog</h1>
        <Link href="/" className="p-4 py-2 bg-red-600 rounded-lg">
          All articles
        </Link>
      </div>
      <p className="my-4 text-gray-400">
        We share news from the IT world, insiders of our studio and revive the
        genre of text interviews
      </p>

      <div className="grid grid-cols-2 auto-rows-fr gap-3 py-3">
        {[1, 2].map((ele, ind) => {
          return <BlogLink key={ind + "blog-link"} />;
        })}
      </div>
    </div>
  );
}
