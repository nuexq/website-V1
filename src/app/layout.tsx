import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Nav } from "@/components/layout/Nav";
import { Hotkeys } from "@/components/Hotkeys";
import KeyLogger from "@/components/KeyLogger";
import Script from "next/script";
import { Lora } from "next/font/google";
import { TerminalBar } from "@/features/TerminalBar/TerminalBar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const departureMono = localFont({
	src: "./fonts/DepartureMono-Regular.woff",
	variable: "--font-departure-mono",
	weight: "100 900",
});

const lora = Lora({
	weight: ["400", "500", "600", "700"], // Select the weights you need
	variable: "--font-lora",
	subsets: ["latin"], // Add subsets if needed
});

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
};

export const viewport: Viewport = {
	themeColor: "#e5e5e5",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{process.env.NODE_ENV === "production" && (
					<Script
						src="https://cloud.umami.is/script.js"
						data-website-id="92cc1a5b-a955-4781-8c79-6e2a84ff4ad2"
						strategy="afterInteractive"
						defer
					/>
				)}
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${departureMono.variable} ${lora.variable} antialiased min-h-screen font-geist`}
			>
				<Hotkeys />
				<div className="relative flex min-h-dvh flex-col">
					<main className="flex container mx-auto justify-start items-start pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
						<div className="flex flex-col sm:flex-row flex-1">
							<Nav />
							<div className="flex flex-col gap-2 border-t border-border sm:border-0 max-sm:pt-6">
								<TerminalBar />
								{children}
							</div>
						</div>
					</main>
				</div>
				<KeyLogger />
			</body>
		</html>
	);
}

