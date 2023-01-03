import { GenericCTAButton } from "@components/GenericCTAButton";
import tw from "twin.macro";

export const CommunityItemWrapper = tw.div`
  w-fit

  flex
  flex-row
  items-start
  justify-start
  gap-6
`;

export const CommunityItemIcon = tw.div`
  text-6xl
`;

export const CommunityItemContentWrapper = tw.div`
  max-w-[450px]

  flex
  flex-col
  items-start
  justify-start
  gap-12
`;

export const CommunityItemTitle = tw.h2`
  text-left
  text-4xl
`;

export const CommunityItemCTA = tw(GenericCTAButton)`
  flex
  items-center
  gap-2
  font-bold
  text-lg
`;
