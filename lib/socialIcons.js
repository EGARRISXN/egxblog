import Link from "next/link";
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaSpotify,
  FaInstagram,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <>
      <Link
        href="https://github.com/EGARRISXN"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-lg"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ethan-garrison"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-lg"
      >
        <FaLinkedin />
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
        href="https://www.instagram.com/eg___xo"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-lg"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://open.spotify.com/user/egarrisxn"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary text-lg"
      >
        <FaSpotify />
      </Link>
    </>
  );
};

export default SocialIcons;
