

import Socials from "@/components/Socials";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto
     mt-[80px] xl:mt-[110px] mb-[130px]
     flex flex-col lg:flex-row gap-12 justify-around items-center lg:items-start"
    >
      <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left max-w-[300px]">
        <h3 className="font-Playfair_Display text-2xl font-semibold">Get In Touch</h3>
        <Link key={1}
          aria-label="email"
          href="mailto:info@interno-design.com"
          className="font-medium text-[17px] text-black/75
          hover:text-orange-700/40 hover:cursor-pointer"
        >
          info@alinalee-photography.com
        </Link>
        <Link key={2}
          aria-label="phone number"
          href="tel:+1123456789"
          className="font-medium text-[16px] text-black/75
          hover:text-orange-700/40 hover:cursor-pointer"
        >
          +1 (123) 456-789
        </Link>
      </div>

      <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left max-w-[250px]">
        <h3 className="font-Playfair_Display text-2xl font-semibold">Where&apos;s My Office?</h3>
        <Link key={0}
          aria-label="company address"
          href="https://maps.app.goo.gl/V5FUdBbudLuooqBn6"
          target="_blank"
          className="font-medium text-[17px] text-black/75
          hover:text-orange-700/40 hover:cursor-pointer"
        >
          123 Maple Street, Suite 200, San Francisco, California 94105
        </Link>
      </div>

      <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left max-w-[250px]">
        <h3 className="font-Playfair_Display text-2xl font-semibold">My Social Links</h3>
        <Socials />
      </div>
    </footer>
  );
}