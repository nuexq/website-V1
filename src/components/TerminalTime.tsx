import { useEffect, useState } from "react";

export const TerminalTime = () => {
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
	return <div className="text-xs text-muted-foreground">{formatTime()}</div>;
};
