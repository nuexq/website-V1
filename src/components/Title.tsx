import { cn } from "@/lib/utils";

export default function Title({
	title,
	className,
	...props
}: { title: string; className?: string }) {
	return (
		<span
			className={cn("text-2xl tracking-wide font-departureMono", className)}
			{...props}
		>
			{title}
		</span>
	);
}
