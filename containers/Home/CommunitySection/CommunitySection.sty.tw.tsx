import tw from "twin.macro";

export const CommunitySectionWrapper = tw.section`
  h-fit
  min-h-[670px]
  w-screen

  py-24
  
  lg:min-h-fit
`;

export const CommunityItemsContainer = tw.div`
  h-fit
  container

  mx-auto
  my-auto

  flex
  flex-row
  justify-center
  items-start
  gap-6
`;

export const CommunityItemText = tw.p`
  text-lg
`;
