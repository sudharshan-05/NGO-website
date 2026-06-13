import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Sparkles, Heart, CreditCard, DollarSign } from "lucide-react";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "50",
    customAmount: "",
    cause: "education",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const predefinedAmounts = ["10", "25", "50", "100", "250"];

  const handleAmountSelect = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      amount: val,
      customAmount: "",
    }));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({
      ...prev,
      amount: "custom",
      customAmount: val,
    }));
  };

  const currentAmountDisplay = () => {
    if (formData.amount === "custom") {
      return formData.customAmount || "0";
    }
    return formData.amount;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment authorization
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      // Save contribution state
      const existingDonations = JSON.parse(localStorage.getItem("leo_donations") || "[]");
      const amtNum = parseFloat(currentAmountDisplay()) || 0;
      localStorage.setItem(
        "leo_donations",
        JSON.stringify([...existingDonations, { 
          name: formData.name || "Anonymous donor",
          email: formData.email,
          amount: amtNum, 
          cause: formData.cause,
          id: Date.now(), 
          donatedAt: new Date().toISOString() 
        }])
      );
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      amount: "50",
      customAmount: "",
      cause: "education",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
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
            {/* Top gold/green bar decorative accent */}
            <div className="h-2 w-full bg-gradient-to-r from-primary-forest via-secondary-gold to-[#aed4af]" />

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
                      <Heart className="w-6 h-6 text-primary-forest fill-primary-forest/20" />
                    </div>
                    <div>
                      <h3 className="font-condensed text-3xl font-bold tracking-wide text-text-charcoal uppercase">
                        Empower Service
                      </h3>
                      <p className="text-text-charcoal/70 text-xs font-semibold">
                        Contributions fund community service & materials
                      </p>
                    </div>
                  </div>

                  <p className="text-text-charcoal/80 text-xs mb-5 leading-relaxed">
                    100% of your contributions go directly to educational materials, food drives, and ecological projects managed by the Mavericks.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Amount selection */}
                    <div>
                      <label className="block text-[10px] font-bold text-text-charcoal/70 uppercase tracking-wider mb-2">
                        Select Donation Amount (USD $)
                      </label>
                      <div className="grid grid-cols-5 gap-2 mb-2">
                        {predefinedAmounts.map((amt) => {
                          const isSelected = formData.amount === amt;
                          return (
                            <button
                              key={amt}
                              type="button"
                              onClick={() => handleAmountSelect(amt)}
                              className={`py-2 px-1 rounded-lg text-sm font-bold border transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-secondary-gold border-secondary-gold text-text-charcoal shadow-md shadow-secondary-gold/20 scale-[1.03]"
                                  : "bg-bg-ivory border-gray-200 text-text-charcoal/80 hover:border-primary-forest"
                              }`}
                            >
                              ${amt}
                            </button>
                          );
                        })}
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-text-charcoal/55 text-sm font-semibold">$</span>
                        <input
                          type="number"
                          className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 pl-7 pr-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                          placeholder="Custom Donation Amount"
                          value={formData.customAmount}
                          onChange={handleCustomAmountChange}
                        />
                      </div>
                    </div>

                    {/* Support Project choice */}
                    <div>
                      <label className="block text-[10px] font-semibold text-text-charcoal/70 uppercase tracking-widest mb-1">
                        Select Cause / Project
                      </label>
                      <select
                        className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 px-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all cursor-pointer"
                        value={formData.cause}
                        onChange={(e) => setFormData({ ...formData, cause: e.target.value })}
                      >
                        <option value="education">Smart Science Classrooms (School Kits)</option>
                        <option value="environment">Ecological Afforestation Campaigns</option>
                        <option value="hunger">Food for Orphanages & Elder Care</option>
                        <option value="youth">Youth Leadership Development Programs</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-text-charcoal/70 uppercase tracking-wider mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-bg-ivory border border-gray-200 rounded-lg py-2 px-3 text-sm text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-text-charcoal/70 uppercase tracking-wider mb-1">
                          Email Address
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
                    </div>

                    {/* Credit Card Details */}
                    <div className="bg-bg-ivory rounded-xl p-3 border border-supporting-light/40 space-y-3">
                      <div className="text-[10px] font-bold text-primary-forest uppercase tracking-wider flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5" /> Secure Card Donation
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                        <div className="md:col-span-8">
                          <input
                            type="text"
                            required
                            maxLength={19}
                            className="w-full bg-white border border-gray-200 rounded-lg py-1.5 px-3 text-xs text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                            placeholder="Card Number (XXXX-XXXX-XXXX-XXXX)"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim() })}
                          />
                        </div>
                        <div className="md:col-span-4 flex gap-1">
                          <input
                            type="text"
                            required
                            maxLength={5}
                            className="w-1/2 bg-white border border-gray-200 rounded-lg py-1.5 px-2 text-xs text-center text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                            placeholder="MM/YY"
                            value={formData.cardExpiry}
                            onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          />
                          <input
                            type="password"
                            required
                            maxLength={4}
                            className="w-1/2 bg-white border border-gray-200 rounded-lg py-1.5 px-2 text-xs text-center text-text-charcoal focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest transition-all"
                            placeholder="CVC"
                            value={formData.cardCvc}
                            onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-1.5 cursor-pointer bg-secondary-gold hover:bg-[#ffc629] border border-secondary-gold text-text-charcoal font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-t-text-charcoal border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                          Processing Contribution...
                        </>
                      ) : (
                        <>Contribute ${currentAmountDisplay() || "0"} Now</>
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
                    className="inline-block bg-supporting-light/40 p-4 rounded-full mb-4 border border-supporting-light"
                  >
                    <CheckCircle className="w-16 h-16 text-primary-forest" />
                  </motion.div>
                  <h3 className="font-condensed text-4xl text-text-charcoal font-bold tracking-wide mb-2 uppercase">
                    THANK YOU FOR YOUR SERVICE!
                  </h3>
                  <p className="text-text-charcoal/80 text-sm max-w-sm mx-auto mb-6">
                    You have successfully contributed <strong className="text-primary-forest">${currentAmountDisplay()}</strong> to the cause. Your generosity makes an educational change possible!
                  </p>

                  <div className="border border-primary-forest/20 rounded-2xl p-5 text-left max-w-sm mx-auto bg-bg-ivory relative overflow-hidden shadow-sm">
                    {/* Background SVG Seal */}
                    <div className="absolute right-[-10px] bottom-[-10px] opacity-[0.05]">
                      <Heart className="w-32 h-32 text-primary-forest" />
                    </div>

                    <div className="font-condensed text-primary-forest text-xl font-bold border-b border-gray-200 pb-1 mb-2 tracking-widest text-center">
                      CERTIFICATE OF APPRECIATION
                    </div>
                    <p className="text-[10px] text-text-charcoal/60 font-mono mb-3 leading-normal text-center">
                      Granted by the Board of Directors of District 324 E to acknowledge the noble philanthropic contribution of:
                    </p>
                    <div className="text-center font-typewriter text-sm font-bold text-text-charcoal mb-3">
                      {formData.name.toUpperCase()}
                    </div>
                    <div className="flex justify-between font-mono text-[9px] text-[#235e26] font-semibold border-t border-gray-100 pt-2">
                      <span>CAUSE: {formData.cause.toUpperCase()}</span>
                      <span>AMT: ${currentAmountDisplay()}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center mt-6">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 font-semibold text-sm bg-transparent text-text-charcoal/70 hover:text-text-charcoal border border-gray-300 hover:border-gray-500 rounded-lg transition-all"
                    >
                      Contribute More
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 font-bold text-sm bg-primary-forest border border-primary-forest text-white rounded-lg transition-all hover:bg-[#206924]"
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
