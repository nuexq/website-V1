"use client";

import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { TerminalTime } from "./TerminalTime";

export const TerminalBar = () => {
	const pathname = usePathname().split("/");

	return (
		<Container className="p-0 flex-row justify-between items-center">
			<div className="text-[#5b6078]">
				<span className="hover:font-bold">
					<Link href="/">~</Link>
				</span>
				<span className="text-xs hover:underline hover:decoration-dotted hover:underline-offset-[3px]">
					{pathname.map((path, index) => (
						<span key={index}>
							{path === "" ? null : (
								<span  className="hover:font-bold">
									<Link href={pathname.slice(0, index + 1).join("/")}>
										{path}
									</Link>
								</span>
							)}
							{index === pathname.length - 1 || pathname[1] === "" ? null : (
								<span>/</span>
							)}
						</span>
					))}
				</span>
			</div>
			<TerminalTime />
		</Container>
	);
};
