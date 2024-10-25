import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ProjectCard({
	name,
	desc,
	href,
}: { name: string; desc: string; href: string }) {
	return (
		<div className="flex gap-5 sm:gap-24 justify-between items-center bg-card px-4 py-3 w-full">
			<div className="flex flex-col gap-4 max-w-md">
				<Link href={href}>
					<h3 className="text-2xl font-geistMono">{name}</h3>
				</Link>
				<p className="max-sm:text-sm">{desc}</p>
			</div>
			<Link href={href} className="cursor-pointer self-end">
				<GitHubLogoIcon />
			</Link>
		</div>
	);
}
