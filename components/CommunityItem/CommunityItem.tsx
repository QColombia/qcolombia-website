import {
  CommunityItemContentWrapper,
  CommunityItemCTA,
  CommunityItemIcon,
  CommunityItemTitle,
  CommunityItemWrapper,
} from "./CommunityItem.sty.tw";
import { CommunityItemProps } from "./interface";

export const CommunityItem = ({
  title,
  icon,
  description,
  ctaLabel,
  onCTAClick,
}: CommunityItemProps) => (
  <CommunityItemWrapper>
    <CommunityItemIcon>{icon}</CommunityItemIcon>
    <CommunityItemContentWrapper>
      <CommunityItemTitle>{title}</CommunityItemTitle>
      {description}
      <CommunityItemCTA onClick={onCTAClick}>{ctaLabel}</CommunityItemCTA>
    </CommunityItemContentWrapper>
  </CommunityItemWrapper>
);
