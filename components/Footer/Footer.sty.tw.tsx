import tw from "twin.macro";

export const MainLayoutFooter = tw.footer`
  w-[100%]

  pb-12

  flex
  flex-col
  items-center
  justify-center

  text-amber-400

  md:py-12
`;

export const MainFooterLinkWrapper = tw.div`
  flex
  flex-row
  items-end
`;

export const MainFooterLink = tw.a`
  h-fit

  flex
  flex-row
  items-center

  hover:cursor-pointer
`;

export const MainLinkImage = tw.img`
  h-3

  mr-2

  object-cover
`;

export const MainFooterIcons = tw.div`
  mt-2  

  flex
  flex-row
  items-center
  justify-center
  gap-3
  
  text-2xl
`;
