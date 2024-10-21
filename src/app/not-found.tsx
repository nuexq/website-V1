import Container from "@/components/Container";
import Title from "@/components/Title";

export default function notFound() {
  return (

      <Container>
<Title title="Not Found - 404" className="text-rose-700" />
			<div className="leading-relaxed">
        this page could not be found.
      </div>

      </Container>
  )
}
