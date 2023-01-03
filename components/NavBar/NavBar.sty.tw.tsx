import tw from "twin.macro";

export const MainLayoutNav = tw.nav`
  w-screen
  h-20

  flex
  flex-row
  items-center
  justify-between

  px-8

  fixed
  z-10

  lg:px-10
  lg:h-24
`;

export const NavLogoLink = tw.a`
  h-fit

  flex
  flex-row
  items-center

  text-2xl

  hover:cursor-pointer
`;

export const NavLogoImage = tw.img`
  h-7

  mr-4

  object-cover

  md:h-6
`;

export const NavMenuItemsContainer = tw.div`
  h-fit
  w-fit

  flex
  items-center
`;

export const NavMenuMainItemsWrapper = tw.div`
  h-fit
  w-fit

  hidden

  lg:inline-block
`;

export const NavMenuMainItemLink = tw.a`
  mx-4

  hover:text-amber-400
  hover:cursor-pointer

  last:mr-0
`;

export const BurgerMenuAnchor = tw.a`
  ml-8

  flex
  items-center

  text-2xl

  cursor-pointer

  hover:text-amber-300
  lg:hidden
`;

export const ContactLinkWrapper = tw.div`
  h-fit 

  ml-8

  border-l-2
  border-slate-100

  flex
  items-center
`;

export const ContactLink = tw.a`
  ml-8

  flex
  items-center

  text-2xl

  cursor-pointer

  hover:text-amber-300
`;

export const OrganizationName = tw.div`
  hidden
  
  md:inline-block
`;
