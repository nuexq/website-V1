import { posts } from "#site/content";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MDXContent } from "@/components/mdx-components";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Link from "next/link";
import { cn, formateDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface PostPageProps {
	params: {
		slug: string[];
	};
}

async function getPostFromParams(params: PostPageProps["params"]) {
	const slug = params?.slug?.join("/");
	const post = posts.find((post) => post.slugAsParams === slug);

	return post;
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const post = await getPostFromParams(params);

	if (!post) {
		return {};
	}

	const ogSearchParams = new URLSearchParams();
	ogSearchParams.set("title", post.title);

	return {
		title: `${post.title} | No0ne`,
		description: post.description,
		authors: { name: siteConfig.author },
	};
}

export async function generateStaticParams(): Promise<
	PostPageProps["params"][]
> {
	return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
	const post = await getPostFromParams(params);

	if (!post || !post.published) {
		notFound();
	}

	return (
		<Container>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-1 max-w-[80%]">
					<Title title={post.title} className="font-geistMono" />
					<dl>
						<dt className="sr-only">Published On</dt>
						<dd className="text-sm flex items-center gap-1 text-muted-foreground">
							<time dateTime={post.date}>{formateDate(post.date)}</time>
						</dd>
					</dl>
				</div>
				<div className="flex justify-between items-center ">
					<p className="text-sm">{post.description}</p>
					<p
						className={cn(
							buttonVariants({ variant: "link" }),
							"font-departureMono text-sm",
						)}
					>
						<Link href="/blog">◄ Back</Link>
					</p>
				</div>
			</div>
			<hr className="border-neutral-300" />
			<div className="prose dark:prose-invert leading-relaxed">
				<MDXContent code={post.body} />
			</div>
		</Container>
	);
}
