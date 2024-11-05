import { useEffect, useState } from "react";

export const TerminalTime = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateFormattedTime = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("default", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hourCycle: "h23",
        }).format(now),
      );
    };

    updateFormattedTime();
    const intervalId = setInterval(updateFormattedTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="text-xs text-muted-foreground font-departureMono">{time}</div>;
};
