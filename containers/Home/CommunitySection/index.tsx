import { CommunityItem } from "@components/CommunityItem/CommunityItem";
import { useTranslation } from "next-i18next";
import { FaDiscord, FaGithub, FaTwitch } from "react-icons/fa";
import {
  CommunityItemsContainer,
  CommunityItemText,
  CommunitySectionWrapper,
} from "./CommunitySection.sty.tw";
import { CommunitySectionProps } from "./interface";

export const CommunitySection = ({ containerId }: CommunitySectionProps) => {
  const { t } = useTranslation('home');
  return (
    <CommunitySectionWrapper id={containerId}>
      <CommunityItemsContainer>
        <CommunityItem
          icon={<FaGithub />}
          onCTAClick={() => console.log("github")}
          description={
            <CommunityItemText>
              {t("community.github.description")}
            </CommunityItemText>
          }
          title={t("community.github.title")}
          ctaLabel={t("community.github.ctaText")}
        />
        <CommunityItem
          icon={<FaTwitch />}
          onCTAClick={() => console.log("instagram")}
          description={
            <CommunityItemText>
              {t("community.twitch.description")}
            </CommunityItemText>
          }
          title={t("community.twitch.title")}
          ctaLabel={t("community.twitch.ctaText")}
        />
        <CommunityItem
          icon={<FaDiscord />}
          onCTAClick={() => console.log("github")}
          description={
            <CommunityItemText>
              {t("community.discord.description")}
            </CommunityItemText>
          }
          title={t("community.discord.title")}
          ctaLabel={t("community.discord.ctaText")}
        />
      </CommunityItemsContainer>
    </CommunitySectionWrapper>
  );
};
