import { IndianRupee, Package, Trophy, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TrustCard {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

const TRUST_CARDS: TrustCard[] = [
  {
    icon: Trophy,
    title: "30+ Years of Trust",
    subtitle: "Serving Bengaluru families since 1994",
  },
  {
    icon: IndianRupee,
    title: "Best Price Guarantee",
    subtitle: "We match any verified local quote",
  },
  {
    icon: Wrench,
    title: "After-Sales Support",
    subtitle: "Dedicated service & warranty assistance",
  },
  {
    icon: Package,
    title: "All Top Brands",
    subtitle: "Authorised dealer for 12+ major brands",
  },
];

export default function TrustBadges() {
  return (
    <section
      id="why-us"
      data-ocid="trust.section"
      className="bg-muted/30 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-4xl">
            Why Choose Prakash Electronics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                data-ocid={`trust.item.${i + 1}`}
                className="bg-card border border-border rounded-2xl p-7 flex flex-col items-center text-center gap-4 transition-smooth hover:-translate-y-1 hover:shadow-lg hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon
                    size={26}
                    className="text-accent"
                    aria-hidden="true"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-base">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-muted-foreground text-xs leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
