import { posts } from "#site/content";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import Title from "@/components/Title";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "[B]log",
	description: "my blog navigation page",
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
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<Title title="Blog" />
			</div>
			<div className="grid grid-cols-12 gap-3 my-4">
				<div className="col-span-12 col-start-1">
					<hr />
					{displayPosts?.length > 0 ? (
						<ul className="flex flex-col gap-5">
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
