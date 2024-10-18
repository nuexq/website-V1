"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Button } from "../../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { socialLinks } from "./Header";
import { BookX } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <BookX size={20} />
          <span className="font-bold font-mono tracking-wide">
            {siteConfig.name}
          </span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinksProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinksProps) {
  const router = useRouter();
  return (
    <Link
      className={className}
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
