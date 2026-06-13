import React, { useState } from "react";
import Logo from "./Logo";
import { ChevronDown, Heart, Menu, X, Globe, Milestone, Users, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onJoinClick: () => void;
  onDonateClick: () => void;
  onGalleryClick: () => void;
}

export default function Header({ onJoinClick, onDonateClick, onGalleryClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Home",
      href: "#home",
      active: true,
    },
    {
      label: "About Us",
      dropdown: ["Who We Are", "Vision & Mission", "District 324 E", "Our Bylaws"],
    },
    {
      label: "Our Projects",
      dropdown: ["Project Science Kit", "Eco Afforestation", "Food For All", "Scholarship Grants"],
    },
    {
      label: "Events",
      dropdown: ["Youth Mavericks Summit", "Community Camp 2026", "District Assembly"],
    },
    {
      label: "Gallery",
      href: "#gallery",
      onClick: onGalleryClick,
    },
    {
      label: "Join Us",
      dropdown: ["Volunteer Intake", "Mentorship Cohort", "Charter Guidelines"],
    },
    {
      label: "Contact Us",
      href: "#contact",
    },
  ];

  return (
    <header className="relative z-40 px-4 pt-4 md:px-6 md:pt-6 max-w-7xl mx-auto">
      {/* Floating Header Card resembling the user's reference with the new NGO color palette */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4 lg:pl-6 lg:pr-10 lg:py-5.5 flex items-center justify-between transition-all duration-300">
        
        {/* Left: Brand Logo & Short Name */}
        <div className="flex items-center gap-3 lg:gap-4">
          <Logo size={54} className="lg:scale-110 origin-center transition-all duration-300" />
          <div className="hidden sm:block">
            <h1 className="font-condensed font-bold text-text-charcoal text-lg lg:text-2xl leading-tight tracking-wide">
              LEO CLUB OF MAVERICKS
            </h1>
            <p className="text-[10px] lg:text-[11px] font-sans font-semibold text-gray-500 tracking-widest uppercase">
              District 324 E • Youth Service
            </p>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3.5">
          {menuItems.map((item) => {
            const hasDropdown = !!item.dropdown;
            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    className={`inline-flex items-center px-3 py-2.5 text-sm lg:text-[15px] font-semibold tracking-wide rounded-lg transition-all duration-200 cursor-pointer ${
                      item.active
                        ? "text-primary-forest border-b-2 border-primary-forest rounded-b-none"
                        : "text-text-charcoal/85 hover:text-primary-forest hover:bg-supporting-light/20"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm lg:text-[15px] font-semibold tracking-wide text-text-charcoal/85 hover:text-primary-forest rounded-lg hover:bg-supporting-light/20 transition-all cursor-pointer"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 opacity-75 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                )}

                {/* Dropdown Menu Popup */}
                {hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-2xl py-2.5 z-50 text-left"
                      >
                        {item.dropdown?.map((subItem) => (
                          <button
                            key={subItem}
                            onClick={() => {
                              if (subItem.toLowerCase().includes("volunteer") || subItem.toLowerCase().includes("join") || subItem.toLowerCase().includes("intake")) {
                                onJoinClick();
                              } else if (subItem.toLowerCase().includes("project") || subItem.toLowerCase().includes("science") || subItem.toLowerCase().includes("afforestation")) {
                                onJoinClick();
                              } else {
                                onJoinClick();
                              }
                            }}
                            className="w-full text-left px-5 py-2.5 text-xs lg:text-sm font-semibold text-text-charcoal hover:bg-supporting-light/20 hover:text-primary-forest transition-colors block cursor-pointer"
                          >
                            {subItem}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Donate Button & Mobile Burger */}
        <div className="flex items-center gap-3 lg:gap-4 lg:ml-8 xl:ml-12">
          {/* Donate Now Button matching style in image adjusted with new palette */}
          <button
            onClick={onDonateClick}
            className="cursor-pointer group relative overflow-hidden bg-primary-forest text-white font-bold text-sm lg:text-[15px] tracking-wide py-3 px-6 lg:px-7 rounded-full shadow-lg border border-secondary-gold/30 hover:border-secondary-gold flex items-center gap-2.5 transition-all active:scale-[0.97]"
          >
            <div className="absolute inset-0 w-full h-full bg-[#205c24] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Donate Now
              <Heart className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-secondary-gold stroke-[2.5px] transition-transform duration-300 group-hover:scale-125" />
            </span>
          </button>

          {/* Hamburger Menu for Mobile screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text-charcoal hover:bg-supporting-light/25 rounded-xl transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-[calc(100%-8px)] left-4 right-4 bg-white border border-gray-100 rounded-2xl shadow-2xl p-5 z-40 mt-2 text-left"
          >
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2 last:border-none last:pb-0">
                  <div className="font-semibold text-text-charcoal text-sm mb-1">{item.label}</div>
                  {item.dropdown ? (
                    <div className="pl-4 grid grid-cols-2 gap-2 mt-1">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            if (subItem === "Volunteer Intake") onJoinClick();
                            else {
                              onJoinClick();
                            }
                          }}
                          className="text-left text-xs font-medium text-text-charcoal/60 hover:text-primary-forest py-1 transition-all cursor-pointer"
                        >
                          • {subItem}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (item.onClick) item.onClick();
                      }}
                      className="block text-xs font-medium text-text-charcoal/60 hover:text-primary-forest py-1 transition-all"
                    >
                      Visit {item.label} page
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onJoinClick();
                  }}
                  className="w-full bg-primary-forest text-white py-2.5 rounded-lg text-center font-bold text-xs"
                >
                  Join the Mavericks Team
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
