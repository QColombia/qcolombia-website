import { GenericCTAButton } from "@components/GenericCTAButton";
import tw from "twin.macro";

export const HeroSectionWrapper = tw.section`
  bg-cover
  bg-center

  flex
  flex-row 
  items-center 
  justify-between
  
  border-b-4 
  border-b-stone-800

  w-screen
  
  h-[100vh]
  min-h-[375px] 
  
  lg:min-h-[833px] 
  lg:pt-12
`;

export const HeroSectionTitle = tw.h1`
  text-left

  md:text-5xl
`;

export const HeroMainContent = tw.div`
  flex 
  flex-col 
  justify-center 
  items-start 

  overflow-hidden

  h-full 
  w-[90%] 

  lg:w-[50%]
  lg:pl-12 
  lg:pr-24 
`;

export const CTAButton = tw(GenericCTAButton)`
  flex
  items-center
  gap-3
  
  mt-20
`;

export const SideImageContainer = tw.div`
  bg-no-repeat
  bg-center
  bg-cover

  h-full

  lg:w-[50%]
`;

export const DescriptionText = tw.div`
  hidden
  
  mt-20

  text-left
  text-stone-400
  
  w-full

  md:inline-block

  lg:pr-72

  2xl:text-lg
`;

export const ArrowIcon = tw.span`
  ml-3
`;
