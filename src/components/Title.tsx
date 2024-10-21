import { cn } from "@/lib/utils";

export default function Title({
	title,
	className,
	...props
}: { title: string; className?: string }) {
	return (
		<span
			className={cn("text-3xl tracking-wide font-geistMono ", className)}
			{...props}
		>
			{title}
		</span>
	);
}
