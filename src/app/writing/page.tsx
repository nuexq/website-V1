import { posts } from "#site/content";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import Title from "@/components/Title";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "[W]riting",
	description: "Notes and thoughts.",
};

const POST_PER_PAGE = 5;

interface BlogPageProps {
	searchParams: {
		page?: string;
	};
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
	const currentPage = Number(searchParams?.page) || 1;
	const sortedPosts = sortPosts(posts.filter((post) => post.published));

	const displayPosts = sortedPosts.slice(
		POST_PER_PAGE * (currentPage - 1),
		POST_PER_PAGE * currentPage,
	);

	return (
		<Container>
			<div className="space-y-2 mb-6">
				<Title title="Writing" />
				<p className="text-muted-foreground text-sm">
					Some of my notes and thoughts.
				</p>
			</div>
			<hr className="border-border mb-3 w-full" />
			<div className="grid grid-cols-12 gap-3 w-full">
				<div className="col-span-12 col-start-1">
					{displayPosts?.length > 0 ? (
						<ul className="flex flex-col gap-6">
							{displayPosts.map((post) => {
								const { slug, date, title, description } = post;
								return (
									<li key={slug}>
										<PostCard
											slug={slug}
											title={title}
											date={date}
											description={description}
										/>
									</li>
								);
							})}
						</ul>
					) : (
						<p>Nothing to see here YET</p>
					)}
				</div>
			</div>
		</Container>
	);
}
