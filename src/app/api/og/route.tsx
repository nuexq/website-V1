import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

async function loadGoogleFont(font: string, text: string) {
	const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
	const css = await (await fetch(url)).text();
	const resource = css.match(
		/src: url\((.+)\) format\('(opentype|truetype)'\)/,
	);

	if (resource) {
		const response = await fetch(resource[1]);
		if (response.status == 200) {
			return await response.arrayBuffer();
		}
	}

	throw new Error("failed to load font data");
}

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const title = searchParams.get("title") || "No0ne";
  const date = searchParams.get("date") || "2024-01-01";

	try {
		return new ImageResponse(
			<div
				tw="flex flex-col w-full h-full items-start justify-start gap-10 bg-neutral-200 text-neutral-700 py-10 px-8"
				style={{ fontFamily: "Geist" }}
			>
				<div tw="flex flex-col flex-wrap h-full w-full">
					<div tw="flex justify-between items-center text-2xl text-neutral-600 w-full">
						<span>~/writing/{title.split(" ").join("-").toLowerCase()}</span>
            <span>{date.split("-").join(":")}</span>
					</div>
					<h1 tw="text-9xl mt-2">{title}</h1>
				</div>
			</div>,
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "Geist",
						data: await loadGoogleFont("Geist", title),
						style: "normal",
					},
				],
			},
		);
	} catch {
		return new Response("FAiled to generate OG image", { status: 500 });
	}
}
