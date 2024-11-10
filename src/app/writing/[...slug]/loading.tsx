import Container from "@/components/Container";

export default function Loading() {
	return (
		<Container>
			<div className="w-52 h-10 bg-neutral-300 animate-pulse mb-6" />
			<div className="w-80 sm:w-96 h-56 bg-neutral-300 animate-pulse" />
		</Container>
	);
}
