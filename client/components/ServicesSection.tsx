export default function ServicesSection() {
  const services = [
    {
      title: "Search engine optimization",
      icon: "🔍",
      bgPrimary: true,
    },
    {
      title: "Pay-per-click advertising",
      icon: "💰",
      bgPrimary: false,
    },
    {
      title: "Social Media Marketing",
      icon: "📱",
      bgPrimary: true,
    },
    {
      title: "Email Marketing",
      icon: "✉️",
      bgPrimary: false,
    },
    {
      title: "Content Creation",
      icon: "✍️",
      bgPrimary: true,
    },
    {
      title: "Analytics and Tracking",
      icon: "📊",
      bgPrimary: false,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground flex-shrink-0">
            Services
          </h2>
          <p className="text-foreground/70">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 md:p-12 rounded-2xl flex flex-col justify-between min-h-80 ${
                service.bgPrimary
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground text-background"
              } hover:shadow-lg transition-shadow`}
            >
              <div>
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  {service.title}
                </h3>
              </div>
              <button
                className={`font-semibold text-lg flex items-center gap-2 ${
                  service.bgPrimary
                    ? "text-primary-foreground hover:gap-4"
                    : "text-background hover:gap-4"
                } transition-all`}
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
