import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon, InstagramIcon, Mail, Twitter } from "lucide-react";
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
    <footer className="w-full mb-6 mt-14 flex max-sm:flex-col gap-6 items-center justify-evenly">
      <Link
        href="/"
        className="flex items-center p-2"
      >
        <span className="font-bold font-mono tracking-wide">
          {siteConfig.name}
        </span>
      </Link>
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
      className={cn("flex justify-center items-center gap-2 hover:underline hover:underline-offset-2", className)}
      href={href}
      {...props}
    >
      {icon}
      {label}
    </Link>
  );
}
