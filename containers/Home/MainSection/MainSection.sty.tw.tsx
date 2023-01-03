import { GenericCTAAnchor } from "@components/GenericCTAButton";
import tw from "twin.macro";

export const MainSectionWrapper = tw.section`
  w-screen
  h-fit
  min-h-[670px]
  
  lg:min-h-fit
  lg:pt-36
  lg:pb-24
`;

export const MainMainContent = tw.div`
  container

  mx-auto
  my-auto

  h-fit

  flex
  flex-col
  justify-center
  items-center
  
  lg:flex-row
`;

export const MainDescription = tw.div`
  w-[100%]

  pr-16
  pb-16

  flex
  flex-col
  items-start
  justify-center

  lg:w-[50%]
  lg:pb-0
`;

export const MainMainTitle = tw.h1`
  text-2xl
  
  md:text-5xl
`;

export const MainMainDescription = tw.div`
  hidden

  mt-12

  text-stone-400

  md:inline-block
  lg:pr-48
`;

export const MainSectionCTA = tw(GenericCTAAnchor)`
  mt-12

  flex
  items-center
  gap-3
`;

export const MainSupportContent = tw.div`
  w-[100%]
  
  pl-0

  flex
  items-center
  justify-center

  md:pl-16
  lg:w-[50%]
  lg:justify-end
  lg:pl-0
`;

export const codeBlockWidthBreakPoints = {
  default: "100vw",
  md: "600px",
};
