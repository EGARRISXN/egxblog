import Link from "next/link";
import AuthButton from "./AuthButton";
import ThemeOptions from "./ThemeOptions";
import { siteLinks, socialLinks } from "@/app/constants";

export default function NavBar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200">
        <nav className="navbar w-full border-b border-base-100 h-16">
          <div className="navbar-start">
            <div className="hover:text-secondary">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
          </div>

          <div className="navbar-end">
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4">
          {/* X Button */}
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="btn btn-square btn-ghost hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>

          {/* Site links */}
          {siteLinks.map((link, index) => (
            <li key={index} className="hover:text-primary">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

          <div className="divider">Links</div>

          {/* Social links */}
          {socialLinks.map((socialLink) => (
            <li
              key={socialLink.title}
              className="tooltip tooltip-top hover:text-secondary"
              data-tip={socialLink.username}
            >
              <a
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialLink.icon} {socialLink.title}
              </a>
            </li>
          ))}

          <div className="divider">Themes</div>
          <div>
            <ThemeOptions />
          </div>
        </ul>
      </div>
    </div>
  );
}
