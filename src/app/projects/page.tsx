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

const projects = [
	{
		href: "website",
		name: "Website",
		desc: "The first version of my personal website, built in Next.js.",
	},
	{
		href: "dotfiles",
		name: "My dotfiles",
		desc: "my dotfiles for arch Linux hyprland, including my Neovim config.",
	},
	{
		href: "events-website",
		name: "Events website",
		desc: "An improved version of "urba events" website.",
	},
	{
		href: "simpleBlog",
		name: "Simple Blog",
		desc: "A simple blog built with Next.js and Velite.",
	},
	{
		href: "react-project",
		name: "React Projects",
		desc: "collection of open-source projects, components, React hooks, and more made with react.",
	},
];

export default function Projects() {
	return (
		<article>
			<div className="space-y-2 mb-6">
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
			<div className="prose">
				<p className="m-0">Here is some of my favorite project: </p>
				<ul className="pt-3 m-0">
					{projects.map((project) => (
						<ProjectCard
							key={project.href}
							href={project.href}
							name={project.name}
							desc={project.desc}
						/>
					))}
				</ul>
			</div>
		</article>
	);
}
