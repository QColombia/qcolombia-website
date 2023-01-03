import { useCallback } from "react";
import { BlogSection } from "../BlogSection";
import { CommunitySection } from "../CommunitySection";
import { HeroSection } from "../HeroSection";
import { MainSection } from "../MainSection";

const BLOG_SECTION_ID = 'home_blog_section';
const MAIN_SECTION_ID = 'home_main_section';
const COMMUNITY_SECTION_ID = 'home_community_section';

const HomeMain = () => {
  const onClickCTA = useCallback(() => {
    const sectionToScroll = document.getElementById(MAIN_SECTION_ID);
    sectionToScroll?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <HeroSection onClickCTA={onClickCTA} />
      <MainSection containerId={MAIN_SECTION_ID} />
      <BlogSection containerId={BLOG_SECTION_ID} />
      <CommunitySection containerId={COMMUNITY_SECTION_ID} />
    </>
  );
};

export default HomeMain;
