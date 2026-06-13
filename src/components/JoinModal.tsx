import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Sparkles, User, Mail, Phone, Calendar, Heart } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    interest: "community",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      // Persist to local storage
      const existingMembers = JSON.parse(localStorage.getItem("leo_members") || "[]");
      localStorage.setItem(
        "leo_members",
        JSON.stringify([...existingMembers, { ...formData, id: Date.now(), joinedAt: new Date().toISOString() }])
      );
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      birthdate: "",
      interest: "community",
      message: "",
    });
    setSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white border border-supporting-light text-text-charcoal shadow-2xl z-10"
          >
            {/* Top gold/green/blue bar decorative accent directly from our NGO palette values */}
            <div className="h-2 w-full bg-gradient-to-r from-primary-forest via-secondary-gold to-accent-blue" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-charcoal/50 hover:text-text-charcoal transition-colors focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8">
              {!success ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-supporting-light/30 p-2.5 rounded-xl border border-primary-forest/10">
                      <Heart className="w-6 h-6 text-primary-forest fill-primary-forest/15" />
                    </div>
                    <div>
                      <h3 className="font-condensed text-3xl font-bold tracking-wide text-text-charcoal uppercase">
                        Become a Maverick
                      </h3>
                      <p className="text-text-charcoal/70 text-xs font-semibold">
                        Join Leo Club of Mavericks, District 324 E
                      </p>
                    </div>
                  </div>

                  <p className="text-text-charcoal/80 text-sm mb-6 leading-relaxed">
                    By joining our Leo movement, you commit to leadership, service, and creating an inclusive world. Fill out the application below to get started!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-text-charcoal/75 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-primary-forest" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 px-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-text-charcoal/75 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-primary-forest" /> Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 px-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-charcoal/75 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-primary-forest" /> Contact No
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 px-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-text-charcoal/75 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary-forest" /> Birth Date (LEO Age: 12-30)
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 px-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all select-none"
                          value={formData.birthdate}
                          onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-charcoal/75 uppercase tracking-wider mb-1.5">
                          Service Interest
                        </label>
                        <select
                          className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 px-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all cursor-pointer"
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        >
                          <option value="community">Community Service</option>
                          <option value="education">Youth Education & Mentors</option>
                          <option value="environment">Environmental Conservation</option>
                          <option value="leadership">Event Coordination & Leadership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-text-charcoal/75 uppercase tracking-wider mb-1.5">
                        Tell us why you want to join (Optional)
                      </label>
                      <textarea
                        rows={2}
                        className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 px-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                        placeholder="I want to serve..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 cursor-pointer bg-primary-forest border border-secondary-gold/40 hover:bg-[#206924] hover:border-secondary-gold text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                          Processing Application...
                        </>
                      ) : (
                        <>Submit Application</>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="inline-block bg-supporting-light/40 p-4 rounded-full mb-4 border border-primary-forest/30"
                  >
                    <CheckCircle className="w-16 h-16 text-primary-forest" />
                  </motion.div>
                  <h3 className="font-condensed text-4xl text-text-charcoal tracking-wide mb-2">
                    WELCOME ON BOARD, MAVERICK!
                  </h3>
                  <p className="text-text-charcoal/80 text-sm max-w-sm mx-auto mb-6">
                    Thank you, <strong className="text-primary-forest">{formData.name}</strong>. Your Leo application under District 324 E has been registered successfully!
                  </p>

                  <div className="bg-bg-ivory border border-primary-forest/20 rounded-xl p-4 text-left max-w-sm mx-auto font-mono text-xs text-primary-forest space-y-2 mb-6 shadow-sm">
                    <div className="text-primary-forest font-bold text-center border-b border-gray-200 pb-2 mb-2">
                      LEO PROVISIONARY ID CARD
                    </div>
                    <div className="flex justify-between">
                      <span>MEMBER NAME:</span>
                      <span className="text-text-charcoal font-semibold">{formData.name.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ASSIGNED DISTRICT:</span>
                      <span className="text-text-charcoal font-semibold">DISTRICT 324 E</span>
                    </div>
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-accent-blue font-bold animate-pulse">PENDING INITIATION</span>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 font-semibold text-sm bg-transparent text-text-charcoal/65 hover:text-text-charcoal border border-gray-300 hover:border-gray-500 rounded-lg transition-all"
                    >
                      Another Join
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 font-semibold text-sm bg-primary-forest text-white border border-secondary-gold/40 rounded-lg transition-all hover:bg-[#206924] hover:border-secondary-gold"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
