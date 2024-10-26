"use client";

import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const TerminalBar = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	function formatTime() {
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();

		return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
	}

	function padZero(number: number) {
		return number < 10 ? "0" + number : number;
	}

	const pathname = usePathname().split("/");

	return (
		<Container className="p-0 flex-row justify-between items-center">
			<div className="text-[#5b6078]">
				<span className="hover:font-bold">
					<Link href="/">~</Link>
				</span>
				<span className="text-xs hover:underline hover:decoration-dotted hover:underline-offset-[3px]">
					{pathname.map((path, index) => (
						<>
							<span key={index} className="hover:font-bold">
								<Link href={pathname.slice(0, index + 1).join("/")}>
									{path}
								</Link>
							</span>
							<span>
								{index === pathname.length - 1 || pathname[1] === "" ? "" : "/"}
							</span>
						</>
					))}
				</span>
			</div>
			<div className="text-xs text-muted-foreground">{formatTime()}</div>
		</Container>
	);
};
