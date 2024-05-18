"use client";
import React, { useState, useEffect } from "react";
import OnAir from "@/components/explore/onAir";
import Article from "@/components/articles/article";
import Continue from "@/components/articles/continue";
import { getSingleArticle } from "@/promises/article";

const page = ({ slug }) => {
  const [article, setArticle] = useState({});
  useEffect(() => {
    getSingleArticle(slug).then((result) => {
      setArticle(result);
    });
  }, []);
  return (
    <div className="md:mt-[5rem] mt-[3rem] pt-4 lg:pt-[7rem]">
      <OnAir />
      <Article article={article} />
      <Continue />
    </div>
  );
};

export async function getServerSideProps(context) {
    const { slug } = context.params;
    return {
      props: { slug },
    };
  }

export default page;