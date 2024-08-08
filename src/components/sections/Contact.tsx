
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact({
  id
}: {
  id?: string
}) {
  return (
    <section aria-labelledby="contact-heading" id={id} className="relative lg:scroll-mt-0 scroll-mt-[95px]">
      <div className="container mx-auto
        flex flex-col
        lg:flex-row lg:justify-between items-center"
      >
        <div className="absolute -top-10 lg:top-24 xl:top-40 bottom-0 left-0 right-0 bg-cyan-500/10 -z-10"></div>
        <div className="flex flex-col items-center text-center lg:flex-1 lg:text-left lg:items-start gap-6 w-full">
          <h2 id="contact-heading" className="font-Playfair_Display font-bold text-5xl">Contact Me</h2>
          <p className="text-lg">I would love to hear from you! Whether you have suggestions, inquiries, or would like to collaborate, feel free to reach out.</p>
          <div className="grid grid-cols-2 gap-6 w-full lg:max-w-[calc(50vw)] text-lg place-items-center lg:place-items-start">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="name">Email</Label>
              <Input placeholder="Your e-mail address" type="email" />
            </div>

            <div className="grid w-full gap-1.5 col-span-2">
              <Label htmlFor="name">Message</Label>
              <Textarea placeholder="Your message" />
            </div>
          </div>
          <button className=" bg-black text-white/80 px-8 py-3 hover:bg-black/85">
              SEND IT
          </button>
        </div>
        
        <div className="mt-12 lg:mt-0 lg:max-w-[calc(50%)] pointer-events-none">
          <img src="/assets/contact/woman.png" alt="Alina Lee" />
        </div>
      </div>
    </section>
  );
}