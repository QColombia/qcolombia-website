import Link from "next/link";
import { FaFacebook, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { NavBar } from "@components/NavBar/NavBar";
import config from "@config";
import { MainLayoutProps } from "./interface";
import { MainLayoutWrapper } from "./MainLayout.sty.tw";
import { MainFooter } from "@components/Footer";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <MainLayoutWrapper>
    <NavBar menu={config.navBarMenu} />
    {children}
    <MainFooter />
  </MainLayoutWrapper>
);
