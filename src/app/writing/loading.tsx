import Container from "@/components/Container";

export default function Loading() {
	return (
		<Container>
			<div className="w-52 h-10 bg-neutral-300 animate-pulse" />
			<div className="flex flex-col gap-2 my-4">
				<div className="w-80 sm:w-96 h-24 bg-neutral-300 animate-pulse" />
				<div className="w-80 sm:w-96 h-24 bg-neutral-300 animate-pulse" />
				<div className="w-80 sm:w-96 h-24 bg-neutral-300 animate-pulse" />
			</div>
		</Container>
	);
}
