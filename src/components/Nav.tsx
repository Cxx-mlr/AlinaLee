import Link from "next/link";

export default function Nav({
  links
}: {
  links: { name: string, href: string }[]
}) {
  return (
    <nav>
      <ul className="flex gap-10">
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
  );
}