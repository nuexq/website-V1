import Container from "@/components/Container";
import Title from "@/components/Title";
import { ArrowRight } from "lucide-react";

export default function Projects() {
	return (
		<Container>
			<div>
				<Title title="Projects" />
			</div>
			<div className="project-card">
				<div>
          <h3>Portfolio</h3>
          <p>this is my portfolio</p>
          <div className="underline underline-offset-4 decoration-dotted hover:no-underline transition-all flex justify-end items-center gap-2 cursor-pointer absolute bottom-0 right-0 mr-4 mb-4">see in github <span><ArrowRight size={15} /></span> </div>
        </div>
				<div>
          <h3>React Project</h3>
          <p>A Collection of small react projects</p>
          <div className="underline underline-offset-4 decoration-dotted hover:no-underline transition-all flex justify-end items-center gap-2 cursor-pointer absolute bottom-0 right-0 mr-4 mb-4">see in github <span><ArrowRight size={15} /></span> </div>
        </div>
				<div>
          <h3>Simple Blog</h3>
          <p>a simple Blog build by next.js</p>
          <div className="underline underline-offset-4 decoration-dotted hover:no-underline transition-all flex justify-end items-center gap-2 cursor-pointer absolute bottom-0 right-0 mr-4 mb-4">see in github <span><ArrowRight size={15} /></span> </div>
        </div>
			</div>{" "}
		</Container>
	);
}
