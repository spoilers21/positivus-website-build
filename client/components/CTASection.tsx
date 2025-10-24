export default function CTASection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-max text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let s make things happen
        </h2>
        <p className="text-xl text-background/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity">
          Get your free proposal
        </button>
      </div>
    </section>
  );
}
