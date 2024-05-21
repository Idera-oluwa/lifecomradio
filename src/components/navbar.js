"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import initTranslations from "@/i18n";
import i18nConfig from "../../i18nConfig";

const navbar = ({ locale, color }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentPathname = usePathname();

  const pathnamee = pathname.substring(3);

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [openDrop, setOpenDrop] = useState(false);
  const languageOptions = [
    { code: "en", name: "ENG" },
    { code: "fr", name: "FRA" },
    { code: "es", name: "ESP" },
    { code: "it", name: "ITA" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  initTranslations(locale, ["subscribe"]).then(({ t }) => {
    setText1(t("Home"));
    setText2(t("Explore"));
    setText3(t("Schedule"));
    setText4(t("About us"));
    setText5(t("Contact"));
  });


  const handleChange = (newLocale, languageCode) => {
    // const days = 30;
    // const date = new Date();
    // date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    // const expires = '; expires=' + date.toUTCString();
    // document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    if (locale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      console.log(newLocale);
      document.cookie = `NEXT_LOCALE=${newLocale}; max-age=31536000; path=/`;
      router.push("/" + newLocale + pathnamee);
    } else {
      document.cookie = `NEXT_LOCALE=${newLocale}; max-age=31536000; path=/`;
      router.push(currentPathname.replace(`/${locale}`, `/${newLocale}`));
    }
  };

  const gotoLink = (Link) => {
    setOpen(false);
    router.push(Link);
  };

  return (
    <div className={`w-full px-[5vw] mx-auto py-[1rem] flex justify-between items-center fixed top-0 left-0 right-0 bg-[${color}] z-[10000]`}>
      <img
        src="/images/home/logo.svg"
        alt=""
        className="w-[27px] h-[27px] md:w-[56px] md:h-[56px]"
      />
      <ul className="hidden md:flex flex-row gap-[1.5rem] items-center">
        <Link href="/" locale={locale}>
          <li
            className={`font-normal text-[16px] leading-[19px] cursor-pointer hover:text-[#145C9B] ${
              pathnamee === "/" || pathname.length === 3
                ? "text-[#145C9B]"
                : "bg-transparent text-white "
            }
      `}
          >
            {text1}
          </li>
        </Link>
        <Link href="/explore" locale={locale}>
          <li
            className={`font-normal text-[16px] leading-[19px] cursor-pointer hover:text-[#145C9B]
               ${
                 pathnamee.startsWith("/explore")
                   ? "text-[#145C9B]"
                   : "bg-transparent text-white "
               }`}
          >
            {text2}
          </li>
        </Link>
        <Link href="/schedule" locale={locale}>
          <li
            className={`font-normal text-[16px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${
              pathnamee === "/schedule"
                ? "text-[#145C9B]"
                : "bg-transparent text-white "
            }`}
          >
            {text3}
          </li>
        </Link>
        <Link href="/about" locale={locale}>
          <li
            className={`font-normal text-[16px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${
              pathnamee === "/about"
                ? "text-[#145C9B]"
                : "bg-transparent text-white "
            }`}
          >
            {text4}
          </li>
        </Link>
        <Link href="/get-in-touch" locale={locale}>
          <li
            className={`font-normal text-[16px] leading-[19px] cursor-pointer  hover:text-[#145C9B] ${
              pathnamee === "/get-in-touch"
                ? "text-[#145C9B]"
                : "bg-transparent text-white "
            }`}
          >
            {text5}
          </li>
        </Link>
      </ul>
      <div className="hidden md:flex flex-row gap-[1rem] items-center">
        <img src="/images/home/earth.svg" alt="" />
        <div className="flex  flex-row gap-[0.2rem] items-center">
          <p
            className="font-medium text-[16px] text-white leading-[19px] cursor-pointer"
            onClick={() => setOpenDrop(!openDrop)}
          >
            {
              languageOptions.find((lang) => lang.code === selectedLanguage)
                ?.name
            }
          </p>
          <img
            src="/images/home/caret.svg"
            className="cursor-pointer"
            alt=""
            onClick={() => setOpenDrop(!openDrop)}
          />
          <div
            className={`w-[144px] transition-transform duration-300 ease-in text-white absolute right-1 shadow-[0_2px_2px_0_rgba(80,80,80,0.67)] bg-[#0C1821] top-[80px]    py-4 flex flex-col gap-3 justify-center items-center ${
              openDrop ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            {languageOptions
              .filter((lang) => lang.code !== selectedLanguage)
              .map((language, index) => (
                <h2
                  key={index}
                  className="text-white cursor-pointer"
                  onClick={() => handleChange(language.code, language.name)}
                >
                  {language.name}
                </h2>
              ))}
          </div>
        </div>
      </div>
      <div className="relative md:hidden">
        <img
          src="/images/home/menubar.svg"
          alt=""
          className={`${
            open ? "md:hidden hidden" : "md:hidden block"
          } cursor-pointer`}
          onClick={() => {
            setOpen(true);
          }}
        />
        <img
          onClick={() => {
            setOpen(false);
          }}
          src="/images/explore/close.svg"
          alt=""
          className={`${
            open ? "md:hidden block" : "md:hidden hidden"
          } cursor-pointer`}
        />
        {open ? (
          <div className="absolute bg-[#081A27] right-0 top-[2rem] w-[150px] flex flex-col">
            <div
              onClick={() => gotoLink("/")}
              className="cursor-pointer flex  py-2 pl-[26px] items-center gap-[25px] border border-[#324A5F]"
            >
              <img src="/images/explore/home.svg" alt="" />
              <span className=" text-white text-[10px] leading-3 ">HOME</span>
            </div>
            <div
              onClick={() => gotoLink("/explore")}
              className="cursor-pointer flex py-2 pl-[26px] items-center gap-[25px] border border-[#324A5F]"
            >
              <img src="/images/explore/explore-icon.svg" alt="" />
              <span className=" text-white text-[10px] leading-3 ">
                EXPLORE
              </span>
            </div>
            <div
              onClick={() => gotoLink("/schedule")}
              className="cursor-pointer flex py-2 pl-[26px] items-center gap-[25px] border border-[#324A5F]"
            >
              <img src="/images/explore/schedule.svg" alt="" />
              <span href="" className=" text-white text-[10px] leading-3 ">
                SCHEDULE
              </span>
            </div>
            <div
              onClick={() => gotoLink("/about")}
              className="cursor-pointer flex py-2 pl-[26px] items-center gap-[25px] border border-[#324A5F]"
            >
              <img src="/images/explore/about-icon.svg" alt="" />
              <span href="/" className=" text-white text-[10px] leading-3 ">
                ABOUT US
              </span>
            </div>
            <div
              onClick={() => gotoLink("/get-in-touch")}
              className="cursor-pointer flex py-2 pl-[26px] items-center gap-[25px] border border-[#324A5F]"
            >
              <img src="/images/explore/contact-icon.svg" alt="" />
              <span className=" text-white text-[10px] leading-3 ">
                CONTACT
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default navbar;
