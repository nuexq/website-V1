import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "[P}rojects",
	description: "Collection of projects",
};

export default function Projects() {
	return (
		<Container>
			<div className="flex-1 space-y-2">
				<Title title="Projects" />
				<p className="text-muted-foreground text-sm font-departureMono">
					You can see all my project in my{" "}
					<Link
						href={siteConfig.links.github}
						className={cn(
							buttonVariants({ variant: "link" }),
							"text-muted-foreground",
						)}
					>
						github.
					</Link>
				</p>
			</div>
			<hr className="border-neutral-300" />
			<div className="w-full prose">
				<p className="m-0">Here is some of my favorite project: </p>
				<ul className="pt-4 m-0">
					<ProjectCard
						href="react-project"
						name="React Projects"
						desc="A collection of React small Projects."
					/>
					<ProjectCard
						href="simpleBlog"
						name="Simple Blog"
						desc="A simple blog build with nextJs and Velite."
					/>
					<ProjectCard
						href="website"
						name="Website"
						desc="This Website you are right now, build in next.js."
					/>
				</ul>
			</div>{" "}
		</Container>
	);
}
