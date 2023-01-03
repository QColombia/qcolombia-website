import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { NavBarItem, NavBarProps } from "./interface";
import {
  BurgerMenuAnchor,
  ContactLink,
  ContactLinkWrapper,
  MainLayoutNav,
  NavLogoImage,
  NavLogoLink,
  NavMenuItemsContainer,
  NavMenuMainItemLink,
  NavMenuMainItemsWrapper,
  OrganizationName,
} from "./NavBar.sty.tw";

export const NavBar: React.FC<NavBarProps> = ({ menu }) => {
  const { t } = useTranslation("navbar");
  return (
    <MainLayoutNav>
      <Link href="/">
        <NavLogoLink>
          <NavLogoImage src="/assets/img/icons/QColombiaLogo.svg" />
          <OrganizationName>{t("organization")}</OrganizationName>
        </NavLogoLink>
      </Link>
      <NavMenuItemsContainer>
        <NavMenuMainItemsWrapper>
          {menu.map((menuItem: NavBarItem) => (
            <Link href={menuItem.href} key={`${menuItem.label}`}>
              <NavMenuMainItemLink>{t(menuItem.label)}</NavMenuMainItemLink>
            </Link>
          ))}
        </NavMenuMainItemsWrapper>
        <BurgerMenuAnchor>
          <FontAwesomeIcon icon={faBars} />
        </BurgerMenuAnchor>
        <ContactLinkWrapper>
          <ContactLink href="mailto:diegoherrera262@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </ContactLink>
        </ContactLinkWrapper>
      </NavMenuItemsContainer>
    </MainLayoutNav>
  );
};
