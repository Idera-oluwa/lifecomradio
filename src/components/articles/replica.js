"use client";
import React, { useState, useEffect } from "react";
import OnAir from "@/components/explore/onAir";
import Article from "@/components/articles/article";
import Continue from "@/components/articles/continue";
import { getSingleArticle } from "@/promises/article";

const replica = ({ params }) => {
  const [article, setArticle] = useState({});
  useEffect(() => {
    getSingleArticle(params.slug).then((result) => {
      setArticle(result);
    });
  }, []);
  return (
    <div className="md:mt-[6rem] mt-[3rem] pt-4 lg:pt-[7rem]">
      <OnAir />
      <Article article={article} />
      <Continue />
    </div>
  );
};

export default replica;
