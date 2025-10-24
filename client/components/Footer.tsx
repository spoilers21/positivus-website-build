import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="section-padding">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-background">
              Positivus
            </h3>
            <div className="space-y-4 text-background/80">
              <div>
                <p className="font-semibold">Email:</p>
                <a
                  href="mailto:info@positivus.com"
                  className="hover:text-primary transition-colors"
                >
                  info@positivus.com
                </a>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <a
                  href="tel:+15555678901"
                  className="hover:text-primary transition-colors"
                >
                  555 567 8901
                </a>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 text-background">
              Subscribe to our news
            </h4>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="container-max flex flex-col md:flex-row justify-between items-center gap-4 text-background/70 text-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <a href="/" className="hover:text-background transition-colors">
                About us
              </a>
              <a href="/" className="hover:text-background transition-colors">
                Services
              </a>
              <a href="/" className="hover:text-background transition-colors">
                Use Cases
              </a>
              <a href="/" className="hover:text-background transition-colors">
                Pricing
              </a>
              <a href="/" className="hover:text-background transition-colors">
                Blog
              </a>
            </div>
            <p>© 2023 Positivus. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
