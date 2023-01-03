import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "@config";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "@components/CodeBlock/CodeBlock";
import { MainSectionProps } from "./interface";
import { useTranslation } from "next-i18next";
import {
  codeBlockWidthBreakPoints,
  MainDescription,
  MainMainContent,
  MainMainDescription,
  MainMainTitle,
  MainSectionCTA,
  MainSectionWrapper,
  MainSupportContent,
} from "./MainSection.sty.tw";

export const MainSection = ({ containerId }: MainSectionProps) => {
  const { t } = useTranslation("home");
  return (
    <MainSectionWrapper id={containerId}>
      <MainMainContent>
        <MainDescription>
          <MainMainTitle>{t("main.title")}</MainMainTitle>
          <MainMainDescription>
            {t("main.description")}
          </MainMainDescription>
          <Link href="/courses/qc-fundamentals">
            <MainSectionCTA>
              {t("main.ctaText")}
              <FontAwesomeIcon icon={faGraduationCap} />
            </MainSectionCTA>
          </Link>
        </MainDescription>
        <MainSupportContent>
          <ReactMarkdown
            children={config.homeHeroCode}
            components={{
              code({ children }) {
                return (
                  <CodeBlock
                    codeContent={String(children).replace(/\n$/, "")}
                    language="python"
                    showLineNumbers
                    width={codeBlockWidthBreakPoints}
                  />
                );
              },
            }}
          />
        </MainSupportContent>
      </MainMainContent>
    </MainSectionWrapper>
  );
};
