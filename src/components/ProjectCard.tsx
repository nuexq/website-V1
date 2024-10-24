import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function ProjectCard({
  name,
  desc,
}: { name: string; desc: string }) {
  return (
    <div className="flex gap-5 sm:gap-24 justify-between items-center bg-card px-4 py-3 w-full">
      <div className="flex flex-col gap-4 max-w-md">
        <h3 className="text-2xl font-geistMono">{name}</h3>
        <p className="max-sm:text-sm">{desc}</p>
      </div>
      <div className="cursor-pointer self-end">
        <GitHubLogoIcon />
      </div>
    </div>
  );
}
