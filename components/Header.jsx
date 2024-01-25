import Link from "next/link";
import { ThemeToggle } from "@/components/Theme-Toggle";

export default function Header() {
  return (
    <header className="max-w-3xl w-full flex mx-auto p-4 items-center justify-between border-b-2">
      <Link href="/">
        <h1 className="text-xl font-bold">
          eg<span className="text-primary">xblog</span>
        </h1>
      </Link>
      <ThemeToggle />
    </header>
  );
}
