import { posts } from "#site/content";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MDXContent } from "@/components/mdx-components";
import Title from "@/components/Title";
import Link from "next/link";
import { formateDate } from "@/lib/utils";

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
	ogSearchParams.set("date", formateDate(post.date));

	return {
		title: `${post.title}`,
		description: post.description,
		authors: { name: siteConfig.author },
		openGraph: {
			title: post.title,
			description: post.description,
			type: "article",
			url: post.slug,
			images: [
				{
					url: `/api/og?${ogSearchParams.toString()}`,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [`/api/og?${ogSearchParams.toString()}`],
		},
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
		<article>
			<div className="flex flex-col gap-3 mb-6">
				<div className="flex flex-col gap-1 max-w-[80%]">
					<Title title={post.title} className="font-lora" />
					<dl>
						<dt className="sr-only">Published On</dt>
						<dd className="text-xs flex items-center gap-1 text-muted-foreground">
							<time dateTime={post.date}>{formateDate(post.date)}</time>
						</dd>
					</dl>
				</div>
				<div className="flex justify-between items-center ">
					<p>{post.description}</p>
					<p className="text-sm font-departureMono">
						<Link href="/writing">◄ Back</Link>
					</p>
				</div>
			</div>
			<hr className="border-border mb-6" />
			<div className="prose dark:prose-invert leading-relaxed">
				<MDXContent code={post.body} />
			</div>
		</article>
	);
}
