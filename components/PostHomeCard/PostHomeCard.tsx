import format from "date-fns/format";
import { PostHomeCardProps, POST_DATE_FORMAT } from "./interface/interface";
import {
  PostCard,
  PostDate,
  PostInfoWrapper,
  PostLink,
  PostThumbnailFigure,
  PostThumbnailImage,
} from "./PostHomeCard.sty.tw";

export const PostHomeCard = ({
  image,
  title,
  link,
  date,
}: PostHomeCardProps) => {
  return (
    <PostCard>
      <PostThumbnailFigure>
        <PostThumbnailImage
          src={image ?? "/assets/img/thumbnails/demo-thumbnail.jpg"}
          alt="thumbnail"
        />
      </PostThumbnailFigure>
      <PostInfoWrapper>
        <PostLink href={link}>{title}</PostLink>
        <PostDate>{format(new Date(date), POST_DATE_FORMAT)}</PostDate>
      </PostInfoWrapper>
    </PostCard>
  );
};
