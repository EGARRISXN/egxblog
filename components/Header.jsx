import Link from "next/link";
import { ThemeToggle } from "@/components/Theme-Toggle";

export default function Header() {
  return (
    <header className="w-full relative flex items-center justify-between mx-auto max-w-2xl px-4 py-4 border-b-2">
      <h1 className="text-xl font-bold">
        eg<span className="text-primary">xblog</span>
      </h1>
      <nav>
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
