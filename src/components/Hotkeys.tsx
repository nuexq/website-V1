"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "@mantine/hooks";

export const Hotkeys = () => {
	const router = useRouter();

	// Navigation shortcuts
	useHotkeys([["H", () => router.push(`/`)]]);
	useHotkeys([["P", () => router.push(`/projects`)]]);
	useHotkeys([["W", () => router.push(`/writing`)]]);

	return null;
};
