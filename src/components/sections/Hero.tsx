

export default function Hero({
  id
}: {
  id?: string
}) {
  return (
    <section aria-labelledby="hero-heading" id={id} className="container mx-auto
      flex flex-col justify-center lg:-mt-12"
    >
      <div className="flex flex-col items-center justify-center gap-1
        text-center
        pt-32
        lg:items-start lg:text-left
        lg:absolute lg:pt-0 lg:pb-0 lg:-mt-8"
      >
        <h1 id="hero-heading" className="font-Playfair_Display text-5xl lg:text-7xl font-bold">
          Photographer<br />& Film Maker
        </h1>
        <p className="mt-2 text-xl font-medium text-black/80">Los Angeles, USA</p>
        <button className="mt-8 mb-9 bg-black text-white/80 px-8 py-3 hover:bg-black/85">HIRE ME</button>
      </div>

      <div className="flex justify-end pointer-events-none">
        <img src="/assets/home/woman.png" alt="" />
      </div>
    </section>
  );
}