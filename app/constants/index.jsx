import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { SlSocialSpotify } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { GiStripedSun } from "react-icons/gi";
import { LuHandMetal } from "react-icons/lu";
import { BsTsunami } from "react-icons/bs";
import { GiEvilMoon } from "react-icons/gi";
import { PiSunHorizon } from "react-icons/pi";

export const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export const socialLinks = [
  {
    icon: <FiYoutube />,
    title: "YouTube",
    username: "egarrisxn",
    href: "https://www.youtube.com/channel/UC-o-kaI2yQHH3-vpwLU4muw",
  },
  {
    icon: <FaXTwitter />,
    title: "Twitter",
    username: "e____g_______",
    href: "https://twitter.com/e____g_______",
  },
  {
    icon: <BsInstagram />,
    title: "Instagram",
    username: "eg___xo",
    href: "https://www.instagram.com/eg___xo/",
  },
  {
    icon: <SlSocialSpotify />,
    title: "Spotify",
    username: "egarrisxn",
    href: "https://open.spotify.com/user/egarrisxn?si=c35677378a7c49cb",
  },
  {
    icon: <AiOutlineLinkedin />,
    title: "Linkedin",
    username: "Ethan Garrison",
    href: "https://www.linkedin.com/in/ethan-garrison-261ba4a2/",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    username: "EGARRISXN",
    href: "https://github.com/EGARRISXN",
  },
];

export const themeIcons = [
  {
    icon: <GiStripedSun />,
    title: "Synthwave",
    theme: "synthwave",
  },
  {
    icon: <LuHandMetal />,
    title: "Cyberpunk",
    theme: "cyberpunk",
  },
  {
    icon: <BsTsunami />,
    title: "Aqua",
    theme: "aqua",
  },
  {
    icon: <GiEvilMoon />,
    title: "Dark",
    theme: "dark",
  },
  {
    icon: <PiSunHorizon />,
    title: "Light",
    theme: "light",
  },
];
