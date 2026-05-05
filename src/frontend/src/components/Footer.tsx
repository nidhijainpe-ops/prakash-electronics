import { Clock, MapPin, Phone, Zap } from "lucide-react";

const PHONE = "+919845949116";
const PHONE_DISPLAY = "+91 98459 49116";

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "prakashelectronics")}`;

  return (
    <footer data-ocid="footer" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap
                size={20}
                className="text-accent fill-accent"
                aria-hidden="true"
              />
              <span className="font-display font-bold text-lg tracking-tight">
                Prakash Electronics
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Your neighbourhood electronics expert since 1994. Trusted by
              thousands of families across Bengaluru.
            </p>
            <a
              href={`tel:${PHONE}`}
              data-ocid="footer.call_button"
              className="mt-5 inline-flex items-center gap-2 text-accent font-semibold text-sm transition-smooth hover:text-accent/80"
            >
              <Phone size={15} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Address column */}
          <div>
            <h3 className="font-display font-bold text-sm mb-4 text-primary-foreground/90">
              Find Us
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2.5">
                <MapPin
                  size={16}
                  className="text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Modi Hospital Rd, near Liberty &amp; Bata Showroom, West of
                  Modi Hospital Rd, near Liberty &amp; Bata Showroom, West of
                  Chord Road 2nd Stage, Basaveshwar Nagar, Bengaluru, Karnataka
                  560010
                </p>
              </div>
              <div className="flex gap-2.5">
                <Clock
                  size={16}
                  className="text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-primary-foreground/70 text-sm">
                  <p>Mon–Sat: 10am–8pm</p>
                  <p>Sun: 11am–6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions column */}
          <div>
            <h3 className="font-display font-bold text-sm mb-4 text-primary-foreground/90">
              Quick Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE}`}
                data-ocid="footer.phone_link"
                className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-lg px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-accent hover:border-accent"
              >
                <Phone size={15} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href="https://wa.me/919845949116"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp_link"
                className="inline-flex items-center gap-2 bg-whatsapp/15 border border-whatsapp/30 rounded-lg px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-whatsapp hover:border-whatsapp"
              >
                <span>💬</span>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-primary-foreground/40 text-xs">
          <p>© {year} Prakash Electronics. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/70 hover:text-accent transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
