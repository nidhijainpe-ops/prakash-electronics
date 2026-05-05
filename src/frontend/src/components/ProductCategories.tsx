import {
  Droplets,
  Fan,
  Flame,
  Shirt,
  Speaker,
  Thermometer,
  Tv,
  Utensils,
  WashingMachine,
  Wind,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  name: string;
  description: string;
}

const CATEGORIES: Category[] = [
  {
    icon: Tv,
    name: "Television",
    description: "4K, OLED & QLED smart TVs of all sizes",
  },
  {
    icon: Thermometer,
    name: "Refrigerator",
    description: "Single door, double door & side-by-side models",
  },
  {
    icon: WashingMachine,
    name: "Washing Machine",
    description: "Top load, front load & semi-automatic washers",
  },
  {
    icon: Wind,
    name: "ACs",
    description: "Split, window & inverter ACs — all major brands",
  },
  {
    icon: Zap,
    name: "Microwave Oven",
    description: "Solo, grill & convection microwave ovens",
  },
  {
    icon: Flame,
    name: "Geysers",
    description: "Instant & storage water heaters for every need",
  },
  {
    icon: Speaker,
    name: "Speaker Systems",
    description: "Home theatre, soundbars & party speakers",
  },
  {
    icon: Utensils,
    name: "Gas Stoves",
    description: "2, 3 & 4-burner gas stoves from top brands",
  },
  {
    icon: Droplets,
    name: "Mixers & Grinders",
    description: "Powerful mixers, grinders & juicers for your kitchen",
  },
  {
    icon: Shirt,
    name: "Steam Irons",
    description: "Dry & steam irons for crisp, wrinkle-free clothes",
  },
  {
    icon: Fan,
    name: "Fans",
    description: "Ceiling, table & pedestal fans from top brands",
  },
];

function CategoryCard({
  category,
  index,
}: { category: Category; index: number }) {
  const Icon = category.icon;
  return (
    <div
      data-ocid={`categories.item.${index + 1}`}
      className="group bg-card border border-border rounded-2xl p-4 flex flex-col gap-3 cursor-default transition-smooth hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 hover:shadow-primary/10"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-smooth group-hover:bg-accent/10 group-hover:scale-110">
        <Icon
          size={24}
          className="text-primary/70 transition-smooth group-hover:text-accent"
          aria-hidden="true"
          strokeWidth={1.5}
        />
      </div>
      <div>
        <h3 className="font-display font-bold text-foreground text-sm leading-tight">
          {category.name}
        </h3>
        <p className="mt-1 text-muted-foreground text-xs leading-snug">
          {category.description}
        </p>
      </div>
    </div>
  );
}

export default function ProductCategories() {
  return (
    <section
      id="categories"
      data-ocid="categories.section"
      className="bg-background py-10 sm:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Range
          </p>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-4xl lg:text-5xl">
            What We Offer
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto">
            Top home appliances under one roof — trusted brands, best prices,
            expert service
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
