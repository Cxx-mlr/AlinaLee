
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import { CiMenuFries } from "react-icons/ci";

import Socials from "@/components/Socials";


export default function MobileNav({
  links
}: {
  links: { name: string, href: string }[]
}) {
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-3xl" />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <nav className="flex flex-col items-center gap-10">
          <img src="/assets/header/logo.svg" alt="Alina Lee" />
          <Socials />
          <ul className="flex flex-col items-center gap-8 mt-8
            text-lg"
          >
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link scroll href={link.href} className="hover:border-b-2 border-black/85">
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}