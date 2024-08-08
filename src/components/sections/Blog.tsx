
const blogs = [
  {
    title: "Why The Trend Of Minimalism",
    description: "Minimalism in photography is about focusing on simplicity and composition. Discover how this trend can transform your work and help you convey powerful messages through subtlety.",
    date: "3.11.2021",
    tag: "TRENDS",
  },
  {
    title: "Simple Tips & Tricks Of Photography",
    description: "Elevate your photography skills with these easy-to-follow tips. From mastering lighting to finding the perfect angle, these tricks will enhance your creativity and technical abilities.",
    date: "3.11.2021",
    tag: "TRENDS",
  },
  {
    title: "World's Top Photograph Collection",
    description: "Explore a curated selection of breathtaking photographs from renowned artists worldwide. Get inspired by the diversity and innovation present in contemporary photography.",
    date: "3.11.2021",
    tag: "COLLECTIONS",
  },
  {
    title: "How To Get Model Look Portraits",
    description: "Learn the secrets to capturing stunning portraits that showcase your subject's natural beauty. Discover techniques to enhance lighting, pose, and expression to achieve professional-quality results.",
    date: "3.11.2021",
    tag: "PORTRAITS",
  },
];

export default function Blog({
  id
}: {
  id?: string
}) {
  return (
    <section aria-labelledby="blog-heading" id={id} className="container mx-auto lg:scroll-mt-[100px] scroll-mt-[90px]
      flex flex-col"
    >
      <div className="flex flex-col gap-8 items-center lg:items-start lg:ml-28">
        <h2 id="blog-heading" className="font-Playfair_Display font-medium text-5xl mb-2">Blog</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {blogs.map((blog, index) => {
            return (
              <li key={index}
                className="flex flex-col lg:items-start lg:text-left gap-4
                w-fit bg-gray-100/50 p-4"
              >

                <div className="flex gap-12 text-black/55 text-sm">
                  <span>{blog.date}</span>
                  <span>{blog.tag}</span>
                </div>
                <h3 className="font-Playfair_Display font-medium text-4xl mb-2">{blog.title}</h3>
                <p className="line-clamp-2 text-lg">{blog.description}</p>
              </li>
            );
          })}
        </ul>
        <button className="mt-6 mb-9 bg-black text-white/80 px-8 py-3 hover:bg-black/85">VIEW ALL BLOGS</button>
      </div>
    </section>
  );
}