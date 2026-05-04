import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const PHONE = "+919845949116";
const PHONE_DISPLAY = "+91 98459 49116";
const WA_LINK = "https://wa.me/919845949116";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Prakash+Electronics,+Modi+Hospital+Rd,+West+of+Chord+Road+2nd+Stage,+Rajajinagar,+Bengaluru,+Karnataka+560010&output=embed";

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="bg-primary py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — contact info */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Find Us
            </p>
            <h2 className="font-display font-bold text-primary-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Visit Us or <span className="text-accent">Get in Touch</span>
            </h2>

            <div className="mt-8 space-y-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-primary-foreground font-semibold text-base">
                    Modi Hospital Rd, near Liberty &amp; Bata Showroom
                  </p>
                  <p className="text-white text-sm mt-0.5">
                    West of Chord Road 2nd Stage, Rajajinagar, <br />
                    Bengaluru, Karnataka 560010
                  </p>
                </div>
              </div>

              {/* Landmark */}
              <div className="flex gap-3">
                <Navigation
                  size={20}
                  className="text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-white text-sm">
                  Landmark: Near Liberty &amp; Bata Showroom, West of Chord Road
                </p>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock
                  size={20}
                  className="text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">
                    Mon–Sat: 10am–8pm
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    Sun: 11am–6pm
                  </p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                data-ocid="contact.call_button"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-8 py-4 text-white font-bold text-base shadow-lg transition-smooth hover:scale-[1.03] hover:shadow-accent/30 hover:shadow-xl active:scale-[0.98]"
              >
                <Phone size={18} aria-hidden="true" />
                Call Now — {PHONE_DISPLAY}
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-8 py-4 text-white font-bold text-base transition-smooth hover:bg-whatsapp-hover hover:scale-[1.03] active:scale-[0.98]"
              >
                <SiWhatsapp size={18} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right column — map */}
          <div
            className="rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-2xl"
            data-ocid="contact.map"
          >
            <iframe
              src={MAPS_EMBED}
              title="Prakash Electronics location — Rajajinagar, Bengaluru"
              width="100%"
              height="440"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
