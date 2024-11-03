import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { siteConfig } from "@/config/site";

export default function ProjectCard({
	name,
	desc,
	href,
}: { name: string; desc: string; href: string }) {
	return (
		<div className="text-sm space-x-1">
			<Link
				href={`${siteConfig.links.github}/${href}`}
				className={cn(buttonVariants({ variant: "link" }))}
			>
				{name}:
			</Link>
			<div className="inline">{desc}</div>
		</div>
	);
}
