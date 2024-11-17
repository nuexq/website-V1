"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "@mantine/hooks";

export const Hotkeys = () => {
  const router = useRouter();

  // Navigation shortcuts
  useHotkeys([["H", () => router.push(`/`)]]);
  useHotkeys([["P", () => router.push(`/projects`)]]);
  useHotkeys([["W", () => router.push(`/writing`)]]);

  // Vim-like shortcuts
  // scroll up-down
  useHotkeys([["J", () => window.scrollBy(0, 70)]]);
  useHotkeys([["K", () => window.scrollBy(0, -70)]]);

  // scroll up-down
  useHotkeys([["D", () => window.scrollBy(0, 300)]]);
  useHotkeys([["U", () => window.scrollBy(0, -300)]]);

  // Scroll to top with gg
  useHotkeys([["shift+G", () => window.scrollTo(0, document.body.scrollHeight)]]);

  // Scroll to bottom with gg
  useHotkeys([["G", () => window.scrollTo(0, 0)]]);

  return null;
};
