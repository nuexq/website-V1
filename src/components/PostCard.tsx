import Link from "next/link";
import { formateDate } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

const PostCard = ({ slug, title, description, date }: PostItemProps) => {
  return (
    <article className="flex flex-col gap-1 p-2">
      <div className="w-full flex justify-between items-start gap-2 font-geistMono">
        <h2 className="text-lg dotted-underline">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-xs text-muted-foreground flex gap-1">
            <time dateTime={date}>{formateDate(date)}</time>
          </dd>
        </dl>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </article>
  );
};

export default PostCard;
