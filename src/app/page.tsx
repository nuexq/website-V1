import Container from "@/components/Container";
import Title from "@/components/Title";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "[N]o0ne",
	description: "Home",
};

export default function Home() {
	return (
		<Container>
			<div className="mb-6">
				<Title title="Noθne" className="font-departureMono" />
			</div>
			<div className="prose">
				<p>
					16-year-old highschool student from the Philippines. I’m currently{" "}
					<span className="highlight">passion for learning</span> with{" "}
					<span className="highlight">overthinking</span> issues. Into{" "}
					<u>programming</u>, <u>gaming</u>, and <u>reading</u>, and currently
					learning <u>C</u>. and I kickbox.
				</p>
				<h3>Tech</h3>
				<p>
					Web-focused but exploring{" "}
					<u>algorithms, data structures, and low-level programming</u>. My core
					stack: <span className="highlight">JS/TS</span>, <u>HTML/CSS</u>, plus
					some <u>Python</u> and <u>Lua</u>.
				</p>
				<p>
					Working with{" "}
					<span className="highlight">React, Next.js and Tailwind</span> for
					styling. Also familiar with <u>Node.js/Bun</u> and <u>MongoDB</u>.
				</p>
				<h3>Tools</h3>
				<p>
					Neovim as my primary editor. Arch Linux. Hardware:{" "}
					<u>Lenovo ThinkPad T460</u> with an Intel i5-6300U.
				</p>
				<h3>Extra</h3>
				<p>
					I enjoy anime, TV, movies, and gaming. My favorite show has to be{" "}
					<u>Breaking Bad</u>, but lately, I’ve really enjoyed{" "}
					<u>Hajime no Ippo</u>, and I’m currently watching <u>DanDaDan</u>.
					I’ll keep posting everything I watch or play each year on my{" "}
					<Link href="/writing">writing</Link> page if you’re curious.
				</p>
				<p>
					As for gaming, I’m into story-driven and challenging games. Favorites
					include <u>Dark Souls 1</u> and <u>Silent Hill 2</u>,{" "}
					<u>Stardew valley</u>, <u>Far Cry 3</u>, and lately, I’ve been diving
					into <u>Portal 2</u>.
				</p>
				<p>
					Let’s connect: <Link href="https://github.com/No0ne003">GitHub</Link>,{" "}
					<Link href="https://www.twitter.com/No0ne003">Twitter</Link>, or
					Discord at No0ne.003.
				</p>
				<hr className="border-border my-4" />
				<p className="text-sm">Thanks for stopping by!</p>
			</div>
		</Container>
	);
}
