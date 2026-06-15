"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeUp, viewport } from "@/lib/animations";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-24 select-none"
      style={{ background: "linear-gradient(135deg, #111816 0%, #1a2e1e 50%, #111816 100%)" }}
      aria-label="Contact section"
    >

      <Container className="relative z-10">
        <SectionTitle
          dark
          eyebrow=""
          title={
            <>
              Join the <span className="text-[#F4B400]">Movement</span>
            </>
          }
          subtitle="Whether you want to volunteer, partner or donate — we'd love to hear from you."
          className="text-center [&_span]:text-[#C8E6C9]/80 [&_span]:border-[#2E7D32]/40 [&_span]:bg-[#2E7D32]/15"
        />

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                label: "Address",
                value: "Leo Club of Mavericks, District 324 E, Chennai, Tamil Nadu 600020",
              },
              {
                icon: Mail,
                label: "Email",
                value: "contact@leoclubmavericks.org",
                href: "mailto:contact@leoclubmavericks.org",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 44 2345 6789",
                href: "tel:+914423456789",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white/[0.06] border border-white/10 rounded-3xl p-7"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#C8E6C9]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-inter font-bold uppercase tracking-widest text-white/40 mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                     className="font-inter text-base md:text-base text-white/80 hover:text-[#F4B400] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] rounded"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-inter text-base md:text-base text-white/80 leading-relaxed">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-inter font-semibold text-[#1F2937] bg-[#F4B400] hover:bg-[#e8a800] shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Heart className="w-4 h-4 fill-[#1F2937]" aria-hidden="true" />
              Support Our Mission
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {submitted ? (
                <div
                    className="bg-[#FAFAF5] rounded-3xl p-8 shadow-2xl text-center"
                   role="status"
                   aria-live="polite"
                >
                <div className="w-16 h-16 rounded-full bg-[#C8E6C9] flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-[#2E7D32]" aria-hidden="true" />
                </div>
                <h3 className="font-citadel text-2xl text-[#1F2937] mb-2">Message Sent!</h3>
                <p className="font-inter text-base text-[#1F2937]/60">
                  Thank you for reaching out. Our team will respond within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
               className="bg-[#FAFAF5] rounded-[32px] p-8 md:p-10 shadow-2xl space-y-5"
                aria-label="Contact form"
              >
                <Field label="Full Name" id="full-name" required />
                <Field label="Email" id="email" type="email" required />
                <Field label="Phone" id="phone" type="tel" />
                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-semibold text-[#1F2937]/60 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 font-inter text-base text-[#1F2937] placeholder:text-[#1F2937]/35 focus:border-[#2E7D32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>
              <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-7 py-3 rounded-full text-lg md:text-xl font-inter font-semibold text-white bg-[#2E7D32] hover:bg-[#1b5e20] hover:scale-[1.02] active:scale-[0.98] shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] focus-visible:ring-offset-2"
              >
              <Send className="w-4 h-4" aria-hidden="true" />
               Send Message
             </button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-inter font-semibold text-[#1F2937]/60 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
className="w-full rounded-xl border border-gray-200 px-4 py-4 font-inter text-base text-[#1F2937] placeholder:text-[#1F2937]/35 focus:border-[#2E7D32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
      />
    </div>
  );
}