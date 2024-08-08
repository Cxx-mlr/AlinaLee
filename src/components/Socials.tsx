
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/",
  },
  {
    icon: <FaTwitter />,
    href: "https://x.com",
  },
  {
    icon: <FaPinterest />,
    href: "https://www.pinterest.com",
  },
  {
    icon: <ImInstagram />,
    href: "https://www.instagram.com/",
  },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/",
  },
];

export default function Socials({
  ulClassName, linkClassName
}: {
  ulClassName?: string, linkClassName?: string
}) {
  return (
    <ul className={`flex gap-6 ${ulClassName}`}>
      {socials.map((social, index) => {
        return (
          <li key={index}>
            <Link href={social.href}
              target="_blank"
              className={`hover:text-cyan-500/50 ${linkClassName}`}>
              {social.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}