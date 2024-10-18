import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { BookX, GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { MobileNav } from "./MobileNav";

interface SocialLinkProps {
  href: string;
  label: string;
  Icon: ReactNode;
}

export const socialLinks: SocialLinkProps[] = [
  { href: siteConfig.links.github, label: "GitHub", Icon: <GithubIcon /> },
  { href: siteConfig.links.twitter, label: "Twitter", Icon: <TwitterIcon /> },
  {
    href: siteConfig.links.instagram,
    label: "Instagram",
    Icon: <InstagramIcon />,
  },
];

export const Header = () => {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="flex items-center space-x-2 hover:bg-neutral-800 hover:text-background transition-colors duration-300 p-2 rounded-md">
            <BookX size={20} />
            <span className="font-bold font-mono tracking-wide">
              {siteConfig.name}
            </span>
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {socialLinks.map((link) => (
              <SocialLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, Icon }) => (
  <Link href={href} target="_blank" rel="noreferrer">
    <div
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-10 px-0 hidden sm:inline-flex",
      )}
    >
      {Icon}
      <span className="sr-only">{label}</span>
    </div>
  </Link>
);
