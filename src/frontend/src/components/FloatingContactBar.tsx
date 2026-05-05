import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const PHONE = "+919845949116";
const WA_LINK = "https://wa.me/919845949116";

export default function FloatingContactBar() {
  return (
    <nav
      data-ocid="floating_bar"
      className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden shadow-[0_-4px_24px_rgba(0,0,0,0.18)]"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${PHONE}`}
        data-ocid="floating_bar.call_button"
        className="flex-1 flex items-center justify-center gap-2.5 bg-accent text-white font-bold text-sm py-4 transition-smooth hover:bg-accent/90 active:scale-[0.98]"
        aria-label="Call Prakash Electronics"
      >
        <Phone size={20} aria-hidden="true" />
        <span>Call</span>
      </a>
      <div className="w-px bg-white/20" aria-hidden="true" />
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating_bar.whatsapp_button"
        className="flex-1 flex items-center justify-center gap-2.5 bg-whatsapp text-white font-bold text-sm py-4 transition-smooth hover:bg-whatsapp-hover active:scale-[0.98]"
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp size={20} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}
