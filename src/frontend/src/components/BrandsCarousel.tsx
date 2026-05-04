const BRANDS = [
  "LG",
  "Samsung",
  "Haier",
  "Thomson",
  "Whirlpool",
  "Blue Star",
  "Bosch",
  "IFB",
  "Kodak",
  "Preeti",
  "Prestige",
  "Symphony",
  "Crompton",
  "Orient",
  "Atomberg",
  "Bajaj",
];

// Duplicate list for seamless marquee loop — each item gets a stable unique id
const MARQUEE = [
  ...BRANDS.map((b) => ({ brand: b, id: `${b}-a` })),
  ...BRANDS.map((b) => ({ brand: b, id: `${b}-b` })),
];

export default function BrandsCarousel() {
  return (
    <section
      id="brands"
      data-ocid="brands.section"
      className="bg-muted/40 border-y border-border py-14 overflow-hidden"
      aria-label="Brands we carry"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8">
        <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">
          Authorised dealer for leading brands
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, oklch(var(--muted)), transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, oklch(var(--muted)), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="flex overflow-hidden">
          <ul
            className="flex gap-12 items-center animate-marquee whitespace-nowrap"
            aria-label="Brand list"
          >
            {MARQUEE.map(({ brand, id }, idx) => (
              <li
                key={id}
                data-ocid={`brands.item.${(idx % BRANDS.length) + 1}`}
                className="flex-shrink-0 px-2"
              >
                <span
                  className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-muted-foreground transition-smooth hover:text-primary cursor-default"
                  style={{
                    filter: "grayscale(100%)",
                    transitionProperty: "filter, color",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.filter =
                      "grayscale(0%)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.filter =
                      "grayscale(100%)";
                  }}
                >
                  {brand}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
