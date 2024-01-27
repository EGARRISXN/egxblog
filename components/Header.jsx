import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/Theme-Toggle";

export default function Header() {
  return (
    <header className="max-w-3xl flex justify-between mx-auto w-full py-4 border-b-2">
      <div className="flex">
        <Link href="/">
          <Button
            variant="link"
            className="font-bold text-2xl text-foreground no-underline hover:no-underline"
          >
            eg<span className="text-primary">xblog</span>
          </Button>
        </Link>
      </div>
      <div className="flex gap-2 px-4">
        <Link href="https://egxworld.net/">
          <Button variant="outline" className="text-foreground">
            egxworld
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
