import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
