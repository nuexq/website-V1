import { cn } from "@/lib/utils"

export default function Container({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
	return (
		<section className={cn("max-w-2xl flex flex-col gap-4 item-start justify-start border-t border-neutral-300 py-6 sm:border-0 pl-0 sm:px-6", className)} {...props}>
			{children}
		</section>
	);
}
