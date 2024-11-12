import { cn } from "@/lib/utils";

export default function Title({
	title,
	className,
	...props
}: { title: string; className?: string }) {
	return (
		<h1 className={cn("text-3xl font-lora", className)} {...props}>
			{title}
		</h1>
	);
}
