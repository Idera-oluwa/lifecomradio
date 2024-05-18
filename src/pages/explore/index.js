import { useRouter } from "next/router";
import Hero from "@/components/explore/hero";
import OnAir from "@/components/explore/onAir";
import Podcasts from "@/components/explore/podcasts";
import News from "@/components/explore/news";
import Articles from "@/components/explore/articles";

const explore = () => {
    const locale=useRouter().locale;
  return (
    <div className="lg:pt-[7rem]">
      <Hero locale={locale} />
      <OnAir />
      <Podcasts />
      <News />
      <Articles />
    </div>
  );
};

export default explore;
