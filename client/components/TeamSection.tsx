export default function TeamSection() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-secondary rounded-xl border-2 border-foreground hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-primary mb-4">
                {member.role}
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {member.description}
              </p>
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
