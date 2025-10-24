export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Local Restaurant PPC Campaign",
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      stats: "+50% traffic, +25% sales",
    },
    {
      title: "B2B Software SEO Strategy",
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      stats: "1st page ranking, +200% traffic",
    },
    {
      title: "National Retail Social Media",
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      stats: "+25% followers, +20% sales",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="p-8 bg-foreground text-background rounded-2xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4">{study.title}</h3>
              <p className="text-background/80 mb-6 leading-relaxed">
                {study.description}
              </p>
              <p className="font-semibold text-primary mb-6">{study.stats}</p>
              <button className="font-semibold text-background flex items-center gap-2 hover:gap-4 transition-all">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
