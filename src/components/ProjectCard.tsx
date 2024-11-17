import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Globe } from "lucide-react";

export default function ProjectCard({
	name,
	desc,
	href,
	website,
	stack,
}: {
	name: string;
	desc: string;
	href: string;
	stack?: string;
	website?: string;
}) {
	return (
		<div className="flex flex-col gap-1 p-2">
			<div className="w-full flex justify-between items-center font-geistMono">
				<h2 className="flex items-center gap-2 text-lg underline decoration-dotted decoration-1 underline-offset-4 decoration-foreground/20 hover:decoration-foreground">
					<Link href={`${siteConfig.links.github}/${href}`} target="_blank">
						{name}
					</Link>
					{website ? (
						<Link href={`https://${website}`} target="_blank">
							<Globe className="size-3 text-muted-foreground" />
						</Link>
					) : null}
				</h2>
				<p className="text-xs highlight before:content-[''] after:content-['']">
					{stack ? `[${stack}]` : null}
				</p>
			</div>
			<p className="text-sm text-muted-foreground">{desc}</p>
		</div>
	);
}
