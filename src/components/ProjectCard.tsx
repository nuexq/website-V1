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
		<li className="space-x-1 p-0 pt-1 m-0 list-disc">
			<Link
				href={`${siteConfig.links.github}/${href}`}
        target="_blank"
				className={cn(
					buttonVariants({ variant: "link" }),
					"text-base !font-normal",
				)}
			>
				{name}:
			</Link>
			<div className="inline text-muted-foreground">{desc}</div>
		</li>
	);
}
