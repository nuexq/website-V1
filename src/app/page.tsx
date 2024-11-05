import Container from "@/components/Container";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

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
			<div className="leading-relaxed">
				<p>
					Hello I&apos;m {siteConfig.name} or No0ne003 a Front-End developer
					from morocco, I start with html on{" "}
					<span className="font-bold">08/26/2023</span> and I&apos;m currently
					learning{" "}
					<span className="heighlite">
						C/C++, algorithms & data structers and low level things
					</span>
					.
				</p>
				<br />
				<p>
					I&apos;m good at{" "}
					<span className="heighlite">JS/TS, React/Next.js</span> and ovecourse{" "}
					<span className="heighlite">HTML and CSS</span>{" "}
					<span className="text-sm">(tailwind btw)</span>. I learned basics of
					backend in js but I still need practice.
				</p>
				<br />
				<p>
					I love using <span className="font-bold">Linux</span>{" "}
					<span className="text-lg">(arch btw)</span> with Hyprland Window
					Manager, Linux give me what I need as a programmer and it work very
					well.
					<br />I also sometimes Game on linux a simple games like stardew
					valley, hollow knight, and I swear to god I play roblox just with
					friends for fun.
					<br />
					I&apos;m also a <span className="font-bold">kick boxer</span> for like
					a 1 year now and I love Calistanics.
				</p>
				<br />
				You can see random stuff about me in{" "}
				<Link
					className={cn(buttonVariants({ variant: "link" }), "px-0")}
					href="/random"
				>
					here
				</Link>
				<br />
				<br />
				this is a tested portfolio I make it in 1 hour when the wifi is off.
			</div>
		</Container>
	);
}
