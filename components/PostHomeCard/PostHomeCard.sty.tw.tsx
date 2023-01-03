import tw from "twin.macro";

export const PostCard = tw.div`
  min-w-[300px]
  w-[90vw]

  bg-gradient-to-br
  from-stone-600
  to-stone-900

  rounded-lg
  drop-shadow-lg

  overflow-hidden
  
  h-fit
  flex
  flex-col

  md:w-[100px]
`;

export const PostThumbnailFigure = tw.figure`
  w-[100%]
  h-[100px]
  
  overflow-hidden
`;

export const PostThumbnailImage = tw.img`
  w-[100%]
  h-[100%]

  object-cover
  object-center
`;

export const PostInfoWrapper = tw.div`
  w-[100%]
  h-fit

  py-5
  px-6

  flex
  flex-col
`;

export const PostLink = tw.a`
  mb-3

  text-lg
  font-bold
`;

export const PostDate = tw.span`
  text-amber-300
`;
