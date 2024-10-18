import { cn } from "@/lib/utils";
import Link from "next/link";
import { Brain, GithubIcon, InstagramIcon, Mail, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ReactNode } from "react";

export const Footer = () => {
  const socialLinks = [
    {
      href: `mailto:${siteConfig.links.mail}`,
      label: "Mail",
      icon: <Mail size={15} />,
    },
    {
      href: siteConfig.links.twitter,
      label: "Twitter",
      icon: <Twitter size={15} />,
    },
    {
      href: siteConfig.links.github,
      label: "Github",
      icon: <GithubIcon size={15} />,
    },
    {
      href: siteConfig.links.instagram,
      label: "Instagram",
      icon: <InstagramIcon size={15} />,
    },
  ];

  return (
    <footer className="w-full mb-6 mt-14 flex gap-6 flex-wrap items-center justify-evenly">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-semibold"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Brain size={20} />
        {siteConfig.name}
      </a>
      <div className="flex justify-center items-center gap-6 text-sm">
        {socialLinks.map((link, index) => (
          <FooterLink
            key={index}
            href={link.href}
            label={link.label}
            icon={link.icon}
            className="lowercase"
          />
        ))}
      </div>
    </footer>
  );
};

interface MobileLinksProps {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
}

function FooterLink({
  href,
  label,
  icon,
  className,
  ...props
}: MobileLinksProps) {
  return (
    <Link
      className={cn("flex justify-center items-center gap-2", className)}
      href={href}
      {...props}
    >
      {icon}
      {label}
    </Link>
  );
}
