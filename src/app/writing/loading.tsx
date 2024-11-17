import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<Container>
			<Skeleton className="w-52 h-10 bg-neutral-300 mb-6" />
			<div className="flex flex-col gap-2">
				<Skeleton className="w-80 sm:w-96 h-20 bg-neutral-300" />
				<Skeleton className="w-80 sm:w-96 h-20 bg-neutral-300" />
				<Skeleton className="w-80 sm:w-96 h-20 bg-neutral-300" />
			</div>
		</Container>
	);
}
