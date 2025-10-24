export default function ClientsSection() {
  const clients = ["Amazon", "Dribble", "Hubspot", "Notion", "Netflix", "Zoom"];

  return (
    <section className="section-padding bg-background border-b border-border">
      <div className="container-max">
        <p className="text-center text-muted-foreground mb-12 text-sm font-semibold">
          COMPANIES WE WORK WITH
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center p-4 text-foreground/60 font-semibold text-lg"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
