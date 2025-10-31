import { useState } from "react";

export default function TeamSection() {
  const teamMembers = [
    {
      number: "01",
      name: "John Smith",
      role: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      number: "02",
      name: "Jane Doe",
      role: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      number: "03",
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      number: "04",
      name: "Emily Johnson",
      role: "PPC Manager",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      number: "05",
      name: "Brian Williams",
      role: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      number: "06",
      name: "Sarah Kim",
      role: "Content Creator",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Team
        </h2>

        <div className="space-y-4 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedMember(expandedMember === index ? null : index)
                }
                className="w-full p-6 md:p-8 flex items-center justify-between bg-lime-500/10 hover:bg-lime-500/20 border border-lime-400 rounded-2xl transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center gap-6 text-left">
                  <span className="text-3xl font-bold text-lime-500 min-w-fit">
                    {member.number}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-lime-500">
                      {member.role}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-3xl font-bold text-lime-500 transition-transform duration-300 ${
                    expandedMember === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {expandedMember === index && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 bg-lime-500/5 rounded-b-2xl">
                  <p className="text-foreground/80 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary">See all team</button>
        </div>
      </div>
    </section>
  );
}
