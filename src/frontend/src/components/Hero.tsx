import { MapPin, Phone } from "lucide-react";

const PHONE = "+919845949116";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Prakash+Electronics,+Modi+Hospital+Rd,+near+liberty+and+bata+showroom,+West+of+Chord+Road+2nd+Stage,+Rajajinagar,+Bengaluru,+Karnataka+560010";

export default function Hero() {
  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14"
    >
      {/* Background image with quality-enhancing filter */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/store-front.jpg')",
          filter: "brightness(1.1) contrast(1.15) saturate(1.2)",
        }}
        aria-hidden="true"
      />
      {/* Strong dark gradient overlay for text readability over photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.65) 50%, rgba(10,22,40,0.50) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-black/40 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-widest mb-8 animate-fade-in"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Rajajinagar, Bengaluru
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight max-w-3xl animate-slide-up"
          style={{ textShadow: "0 3px 12px rgba(0,0,0,0.8)" }}
        >
          Bengaluru's Trusted{" "}
          <span className="text-accent">Electronics Store</span>
        </h1>

        {/* Subheading */}
        <p
          className="mt-6 text-white text-lg sm:text-xl max-w-xl leading-relaxed animate-slide-up"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
        >
          TVs • Refrigerators • Washing Machines • ACs &amp; More —{" "}
          <br className="hidden sm:block" />
          All Under One Roof in Rajajinagar
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${PHONE}`}
            data-ocid="hero.call_button"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-8 py-4 text-white font-bold text-base shadow-lg transition-smooth hover:scale-[1.03] hover:shadow-accent/30 hover:shadow-xl active:scale-[0.98]"
          >
            <Phone size={18} aria-hidden="true" />
            Call Us Now
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.directions_button"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/70 bg-white/10 px-8 py-4 text-white font-bold text-base backdrop-blur-sm transition-smooth hover:bg-white/20 hover:border-white active:scale-[0.98]"
          >
            <MapPin size={18} aria-hidden="true" />
            Get Directions
          </a>
        </div>

        {/* Store trust line */}
        <p
          className="mt-8 text-white/80 text-sm font-mono"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
        >
          30+ Years Serving Bengaluru · Mon–Sat 10am–8pm · Sun 11am–6pm
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
        aria-hidden="true"
      >
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/0 to-white/30 rounded-full" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
