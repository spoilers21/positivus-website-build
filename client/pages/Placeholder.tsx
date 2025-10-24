import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Placeholder() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 section-padding">
        <div className="container-max flex flex-col items-center justify-center min-h-96">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Page Coming Soon
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              This page is currently under development. Keep an eye on your inbox
              for updates, or{" "}
              <a href="/" className="text-primary font-semibold hover:underline">
                return to the homepage
              </a>{" "}
              to explore more.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
