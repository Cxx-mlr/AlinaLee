
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Socials from "@/components/Socials";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About Me",
    href: "#about",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "Blog",
    href: "#blog",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3"
      >
        <Link href="/">
          <img src="/assets/header/logo.svg" alt="Alina Lee" width={150} />
        </Link>

        <div className="hidden lg:flex items-center gap-20">
          <Nav links={links} />
          <Socials />
        </div>

        <div className="flex lg:hidden items-center gap-20">
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}