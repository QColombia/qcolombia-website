import { GenericCTAAnchor } from "@components/GenericCTAButton";
import tw from "twin.macro";

export const BlogSectionWrapper = tw.section`
  w-screen
  h-fit
  min-h-[670px]

  flex
  flex-col
  items-center
  justify-center

  py-20

  bg-stone-800

  lg:min-h-[833px]
`;

export const BlogSectionTitle = tw.h1`
  text-center
  text-3xl

  md:text-5xl
  lg:w-[60%]
`;

export const BlogPostGrid = tw.div`
  mt-24
  mb-12

  grid
  grid-cols-1
  gap-8

  md:grid-cols-2
  lg:grid-cols-3
`;

export const BlogCtaWrapper = tw.div`
  w-fit

  flex
  flex-row
  items-center
  justify-center
  gap-6
`;

export const BlogCtaTitle = tw.h3`
  text-center

  md:text-3xl
`;

export const BlogCtaButton = tw(GenericCTAAnchor)`
  flex
  items-center
  gap-3
`;
