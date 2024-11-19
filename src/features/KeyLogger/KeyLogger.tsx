"use client";

import { Space } from "lucide-react";
import React, { useState, useEffect } from "react";

const KeyLogger: React.FC = () => {
  const [keys, setKeys] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newKey = event.key;

      const keyToAdd =
        newKey === " " ? (
          <Space key={Date.now()} />
        ) : newKey === "Control" ? (
          <span key={Date.now()}>Ctrl</span>
        ) : (
          <span key={Date.now()}>{newKey}</span>
        );

      setKeys((prevKeys) => [keyToAdd, ...prevKeys]);

      setTimeout(() => {
        setKeys((prevKeys) => prevKeys.filter((key) => key !== keyToAdd));
      }, 1000);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-black text-white font-departureMono fixed bottom-0 right-0 m-3 max-w-28">
      <div className="flex flex-row-reverse gap-2 px-2 py-1 empty:p-0 whitespace-nowrap overflow-x-hidden">
        {keys}
      </div>
    </div>
  );
};

export default KeyLogger;
