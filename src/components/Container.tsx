import { cn } from "@/lib/utils"

export default function Container({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
	return (
		<section className={cn("max-w-2xl sm:w-[42rem] flex flex-col gap-6 item-start justify-start pl-0 sm:px-6", className)} {...props}>
			{children}
		</section>
	);
}
