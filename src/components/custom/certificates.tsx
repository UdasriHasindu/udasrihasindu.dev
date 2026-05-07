"use client";

import { useEffect, useRef } from "react";

const certificates = [
  {
    title: "Introduction to AI concepts",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/W29WRRTN?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/ai-concepts.webp",
  },
  {
    title: "Introduction to machine learning concepts",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/BCVPV75D?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/ml-concepts.webp",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2025",
    link: "https://www.credly.com/badges/d3a535cd-c63c-4f7f-91a6-cdfe4b159a7c/public_url",
    image: "/certificates/github.webp",
  },
  {
    title: "Train and evaluate regression models",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/W29WRRTN?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/regression-models.webp",
  },
  {
    title: "Introduction to generative AI and agents",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/3ALN74EH?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/generative-ai.webp",
  },
  {
    title: "Fundamentals of AI Agents",
    issuer: "Hugging Face",
    date: "2026",
    link: "https://cas-bridge.xethub.hf.co/xet-bridge-us/67a47037749ea2c4b9fafd4b/6abe31a0c98398503cfa880bf81e6415d97e899f212215fd6daa95192352e99d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cas%2F20260507%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260507T135812Z&X-Amz-Expires=3600&X-Amz-Signature=596b1f30ffb7af8c22aad4a5f01bced5ca68f88e093773e1970248014445a87b&X-Amz-SignedHeaders=host&X-Xet-Cas-Uid=67d8202cd4db484fd75f4918&response-content-disposition=inline%3B+filename*%3DUTF-8%27%272026-05-05.png%3B+filename%3D%222026-05-05.png%22%3B&response-content-type=image%2Fpng&x-amz-checksum-mode=ENABLED&x-id=GetObject&Expires=1778165892&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3ODE2NTg5Mn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2FzLWJyaWRnZS54ZXRodWIuaGYuY28veGV0LWJyaWRnZS11cy82N2E0NzAzNzc0OWVhMmM0YjlmYWZkNGIvNmFiZTMxYTBjOTgzOTg1MDNjZmE4ODBiZjgxZTY0MTVkOTdlODk5ZjIxMjIxNWZkNmRhYTk1MTkyMzUyZTk5ZCoifV19&Signature=bhA4CovOTJw0mS6zARWIbVI7CTcGdDvZ5wQ%7EwyjF7mDnyp8-xb4%7EiA61Qm6JEKuLI8mEExBaC9ceia8TFD6KZqcvdp4r96U9ATn%7EXJT-bm9RhXO2l80HbsFgP16wL8dJv0dPa4KbNDEU-IQ2ZnJT-du2C3pe7xt5edBgL5u41q6iCJj-cjtAvTJ%7EQjlZ%7Er9kaLxKUn-IUc4CbN3hAqbC4NgxlXz0lxKgJ-iO6bjv5s4zIdJV3HYfCPFFITZBHBx16dTH4dw1Y1uiDrUsy9YIwiMxEmXIUSHbZ1DqDd8%7EAoXFKfbRLzHEprjDBNjMnQOCeXjILI1m38YHZjmyjK2qBA__&Key-Pair-Id=K2L8F4GPSG1IFC",
    image: "/certificates/agent-fundamentals.webp",
  },
  {
    title: "Explore and analyze data with Python",
    issuer: "Microsoft Learn",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/UdasriHasindu-9142/W29WRRTN?sharingId=4AFCD8BE1C55E44E",
    image: "/certificates/python-data-analysis.webp",
  },
  {
    title: "BioFusion AI Hackathon",
    issuer: "University of Jayawardhanapura",
    date: "2025",
    link: "https://events.vtools.ieee.org/m/536210",
    image: "/certificates/biofusion.webp",
  },
  {
    title: "LangGraph Essentials - Python",
    issuer: "LangChain Academy",
    date: "2026",
    link: "https://academy.langchain.com/certificates/ng0w4eoysu",
    image: "/certificates/langgraph_essentials.webp",
  },
];

export function Certificates() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    // For a seamless loop we duplicate the items in the DOM and
    // treat half of the scrollWidth as the repeating segment.
    const totalScrollable =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const halfScroll = totalScrollable / 2;
    let scrollPosition = halfScroll;

    const animate = () => {
      const maxScroll = totalScrollable;

      // move left->right by decreasing scrollLeft
      scrollPosition -= 1;
      if (scrollPosition < 0) {
        scrollPosition = halfScroll;
      }

      scrollContainer.scrollLeft = scrollPosition;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Certifications
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Professional certifications and achievements
        </p>

        {/* Full-width Auto-scrolling Carousel */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden pb-4 w-screen relative left-1/2 right-1/2 -mx-[50vw]"
        >
          <div className="flex gap-6 px-4">
            {/* first set */}
            {certificates.map((cert, index) => (
              <a
                key={`a-${index}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg border border-muted-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-64"
              >
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full text-center">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {cert.date}
                  </p>
                </div>
              </a>
            ))}

            {/* duplicate set for seamless loop */}
            {certificates.map((cert, index) => (
              <a
                key={`b-${index}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg border border-muted-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-64"
              >
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full text-center">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {cert.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
