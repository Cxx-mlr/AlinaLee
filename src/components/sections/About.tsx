

export default function About({
  id
}: {
  id?: string
}) {
  return (
    <section aria-labelledby="about-heading" id={id} className="container mx-auto bg-gray-100/70 py-12 lg:py-0 lg:scroll-mt-0 scroll-mt-[68px]
      flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-left lg:text-left"
    >
      <div className="lg:order-2 flex flex-col gap-8 lg:gap-14 items-center lg:items-start">
        <h2 id="about-heading" className="font-Playfair_Display font-medium text-5xl">About Me</h2>
        <p className="max-w-[500px] text-lg">Hi, I&apos;m Alina Lee, a Los Angeles-based photographer and filmmaker with a deep love for storytelling.
          <br /><br />My journey began at a young age when I picked up my first camera, and I&apos;ve been capturing moments ever since.
          <br /><br />My work spans various genres, including fashion, portrait, urban, events, and nature photography. I believe in the power of visuals to inspire and evoke emotion, and I strive to create images that resonate with my audience.
        </p>
        <button className="bg-black text-white/80 px-8 py-3 hover:bg-black/85
          w-fit"
        >
          VIEW MY WORKS
        </button>
      </div>

      <div className="lg:order-1 pointer-events-none">
        <img src="/assets/about/woman.png" alt="" />
      </div>
    </section>
  );
}