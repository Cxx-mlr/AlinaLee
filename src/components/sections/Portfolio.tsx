"use client";

import { useState } from "react";

const tags = ["ALL", "FASHION", "PORTRAIT", "URBAN", "EVENTS", "NATURE"];

const gallery = [
  {
    tags: ['EVENTS'],
    ratio: "vertical",
  },
  {
    tags: ['EVENTS', 'PORTRAIT', 'URBAN'],
    ratio: "big",
  },
  {
    tags: ['PORTRAIT', 'FASHION', 'EVENTS'],
    ratio: "big",
  },
  {
    tags: ['PORTRAIT', 'EVENTS', 'FASHION', 'NATURE', 'URBAN'],
    ratio: "vertical",
  },
  {
    tags: ['EVENTS', 'FASHION', 'URBAN', 'NATURE', 'PORTRAIT'],
    ratio: "vertical",
  },
  {
    tags: ['FASHION', 'EVENTS', 'URBAN', 'PORTRAIT'],
    ratio: "horizontal",
  },
  {
    tags: ['EVENTS', 'FASHION', 'URBAN', 'PORTRAIT'],
    ratio: "vertical",
  },
  {
    tags: ['URBAN', 'EVENTS', 'FASHION'],
    ratio: "horizontal",
  },
  {
    tags: ['EVENTS', 'URBAN', 'FASHION'],
    ratio: "horizontal",
  },
  {
    tags: ['FASHION'],
    ratio: "horizontal",
  },
]

export default function Portfolio({
  id
}: {
  id?: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTag = tags[currentIndex];

  return (
    <section aria-labelledby="portfolio-heading" id={id} className="container mx-auto scroll-mt-[65px]
      border-2 py-16 border-dashed
      flex flex-col"
    >
      <div className="flex flex-col gap-5 items-center lg:items-start lg:ml-28">
        <h2 id="portfolio-heading" className="font-Playfair_Display font-medium text-5xl">Portfolio</h2>
        <ul className="grid grid-cols-3 sm:flex flex-wrap gap-6">
          {tags.map((tag, index) => {
            return (
              <li key={index}
                className={`${index === currentIndex && "font-bold"} w-fit px-4 rounded-full py-2 text-left hover:bg-black/70 hover:text-white/80 hover:cursor-pointer`}
                onClick={() => {
                  setCurrentIndex(index)
                }}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <ul className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] auto-rows-[100px] grid-flow-dense
          gap-6"
        >
          {gallery.filter((item) => currentIndex === 0 || item.tags.includes(currentTag)).map((item, index) => {
            return (
              <li key={index} className={`${item.ratio} bg-cyan-500/10 flex items-center justify-center font-semibold`}>
                Placeholder {index + 1}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}