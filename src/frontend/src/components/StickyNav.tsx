import { Phone, Zap } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const PHONE = "+919845949116";
const PHONE_DISPLAY = "+91 98459 49116";
const WA_LINK = "https://wa.me/919845949116";

export default function StickyNav() {
  return (
    <header
      data-ocid="nav"
      className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2 group transition-smooth"
          aria-label="Prakash Electronics — Home"
        >
          <Zap
            size={20}
            className="text-accent fill-accent flex-shrink-0"
            aria-hidden="true"
          />
          <span className="font-display font-bold text-base tracking-tight leading-none">
            Prakash Electronics
          </span>
        </a>

        {/* Contact controls */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            data-ocid="nav.call_button"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:text-accent transition-smooth"
            aria-label="Call Prakash Electronics"
          >
            <Phone size={15} aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            href={`tel:${PHONE}`}
            data-ocid="nav.call_button_mobile"
            className="sm:hidden flex items-center gap-1.5 text-sm font-semibold hover:text-accent transition-smooth"
            aria-label="Call Prakash Electronics"
          >
            <Phone size={16} aria-hidden="true" />
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.whatsapp_button"
            className="flex items-center gap-1.5 bg-whatsapp text-white rounded-full px-3 py-1.5 text-xs font-semibold transition-smooth hover:bg-whatsapp-hover"
            aria-label="Chat on WhatsApp"
          >
            <SiWhatsapp size={14} aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
