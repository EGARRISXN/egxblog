import { FaGithub, FaXTwitter, FaLinkedin, FaSpotify } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full text-center flex items-center justify-center mx-auto max-w-3xl px-4 py-4 border-t-2 gap-4">
      <Link
        href="https://github.com/EGARRISXN"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-lg"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://twitter.com/e____g_______"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-lg"
      >
        <FaXTwitter />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ethan-garrison-261ba4a2/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-lg"
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://open.spotify.com/user/egarrisxn"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-lg"
      >
        <FaSpotify />
      </Link>
    </div>
  );
}
