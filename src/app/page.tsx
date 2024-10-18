import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="flex justify-center items-center pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32 flex-1">
      <div className="container flex flex-col gap-6 text-center w-full">
        <div className="-z-10 absolute top-14 right-20 size-[35rem] bg-gradient-to-tr from-background from-20% to-neutral-800/30 blur-3xl rounded-full" />
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            What Mark&apos;s <span className="hover:bg-neutral-800 hover:text-background transition-colors duration-300 px-2 rounded-lg">{siteConfig.name}</span>{" "}
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            {siteConfig.description}
          </p>
        </div>
        <div className="-z-10 absolute bottom-14 left-20 h-[35rem] w-[60rem] bg-gradient-to-bl from-background from-0% to-neutral-800/30 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
