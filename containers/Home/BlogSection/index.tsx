import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { PostHomeCard } from "@components/PostHomeCard/PostHomeCard";
import { BlogSectionProps } from "./interface";
import { BlogCtaButton, BlogCtaTitle, BlogCtaWrapper, BlogPostGrid, BlogSectionTitle, BlogSectionWrapper } from "./BlogSection.sty.tx";
import { useTranslation } from "next-i18next";

export const BlogSection = ({ containerId }: BlogSectionProps) => {
  const { t } = useTranslation('home');
  return (
    <BlogSectionWrapper id={containerId}>
      <BlogSectionTitle>
        {t('blog.title')}
      </BlogSectionTitle>
      <BlogPostGrid>
        <PostHomeCard
          title="Machine Learning for Physicists"
          link="/blog/machine-learning-for-physicists"
          date="09-08-2022"
        />
        <PostHomeCard
          title="Machine Learning for Physicists"
          link="/blog/machine-learning-for-physicists"
          date="09-08-2022"
        />
        <PostHomeCard
          title="Machine Learning for Physicists"
          link="/blog/machine-learning-for-physicists"
          date="09-08-2022"
        />
        <PostHomeCard
          title="Machine Learning for Physicists"
          link="/blog/machine-learning-for-physicists"
          date="09-08-2022"
        />
        <PostHomeCard
          title="Machine Learning for Physicists"
          link="/blog/machine-learning-for-physicists"
          date="09-08-2022"
        />
        <PostHomeCard
          title="Machine Learning for Physicists"
          link="/blog/machine-learning-for-physicists"
          date="09-08-2022"
        />
      </BlogPostGrid>
      <BlogCtaWrapper>
        <BlogCtaTitle>
          {t('blog.subtitle')}
        </BlogCtaTitle>
        <Link href="/courses/qc-fundamentals">
          <BlogCtaButton>
            {t('blog.ctaText')}
            <FontAwesomeIcon icon={faBook} />
          </BlogCtaButton>
        </Link>
      </BlogCtaWrapper>
    </BlogSectionWrapper>
  );
};
