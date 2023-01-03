import HomeMain from "@containers/Home/HomeMain";
import { MainLayout } from "@containers/Layouts/MainLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MainLayout>
    <HomeMain />
  </MainLayout>
);

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale ?? "en",
      ["common", "footer", "home", "navbar"],
    )),
  },
});

export default Home;
