import Container from "@/components/Container";
import Title from "@/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "[N]o0ne",
	description: "Home",
};

export default function Home() {
	return (
		<Container>
			<div>
				<Title title="No0ne" className="font-departureMono" />
			</div>
			<div className="prose">
				<p>
					I&apos;m a 16-year-old high school student from Morocco with{" "}
					<span className="highlight">overthinking issues</span> and a{" "}
					<span className="highlight">passion for learning</span>. I enjoy{" "}
					<span className="highlight">programming, gaming, and reading</span>,
					and I&apos;m currently learning <span className="highlight">C</span>. I
					also love <span className="highlight">kickboxing</span>.
				</p>

				<h3>Tech</h3>
				<p>
					My focus is on web development, but lately, I&apos;ve been exploring{" "}
					<span className="highlight">
						algorithms, data structures, and low-level programming
					</span>
					. I&apos;m most comfortable with <span className="highlight">JS/TS</span>{" "}
					and <u>HTML/CSS</u>, and I also know <u>Python</u> and <u>Lua</u>.
				</p>

				<p>
					I use <span className="highlight">React</span> and{" "}
					<span className="highlight">Next.js</span> for front-end development,{" "}
					and <span className="highlight">Tailwind CSS</span> for styling. I
					also have experience with{" "}
					<span className="highlight">Node.js/Bun</span> and{" "}
					<span className="highlight">MongoDB</span>.
				</p>

				<h3>Tools</h3>
				<p>
					My editor of choice is <span className="highlight">Neovim</span>, and
					I run <span className="highlight">Arch Linux</span> as my OS. My
					hardware is a <span className="highlight">Lenovo ThinkPad T460</span>{" "}
					with a 15&quot; Full HD display and an Intel i5-6300U processor.
				</p>
			</div>
		</Container>
	);
}
