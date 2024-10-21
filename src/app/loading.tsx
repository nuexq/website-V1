import Container from "@/components/Container";

export default function Loading() {
	return (
		<Container>
			<div className="w-52 h-10 bg-neutral-300 animate-pulse" />
			<div className="flex flex-col gap-2">
				<div className="w-96 h-3 bg-neutral-300 animate-pulse" />
				<div className="w-96 sm:w-[28rem] h-3 bg-neutral-300 animate-pulse" />
				<div className="w-72 h-3 bg-neutral-300 animate-pulse" />
			</div>
		</Container>
	);
}
