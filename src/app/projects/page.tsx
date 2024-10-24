import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/Title";

export default function Projects() {
  return (
    <Container>
      <div className="flex-1 space-y-2">
        <Title title="Projects" />
        <p className="text-muted-foreground">Collection of projects</p>
      </div>
      <div className="flex flex-col w-full gap-4 my-4">
        <ProjectCard
          name="Portfolio"
          desc="This is my Portfolio build in next.js"
        />
        <ProjectCard
          name="React Projects"
          desc="A collection of React small Projects"
        />
        <ProjectCard
          name="Simple Blog"
          desc="A collection of React small Projects and no wone kada dakdjf dakd"
        />
      </div>{" "}
    </Container>
  );
}
