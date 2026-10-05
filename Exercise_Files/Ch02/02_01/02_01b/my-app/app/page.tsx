import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center sm:items-start sm:text-left gap-10">
      
      {/* Brand Logo Header */}
      <Image
        className="dark:invert h-5 w-[100px]"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      
      {/* Primary Landing Content */}
      <div className="flex flex-col gap-6">
        <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
          Hi, I am a Developer. Welcome to my space.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I build sleek web apps using Next.js, React, and Tailwind CSS. Explore my work using the project links in the header navigation menu above.
        </p>
      </div>
      
      {/* Primary Action Button Options */}
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full sm:w-auto">
        <a
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black px-6 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert h-[14px] w-4"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={14}
          />
          View My GitHub
        </a>
        <a
          className="flex h-12 items-center justify-center rounded-full border border-solid border-zinc-200 px-6 transition-colors hover:border-transparent hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>

    </div>
  );
}
