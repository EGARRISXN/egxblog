import { FiGithub } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full text-center flex items-center justify-center mx-auto max-w-2xl px-4 py-4 border-t-2">
      <Link href="https://github.com/EGARRISXN">
        <FiGithub />
      </Link>
    </div>
  );
}
