import config from "@config";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaFacebook, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import {
  MainFooterIcons,
  MainFooterLink,
  MainFooterLinkWrapper,
  MainLayoutFooter,
  MainLinkImage,
} from "./Footer.sty.tw";

export const MainFooter = (_props: any) => {
  const { t } = useTranslation("footer");
  return (
    <MainLayoutFooter>
      <MainFooterLinkWrapper>
        <MainFooterLink>
          <MainLinkImage src="/assets/img/icons/QColombiaLogo.svg" />
          {t('mainLink')}
        </MainFooterLink>
        {t("copyright")}
      </MainFooterLinkWrapper>
      <MainFooterIcons>
        <Link href={config.socialMedia.facebook}>
          <a>
            <FaFacebook />
          </a>
        </Link>
        <Link href={config.socialMedia.github}>
          <a>
            <FaGithub />
          </a>
        </Link>
        <Link href={config.socialMedia.discord}>
          <a>
            <FaDiscord />
          </a>
        </Link>
        <Link href={config.socialMedia.instagram}>
          <a>
            <FaInstagram />
          </a>
        </Link>
      </MainFooterIcons>
    </MainLayoutFooter>
  );
};
