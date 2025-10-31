import { useState } from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description:
        "We conduct in-depth research on your industry, competitors, and target market to develop a comprehensive strategy that aligns with your business objectives.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Our team executes the strategy across all chosen channels, creating compelling content and campaigns tailored to your audience.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor performance metrics and make data-driven adjustments to ensure your campaigns achieve optimal results.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      description:
        "We provide regular reports detailing campaign performance, insights, and recommendations for ongoing improvement.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      description:
        "Based on performance data, we continuously refine and improve strategies to maximize ROI and achieve your long-term business goals.",
    },
  ];

  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Our Working Process
        </h2>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedStep(expandedStep === index ? null : index)
                }
                className="w-full p-6 md:p-8 flex items-center justify-between bg-lime-500/10 hover:bg-lime-500/20 border border-lime-400 rounded-2xl transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center gap-6 text-left">
                  <span className="text-3xl font-bold text-lime-500 min-w-fit">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <span
                  className={`text-3xl font-bold text-lime-500 transition-transform duration-300 ${
                    expandedStep === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {expandedStep === index && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-foreground bg-secondary">
                  <p className="text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
