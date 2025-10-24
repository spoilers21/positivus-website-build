export default function HeroSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6 text-foreground">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="btn-primary">Book a consultation</button>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-primary/10 rounded-2xl flex items-center justify-center">
              <svg
                className="w-32 h-32 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
