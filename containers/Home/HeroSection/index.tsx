import config from "@config";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import {
  ArrowIcon,
  CTAButton,
  DescriptionText,
  HeroMainContent,
  HeroSectionTitle,
  HeroSectionWrapper,
  SideImageContainer,
} from "./HeroSection.sty.tw";
import { HeroSectionProps } from "./interface";

export const HeroSection = ({ onClickCTA }: HeroSectionProps) => {
  const { t } = useTranslation('home');
  return (
    <HeroSectionWrapper className="bg-hero-pattern">
      <HeroMainContent>
        <HeroSectionTitle>{t("hero.title")}</HeroSectionTitle>
        <DescriptionText>{t("hero.description")}</DescriptionText>
        <CTAButton onClick={onClickCTA}>
          {t("hero.ctaText")}
          <ArrowIcon>
            <FontAwesomeIcon icon={faArrowDown} />
          </ArrowIcon>
        </CTAButton>
      </HeroMainContent>
      <SideImageContainer className="bg-hero-image" />
    </HeroSectionWrapper>
  );
};
