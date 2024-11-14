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
					16-year-old highschool student from the morocco. with a{" "}
					<span className="highlight">passion for learning</span> and{" "}
					<span className="highlight">overthinking</span> issues. Into{" "}
					<u>programming</u>, <u>gaming</u>, and <u>reading</u>, and I kickbox.
				</p>
				<h3>Tech</h3>
				<p>
					Web-focused but exploring{" "}
					<u>algorithms, data structures, and low-level programming</u>. I know:{" "}
					<span className="highlight">JS/TS</span>, and currently practicing{" "}
					<u>C</u>, plus I know kinda <u>Python</u> and <u>Lua</u>.
				</p>
				<p>
					Working with <span className="highlight">React | Next.js</span>. Also
					familiar with Node.js/Bun, Express and MongoDB/mongoose.
				</p>
				<h3>Tools</h3>
				<p>
					Neovim as my primary editor. Arch Linux. and a{" "}
					<u>Lenovo ThinkPad T460</u> with an Intel i5-6300U.
				</p>
				<h3>Extra</h3>
				<p>
					I enjoy watching anime, TV shows, movies, and gaming. My favorite show
					has to be <u>Breaking Bad</u>, but lately, I’ve really enjoyed{" "}
					<u>Hajime no Ippo</u>, and I’m currently watching <u>DanDaDan</u>.
					maybe I&apos;ll post what I watch or play this year on my{" "}
					<Link href="/writing">writing</Link> page.
				</p>
				<p>
					As for gaming, I’m into story-driven and challenging games. Favorites
					include <u>Dark Souls 1</u> and <u>Silent Hill 2</u>,{" "}
					<u>Stardew valley</u>, <u>Far Cry 3</u>. I love calisthenics and I
					want to improve in it (still 8 sec at L-sit).
				</p>
				<p>
					Let’s connect: <Link href="https://github.com/No0ne003">GitHub</Link>,{" "}
					<Link href="https://www.twitter.com/No0ne003">Twitter</Link>, Discord
					at No0ne.003.{" "}
					<Link href="https://ctp-webr.ing/no0ne/previous">◄ </Link>
					<Link href="https://ctp-webr.ing/">webring</Link>
					<Link href="https://ctp-webr.ing/no0ne/next"> ►</Link>
				</p>
				<hr className="border-border my-4" />
				<p className="text-sm">Thanks for stopping by!</p>
			</div>
		</Container>
	);
}
