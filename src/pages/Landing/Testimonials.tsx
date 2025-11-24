// Testimonials.tsx


interface Testimonial {
  name: string;
  initials: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kelly Kamau",
    initials: "KM",
    feedback: "The bug tracking system is very intuitive and helps our team stay on top of issues.",
  },
  {
    name: "Dave Karanja",
    initials: "DK",
    feedback: "I love how easy it is to track bugs and communicate updates in real time.",
  },
  {
    name: "Stephen Kinuthia",
    initials: "SK",
    feedback: "A reliable tool that has streamlined our QA process significantly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-10">What People Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-green-100 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 text-white font-bold text-lg mb-4 mx-auto">
                {t.initials}
              </div>
              <p className="text-green-900 text-sm">{t.feedback}</p>
              <p className="mt-4 font-semibold text-green-800">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
