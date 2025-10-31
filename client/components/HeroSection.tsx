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
          <div
            style={{
              margin: '0 auto',
              width: '600.46px',
              height: '515px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            {/* Illustration */}
          </div>
        </div>
      </div>
    </section>
  );
}
