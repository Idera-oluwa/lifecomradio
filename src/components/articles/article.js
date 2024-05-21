import React, { useState } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import { useRouter } from 'next/navigation';
import useClipboard from "react-use-clipboard";

const article = ({ article }) => {
  const router = useRouter();
  const [isCopied, setCopied] = useClipboard("Text to copy");
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const toggleLike = () => {
    setLike(true);
    setDislike(false);
  };
  const toggleDislike = () => {
    setDislike(true);
    setLike(false);
  };

  const goBack = () => {
    router.back();
  };
  return (
    <div className="w-[90vw] mx-auto mt-[1.5rem] md:mt-[8rem]">
      <img
        src="/images/explore/arrowback.png"
        alt=""
        className=" md:hidden"
        onClick={goBack}
      />
      <p className="font-semibold mt-4 md:mt-0 text-[12px] leading-4 text-white lg:text-[20px] lg:leading-[24px]">
        Articles
      </p>
      <div className="flex flex-row justify-between mt-[2rem] md:mt-[8rem] items-start">
        <div className="">
          <p className="font-semibold text-[14px] lg:text-[16px] text-white lg:leading-[19px] leading-3">
            {article.title}
          </p>
          <p className="font-medium text-[#777777] text-[10px] lg:text-[14px] mt-[0.3rem]">
            {moment(article.createdAt).format("DD/MM/YYYY")}
          </p>
        </div>
        <div className="flex flex-row gap-[1.5rem] items-center">
          {/* <div className="w-[136px] h-[53px] bg-[#324A5F4D] flex justify-center items-center gap-[1rem] rounded-[10px]">
            <img
              src={
                like
                  ? "/images/explore/likeFilled.svg"
                  : "/images/articles/like.png"
              }
              alt=""
              className="cursor-pointer"
              onClick={() => toggleLike()}
            />
            <img
              src={
                dislike
                  ? "/images/explore/unlikeFilled.svg"
                  : "/images/articles/dislike.png"
              }
              alt=""
              className="cursor-pointer mt-[0.5rem]"
              onClick={() => toggleDislike()}
            />
          </div> */}

          <img
            src="/images/articles/share-icon.svg"
            className="cursor-pointer w-6 h-6 md:w-auto md:h-auto"
          />
        </div>
      </div>

      <img
        src={article.coverImage?.url}
        alt=""
        className="mt-[2rem] w-[100vw] object-cover first-letter: h-[150px] lg:h-[470px] "
        onClick={setCopied}
      />
      <p>Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}</p>

      <RichText
        content={article.content ? article.content?.raw : []}
        renderers={{
          h1: ({ children }) => <h1 className="text-white">{children}</h1>,
          bold: ({ children }) => <strong>{children}</strong>,
          p: ({ children }) => (
            <p className="font-normal text-[10px] leading-4 lg:text-[18px] text-[#F5F5F5] lg:leading-[22px] mt-[2.2rem]">
              {children}
            </p>
          ),
        }}
      />
    </div>
  );
};

export default article;
