import { useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      quote:
        "The expertise and dedication of the Positivus team has been instrumental in transforming our digital presence. Their strategic approach and attention to detail have resulted in measurable improvements across all our marketing channels.",
      author: "Sarah Johnson",
      position: "CEO at Tech Innovations",
    },
    {
      quote:
        "Working with Positivus has been a game-changer for our business. Their comprehensive approach to digital marketing and commitment to delivering results is unmatched. Highly recommended!",
      author: "Michael Chen",
      position: "Founder at Growth Co",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Testimonials
        </h2>

        <div className="bg-foreground text-background rounded-3xl p-8 md:p-16 relative">
          <div className="mb-12">
            <p className="text-lg md:text-2xl leading-relaxed mb-8">
              "{testimonials[activeIndex].quote}"
            </p>
            <div>
              <h4 className="text-xl font-bold">
                {testimonials[activeIndex].author}
              </h4>
              <p className="text-background/70 text-sm">
                {testimonials[activeIndex].position}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary w-8" : "bg-background/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={goToPrevious}
                className="p-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="p-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
