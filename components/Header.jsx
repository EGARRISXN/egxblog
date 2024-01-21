import Link from "next/link";
import { ThemeToggle } from "@/components/Theme-Toggle";

export default function Header() {
  return (
    <header className="w-full relative flex items-center justify-between mx-auto max-w-3xl px-4 py-4 border-b-2">
      <Link href="/">
        <h1 className="text-xl font-bold">
          eg<span className="text-primary">xblog</span>
        </h1>
      </Link>

      <ThemeToggle />
    </header>
  );
}
