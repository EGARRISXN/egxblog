import Link from "next/link";
import { ThemeToggle } from "@/components/Theme-Toggle";

export default function Header() {
  return (
    <header className="max-w-3xl flex justify-between mx-auto w-full p-4 border-b-2">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-xl font-bold text-foreground">
            eg<span className="text-primary">xblog</span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="https://egxworld.net/">
          <h1 className="text-xl hover:underline hover:underline-offset-4 hover:text-primary">
            personal site
          </h1>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
