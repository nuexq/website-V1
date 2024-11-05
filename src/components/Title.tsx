import { cn } from "@/lib/utils";

export default function Title({
	title,
	className,
	...props
}: { title: string; className?: string }) {
	return (
		<span
			className={cn("text-2xl font-geistMono tracking-wide", className)}
			{...props}
		>
			{title}
		</span>
	);
}
