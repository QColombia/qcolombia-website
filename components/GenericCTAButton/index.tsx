import styled from "styled-components";
import tw from "twin.macro";

export const GenericCTAStyles = `
  py-4
  px-6

  rounded-md

  bg-gradient-to-r
  from-amber-500
  to-orange-500

  text-2xl
  font-bold
  text-stone-700

  hover:from-orange-500
  hover:to-amber-500
`;

export const GenericCTAButton = styled.button`
  ${tw`${GenericCTAStyles}`}
`;

export const GenericCTAAnchor = styled.a`
  ${tw`${GenericCTAStyles}`}
`;
