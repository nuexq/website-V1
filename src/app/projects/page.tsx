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
			<div className="flex-1 space-y-2 mb-6">
				<Title title="Projects" />
				<p className="text-muted-foreground text-sm">
					You can see all my project in my{" "}
					<Link
						href={siteConfig.links.github}
						className={cn(
							buttonVariants({ variant: "link" }),
							"text-foreground",
						)}
						target="_blank"
					>
						github
					</Link>
				</p>
			</div>
			<hr className="border-border mb-3" />
			<div className="w-full flex flex-col gap-3">
				<div className="flex flex-col gap-6">
					<ProjectCard
						href="react-project"
						name="React Projects"
						desc="A collection of small React Projects."
						stack="React"
            website="no0ne003.github.io/React-Projects/"
					/>
					<ProjectCard
						href="simpleBlog"
						name="Simple Blog"
						desc="A simple blog build with nextJs and Velite."
						stack="NextJs, Velite"
            website="simpleblog003.vercel.app/"
					/>
					<ProjectCard
						href="dotfiles"
						name="My dotfiles"
						desc="My Arch linux hyprland dotfiles, also my neovim config."
					/>
					<ProjectCard
						href="website"
						name="Website"
						desc="The first version of my personal website, build in next.js."
						stack="NextJs, Velite"
					/>
				</div>
			</div>{" "}
		</Container>
	);
}
