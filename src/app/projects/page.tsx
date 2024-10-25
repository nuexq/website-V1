import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "[P}rojects",
  description: "Collection of projects",
};

export default function Projects() {
  return (
    <Container>
      <div className="flex-1 space-y-2">
        <Title title="Projects" />
        <p className="text-muted-foreground">Collection of projects</p>
      </div>
      <div className="flex flex-col w-full gap-4 my-4">
        <ProjectCard
          href="https://github.com/No0ne003/website"
          name="Portfolio"
          desc="This is my Portfolio build in next.js"
        />
        <ProjectCard
          href="https://github.com/No0ne003/react-project"
          name="React Projects"
          desc="A collection of React small Projects"
        />
        <ProjectCard
          href="https://github.com/No0ne003/simpleBlog"
          name="Simple Blog"
          desc="A collection of React small Projects and no wone kada dakdjf dakd"
        />
      </div>{" "}
    </Container>
  );
}
