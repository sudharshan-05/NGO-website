import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  BookOpen, 
  Leaf, 
  Sparkles, 
  Utensils, 
  Calendar, 
  Users, 
  ChevronRight, 
  Award,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";

// Types for our initiatives
export interface Initiative {
  id: string;
  name: string;
  neighborhood: string;
  category: "food" | "education" | "healthcare" | "environment" | "women";
  campaign: string;
  date: string;
  peopleHelped: number;
  peopleHelpedLabel: string;
  description: string;
  volunteers: number;
  resourcesCount: number;
  resourcesLabel: string;
  image: string;
  // Percentage coordinates on the map viewbox (1000x750)
  x: number; // percentage left (0 to 100)
  y: number; // percentage top (0 to 100)
  // Tooltip direction to prevent overlapping
  labelPosition?: "top" | "bottom" | "left" | "right";
}

// 5 core Categories to map colors, icons, and theme colors
export const CATEGORIES = {
  food: {
    name: "Food & Nutrition",
    color: "#22c55e", 
    hex: "#22c55e",
    bg: "bg-emerald-500",
    text: "text-emerald-600",
    glow: "rgba(34, 197, 94, 0.35)",
    activeGlow: "rgba(34, 197, 94, 0.8)",
    icon: Utensils,
    iconBg: "bg-emerald-100 text-emerald-700",
    lightBg: "bg-emerald-50/80",
    accentBorder: "border-emerald-200",
  },
  education: {
    name: "Education",
    color: "#3b82f6", 
    hex: "#3b82f6",
    bg: "bg-blue-500",
    text: "text-blue-600",
    glow: "rgba(59, 130, 246, 0.35)",
    activeGlow: "rgba(59, 130, 246, 0.8)",
    icon: BookOpen,
    iconBg: "bg-blue-100 text-blue-700",
    lightBg: "bg-blue-50/80",
    accentBorder: "border-blue-200",
  },
  healthcare: {
    name: "Healthcare",
    color: "#a855f7", 
    hex: "#a855f7",
    bg: "bg-purple-500",
    text: "text-purple-600",
    glow: "rgba(168, 85, 247, 0.35)",
    activeGlow: "rgba(168, 85, 247, 0.8)",
    icon: Heart,
    iconBg: "bg-purple-100 text-purple-700",
    lightBg: "bg-purple-50/80",
    accentBorder: "border-purple-200",
  },
  environment: {
    name: "Environment",
    color: "#f59e0b", 
    hex: "#f59e0b",
    bg: "bg-amber-500",
    text: "text-amber-600",
    glow: "rgba(245, 158, 11, 0.35)",
    activeGlow: "rgba(245, 158, 11, 0.8)",
    icon: Leaf,
    iconBg: "bg-amber-100 text-amber-700",
    lightBg: "bg-amber-50/80",
    accentBorder: "border-amber-200",
  },
  women: {
    name: "Women Empowerment",
    color: "#ec4899", 
    hex: "#ec4899",
    bg: "bg-rose-500",
    text: "text-rose-600",
    glow: "rgba(236, 72, 153, 0.35)",
    activeGlow: "rgba(236, 72, 153, 0.8)",
    icon: Sparkles,
    iconBg: "bg-rose-100 text-rose-700",
    lightBg: "bg-rose-50/80",
    accentBorder: "border-rose-200",
  },
};

// Rich, highly specific local community dataset based on Chennai neighborhood initiatives.
// Each location has a unique image, custom title/info, and specific physical coords.
const INITIATIVES: Initiative[] = [
  {
    id: "guindy",
    name: "Guindy",
    neighborhood: "Guindy Region",
    category: "food",
    campaign: "Nutritious Food Drives",
    date: "12 June 2026",
    peopleHelped: 150,
    peopleHelpedLabel: "150 Families Nourished",
    description: "Distributed wholesome, balanced meals, nutrition supplies, and fresh produce kits to under-resourced communities in the Guindy sector.",
    volunteers: 20,
    resourcesCount: 250,
    resourcesLabel: "Meals Supplied",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=720&auto=format&fit=crop",
    x: 44.5,
    y: 63.5,
    labelPosition: "top"
  },
  {
    id: "ambattur",
    name: "Ambattur",
    neighborhood: "Ambattur Industrial Hub",
    category: "food",
    campaign: "Cooperative Soup Kitchen",
    date: "10 June 2026",
    peopleHelped: 320,
    peopleHelpedLabel: "320 Laborers Served",
    description: "Sustaining a daily community kitchen supplying affordable heat-and-eat hot meals to working daily-wage families and local workers.",
    volunteers: 15,
    resourcesCount: 450,
    resourcesLabel: "Warm Bowls Served",
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b2ce?q=80&w=720&auto=format&fit=crop",
    x: 31.5,
    y: 25.5,
    labelPosition: "top"
  },
  {
    id: "annanagar",
    name: "Anna Nagar",
    neighborhood: "Anna Nagar Ext.",
    category: "education",
    campaign: "Digital Empowerment Centers",
    date: "11 June 2026",
    peopleHelped: 80,
    peopleHelpedLabel: "80 Youth Empowered",
    description: "Established modern computational classrooms containing tablet-based interactive platforms, software tutorials, and online resources.",
    volunteers: 12,
    resourcesCount: 15,
    resourcesLabel: "Digital Devices",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=720&auto=format&fit=crop",
    x: 41.5,
    y: 36.5,
    labelPosition: "left"
  },
  {
    id: "egmore",
    name: "Egmore",
    neighborhood: "Egmore Center",
    category: "food",
    campaign: "Zero Food Waste Program",
    date: "08 June 2026",
    peopleHelped: 190,
    peopleHelpedLabel: "190 Households Supported",
    description: "Pioneered a supply loop redistributing clean, fresh unsold marketplace products to families experiencing temporary shelter deficits.",
    volunteers: 10,
    resourcesCount: 310,
    resourcesLabel: "Produce Shelves Filled",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=720&auto=format&fit=crop",
    x: 51.5,
    y: 38.5,
    labelPosition: "top"
  },
  {
    id: "royapettah",
    name: "Royapettah",
    neighborhood: "Royapettah District",
    category: "healthcare",
    campaign: "Mobile Medical Caravan",
    date: "13 June 2026",
    peopleHelped: 210,
    peopleHelpedLabel: "210 Diagnostics Done",
    description: "Mobilized customized medical health vehicles to test blood indicators, check eyesight, and supply common pharmacy aid packs.",
    volunteers: 18,
    resourcesCount: 200,
    resourcesLabel: "Hygiene kits Distributed",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=720&auto=format&fit=crop",
    x: 62.0,
    y: 42.0,
    labelPosition: "right"
  },
  {
    id: "mylapore",
    name: "Mylapore",
    neighborhood: "Mylapore Heritage Area",
    category: "healthcare",
    campaign: "Senior Vision Correction Drive",
    date: "09 June 2026",
    peopleHelped: 95,
    peopleHelpedLabel: "95 Seniors Assisted",
    description: "Conducted focused ophthalmology examinations and customized prescription adjustments for elderly citizens.",
    volunteers: 14,
    resourcesCount: 40,
    resourcesLabel: "Lenses Dispensed",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=720&auto=format&fit=crop",
    x: 61.0,
    y: 51.0,
    labelPosition: "right"
  },
  {
    id: "adyar",
    name: "Adyar",
    neighborhood: "Adyar Sector",
    category: "healthcare",
    campaign: "Maternal Wellness Workshops",
    date: "07 June 2026",
    peopleHelped: 140,
    peopleHelpedLabel: "140 Mothers Trained",
    description: "Delivering community medical guidance workshops focusing on motherhood nutrition, sanitation products, and prenatal wellness checklists.",
    volunteers: 10,
    resourcesCount: 150,
    resourcesLabel: "Wellness Packages",
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=720&auto=format&fit=crop",
    x: 58.5,
    y: 59.5,
    labelPosition: "bottom"
  },
  {
    id: "sholinganallur",
    name: "Sholinganallur",
    neighborhood: "Sholinganallur Tech Zone",
    category: "environment",
    campaign: "Afforestation & Wetland Cleanup",
    date: "05 June 2026",
    peopleHelped: 500,
    peopleHelpedLabel: "500 Shoreline Households",
    description: "Engaging residential youth teams in cleaning tidal plastics, clearing mangrove sediments, and planting active saplings to restore coastal barriers.",
    volunteers: 35,
    resourcesCount: 300,
    resourcesLabel: "Mangrove Saplings",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=720&auto=format&fit=crop",
    x: 51.5,
    y: 83.5,
    labelPosition: "left"
  },
  {
    id: "tambaram",
    name: "Tambaram",
    neighborhood: "Tambaram Station Area",
    category: "women",
    campaign: "Micro-Tailoring Enterprise",
    date: "11 June 2026",
    peopleHelped: 65,
    peopleHelpedLabel: "65 Entrepreneurs Seeded",
    description: "Empowered young local women through targeted pattern sewing bootcamps, financial budgeting courses, and donated mechanical sewing kits.",
    volunteers: 11,
    resourcesCount: 30,
    resourcesLabel: "Sewing Hub Kits",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e3a9?q=80&w=720&auto=format&fit=crop",
    x: 33.5,
    y: 71.0,
    labelPosition: "left"
  }
];

// Helper functions for custom absolute tooltip placement to avoid overlapping
const getLabelClass = (pos?: "top" | "bottom" | "left" | "right") => {
  switch (pos) {
    case "bottom":
      return "top-[115%] left-1/2";
    case "left":
      return "right-[115%] top-1/2";
    case "right":
      return "left-[115%] top-1/2";
    case "top":
    default:
      return "bottom-[115%] left-1/2";
  }
};

const getInitialLabelStyle = (pos?: "top" | "bottom" | "left" | "right") => {
  switch (pos) {
    case "bottom":
      return { x: "-50%", y: -10 };
    case "left":
      return { x: 10, y: "-50%" };
    case "right":
      return { x: -10, y: "-50%" };
    case "top":
    default:
      return { x: "-50%", y: 10 };
  }
};

const getLabelXOffset = (pos?: "top" | "bottom" | "left" | "right") => {
  return pos === "left" || pos === "right" ? 0 : "-50%";
};

const getLabelYOffset = (pos?: "top" | "bottom" | "left" | "right") => {
  return pos === "top" || pos === "bottom" ? 0 : "-50%";
};

export default function ImpactMap() {
  const [activeId, setActiveId] = useState<string>("guindy");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeInitiative = INITIATIVES.find((x) => x.id === activeId) || INITIATIVES[0];
  const activeCategory = CATEGORIES[activeInitiative.category];

  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] text-gray-800 font-sans p-3 md:p-6 lg:p-8 flex items-center justify-center selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Outer Layout Wrapper with delicate depth and soft shadows */}
      <div className="w-full max-w-[1720px] bg-white/45 backdrop-blur-md rounded-[32px] border border-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08),0_10px_30px_-5px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col transition-all duration-300">
        
        {/* Main Body Grid with exact proportional layout (Left: 68%, Divider, Right: dynamic remaining space) */}
        <div className="flex flex-col lg:flex-row w-full min-h-[750px] lg:h-[840px] relative p-5 lg:gap-11 xl:gap-14 gap-6">
          
          {/* LEFT CONTAINER: MAP SECTION */}
          <div className="w-full lg:w-[67%] xl:w-[68%] rounded-[24px] bg-[#F4F3EE] border border-gray-200/50 shadow-[inset_0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden relative flex flex-col justify-between p-6">
            
            {/* Ambient Base of Vector Map - Rendered via crisp high-performance SVGs */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg 
                viewBox="0 0 1000 750" 
                preserveAspectRatio="xMidYMid slice" 
                className="w-full h-full select-none"
              >
                <defs>
                  {/* Clean Mapbox-Light style soft ocean gradient */}
                  <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4EAF7" />
                    <stop offset="60%" stopColor="#C9E1F2" />
                    <stop offset="100%" stopColor="#BBD7EB" />
                  </linearGradient>

                  {/* Sand shore blending line */}
                  <linearGradient id="beachShore" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ECDFCC" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#DFD2BD" stopOpacity="0.2" />
                  </linearGradient>

                  {/* Ultra-subtle background design grid */}
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="50" y2="0" stroke="rgba(0,0,0,0.015)" strokeWidth="1" />
                    <line x1="0" y1="0" x2="0" y2="50" stroke="rgba(0,0,0,0.015)" strokeWidth="1" />
                  </pattern>
                </defs>

                {/* Landmass background (soft warm ivory-gray Mapbox Light aesthetic) */}
                <rect width="1000" height="750" fill="#F6F5F0" />

                {/* Subtle map reference grid */}
                <rect width="1000" height="750" fill="url(#grid)" />

                {/* ------------------------------------------------------------- */}
                {/* WATER BODIES & DRAINAGE GEOMETRY (Highly realistic Chennai)  */}
                {/* ------------------------------------------------------------- */}

                {/* 1. Cooum River (winding through central Chennai) */}
                <path 
                  d="M 0,310 
                     Q 120,330 220,315 
                     T 380,335 
                     T 480,355 
                     Q 540,375 580,365 
                     Q 605,355 640,380" 
                  fill="none" 
                  stroke="#BCD8EE" 
                  strokeWidth="5.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M 0,310 
                     Q 120,330 220,315 
                     T 380,335 
                     T 480,355 
                     Q 540,375 580,365 
                     Q 605,355 640,380" 
                  fill="none" 
                  stroke="#A8CEEB" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />

                {/* 2. Adyar River (with characteristic wide delta near Adyar) */}
                <path 
                  d="M 120,680 
                     Q 240,650 350,635 
                     T 480,610 
                     Q 530,600 598,620" 
                  fill="none" 
                  stroke="#BCD8EE" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M 120,680 
                     Q 240,650 350,635 
                     T 480,610 
                     Q 530,600 598,620" 
                  fill="none" 
                  stroke="#A8CEEB" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />

                {/* 3. Buckingham Canal (flowing N-S perpendicular to sea) */}
                <path 
                  d="M 648,0 H 645 Q 632,320 622,480 Q 605,600 564,750" 
                  fill="none" 
                  stroke="#B1D3EE" 
                  strokeWidth="2.5" 
                />

                {/* 4. Puzhal Lake (Red Hills Reservoir - North-west) */}
                <path 
                  d="M 280,105 
                     C 270,75 340,65 330,95 
                     C 340,115 320,135 300,125 
                     C 290,135 280,120 280,105 Z" 
                  fill="#C6E1F4" 
                  stroke="#9AC7E7" 
                  strokeWidth="1.2" 
                />
                <text x="310" y="145" fill="#427FA8" fontSize="10" fontWeight="600" fontStyle="italic" opacity="0.7">
                  Puzhal Lake
                </text>
                
                {/* 5. Chembarambakkam Lake (South-west source) */}
                <path 
                  d="M 100,490 
                     C 80,460 145,450 155,475 
                     C 165,495 170,510 185,520 
                     C 195,540 160,565 135,560 
                     C 115,555 125,535 115,525 
                     C 105,515 90,505 100,490 Z" 
                  fill="#C6E1F4" 
                  stroke="#9AC7E7" 
                  strokeWidth="1.2" 
                />
                <text x="135" y="580" fill="#427FA8" fontSize="10" fontWeight="600" fontStyle="italic" textAnchor="middle" opacity="0.7">
                  Chembarambakkam Reservoir
                </text>

                {/* 6. Pallikaranai Marshlands / Retteri Wetlands (South Chennai Marsh) */}
                <path 
                  d="M 480,670 
                     C 470,680 490,705 485,720 
                     C 490,730 515,725 520,710 
                     C 525,695 500,665 480,670 Z" 
                  fill="#DCF2E4" 
                  stroke="#C1E5CC" 
                  strokeWidth="1.2" 
                />
                <text x="500" y="740" fill="#3D824E" fillOpacity="0.55" fontSize="9" fontWeight="600" letterSpacing="0.5">
                  Pallikaranai Wetland
                </text>


                {/* ------------------------------------------------------------- */}
                {/* ESTABLISHED CORRIDORS & PRIMARY HIGHWAYS (Apple/Mapbox style) */}
                {/* ------------------------------------------------------------- */}

                {/* 1. Chennai Outer Ring Road (ORR - Far West) */}
                <path d="M 80,750 Q 180,450 250,250 T 400,20" fill="none" stroke="#D7D4C8" strokeWidth="5.5" strokeLinecap="round"/>
                <path d="M 80,750 Q 180,450 250,250 T 400,20" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="5,4" />

                {/* 2. Poonamallee High Road (West NH-4 to Downtown) */}
                <path d="M 0,270 Q 200,270 415,273 T 515,290" fill="none" stroke="#D7D4C8" strokeWidth="5" strokeLinecap="round"/>
                <path d="M 0,270 Q 200,270 415,273 T 515,290" fill="none" stroke="#FFFFFF" strokeWidth="2" />

                {/* 3. Chennai Bypass Road */}
                <path d="M 240,750 Q 280,500 315,191 T 480,50" fill="none" stroke="#D7D4C8" strokeWidth="4.5" strokeLinecap="round"/>
                <path d="M 240,750 Q 280,500 315,191 T 480,50" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* 4. GST Road (Grand Southern Trunk Road / NH-45 - Southwest to Tambaram/Airport) */}
                <path d="M 335,750 L 335,532 L 410,500 L 445,476" fill="none" stroke="#CECBC0" strokeWidth="6.5" strokeLinecap="round"/>
                <path d="M 335,750 L 335,532 L 410,500 L 445,476" fill="none" stroke="#FFFFFF" strokeWidth="3" />

                {/* 5. Mount Road (Anna Salai - Guindy to Central Marina) */}
                <path d="M 445,476 Q 480,400 515,290 T 630,240" fill="none" stroke="#CECBC0" strokeWidth="6.5" strokeLinecap="round"/>
                <path d="M 445,476 Q 480,400 515,290 T 630,240" fill="none" stroke="#FFFFFF" strokeWidth="3" />

                {/* 6. Sardar Patel Road (Guindy connecting to Adyar) */}
                <path d="M 445,476 Q 515,465 585,446" fill="none" stroke="#D7D4C8" strokeWidth="5.5" strokeLinecap="round"/>
                <path d="M 445,476 Q 515,465 585,446" fill="none" stroke="#FFFFFF" strokeWidth="2" />

                {/* 7. Inner Ring Road (100 Feet Road Grid) */}
                <path d="M 230,220 Q 282,320 330,420 T 445,476 T 500,517" fill="none" stroke="#D7D4C8" strokeWidth="5" strokeLinecap="round"/>
                <path d="M 230,220 Q 282,320 330,420 T 445,476 T 500,517" fill="none" stroke="#FFFFFF" strokeWidth="1.75"/>

                {/* 8. OMR (Rajiv Gandhi Salai / IT Expressway - Adyar to Sholinganallur Corridor) */}
                <path d="M 585,446 L 515,626 L 490,750" fill="none" stroke="#CECBC0" strokeWidth="6" strokeLinecap="round" />
                <path d="M 585,446 L 515,626 L 490,750" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />

                {/* 9. ECR (East Coast Road - Coastal Loop to South) */}
                <path d="M 600,470 Q 590,600 575,700 T 560,750" fill="none" stroke="#D7D4C8" strokeWidth="5" strokeLinecap="round" />
                <path d="M 600,470 Q 590,600 575,700 T 560,750" fill="none" stroke="#FFFFFF" strokeWidth="1.75" />

                {/* 10. Secondary connector roads */}
                <path d="M 315,191 L 415,273" fill="none" stroke="#DFDCD2" strokeWidth="1.5" strokeDasharray="3,3" />
                <path d="M 415,273 L 445,476" fill="none" stroke="#DFDCD2" strokeWidth="1.5" strokeDasharray="3,3" />
                <path d="M 515,290 L 610,382" fill="none" stroke="#DFDCD2" strokeWidth="1.5" />
                <path d="M 610,382 L 585,446" fill="none" stroke="#DFDCD2" strokeWidth="1.5" />


                {/* ------------------------------------------------------------- */}
                {/* REPRESENTATIVE COAST & WATER BODY OCCURRENCE (Bay Of Bengal)  */}
                {/* ------------------------------------------------------------- */}

                {/* Bay of Bengal Oceanmass */}
                <path 
                  d="M 640 0 
                     C 635 80, 630 140, 632 180
                     C 635 240, 638 290, 626 335 
                     C 615 380, 608 440, 602 490
                     C 595 540, 588 590, 572 638 
                     C 558 680, 545 720, 532 750
                     L 1000 750 L 1000 0 Z" 
                  fill="url(#oceanGradient)"
                />

                {/* Aesthetic beach blending shore line */}
                <path 
                  d="M 640 0 
                     C 635 80, 630 140, 632 180
                     C 635 240, 638 290, 626 335 
                     C 615 380, 608 440, 602 490
                     C 595 540, 588 590, 572 638 
                     C 558 680, 545 720, 532 750"
                  fill="none" 
                  stroke="url(#beachShore)" 
                  strokeWidth="5" 
                  strokeOpacity="0.8"
                />


                {/* ------------------------------------------------------------- */}
                {/* CHENNAI RECOGNIZABLE DISTRICT DETAILS & LABELS (Muted Slate)  */}
                {/* ------------------------------------------------------------- */}

                {/* Bay of Bengal label */}
                <text 
                  x="820" 
                  y="530" 
                  fill="#4D708E" 
                  fillOpacity="0.55" 
                  fontSize="22" 
                  fontWeight="700" 
                  fontFamily="sans-serif" 
                  letterSpacing="4" 
                  transform="rotate(-90 820 530)"
                >
                  BAY OF BENGAL
                </text>

                {/* Marina Beach Placement */}
                <text 
                  x="648" 
                  y="230" 
                  fill="#FFF" 
                  fillOpacity="0.9" 
                  fontSize="10" 
                  fontWeight="600" 
                  letterSpacing="1" 
                  transform="rotate(84 648 230)"
                >
                  MARINA BEACH
                </text>

                {/* Elliot's Beach Placement */}
                <text 
                  x="600" 
                  y="580" 
                  fill="#FFF" 
                  fillOpacity="0.9" 
                  fontSize="10" 
                  fontWeight="600" 
                  letterSpacing="1" 
                  transform="rotate(82 600 580)"
                >
                  ELLIOT'S BEACH
                </text>

                {/* Airport Anchor */}
                <g transform="translate(370, 500)" opacity="0.6">
                  <path d="M2,2 L10,2 L12,0 L14,0 L13,5 L16,5 L17,4 L18,4 L17.5,6 L18,8 L17,8 L16,7 L13,7 L14,12 L12,12 L10,10 L2,10 Z" fill="#585248" transform="scale(0.8) rotate(-45)" />
                  <text x="18" y="6" fill="#4E4940" fontSize="9" fontWeight="700" letterSpacing="0.5">MAA AIRPORT</text>
                </g>

                {/* Chennai Main Station Anchor */}
                <g transform="translate(545, 275)" opacity="0.55">
                  <rect x="0" y="0" width="8" height="8" fill="#585248" rx="1" />
                  <text x="12" y="7" fill="#4E4940" fontSize="9" fontWeight="700" letterSpacing="0.5">CENTRAL TRN</text>
                </g>

                {/* Neighborhood & District Label Layers (Muted, Slate grey, Tracking wide) */}
                <text x="315" y="165" fill="#5C5750" fillOpacity="0.82" fontSize="10" fontWeight="750" letterSpacing="1" className="font-sans tracking-wider" textAnchor="middle">
                  AMBATTUR INDUSTRIAL
                </text>
                
                <text x="415" y="245" fill="#5C5750" fillOpacity="0.82" fontSize="10" fontWeight="750" letterSpacing="1" className="font-sans tracking-wider" textAnchor="middle">
                  ANNA NAGAR CORRIDOR
                </text>

                <text x="445" y="445" fill="#5C5750" fillOpacity="0.82" fontSize="10" fontWeight="750" letterSpacing="1" className="font-sans tracking-wider" textAnchor="middle">
                  GUINDY ESTATE
                </text>

                <text x="610" y="355" fill="#5C5750" fillOpacity="0.82" fontSize="10" fontWeight="750" letterSpacing="1" className="font-sans tracking-wider" textAnchor="middle">
                  MYLAPORE HERITAGE
                </text>

                <text x="595" y="418" fill="#5C5750" fillOpacity="0.82" fontSize="10" fontWeight="750" letterSpacing="1" className="font-sans tracking-wider" textAnchor="middle">
                  ADYAR COMPLEX
                </text>

                <text x="515" y="600" fill="#5C5750" fillOpacity="0.82" fontSize="10" fontWeight="750" letterSpacing="1" className="font-sans tracking-wider" textAnchor="middle">
                  SHOLINGANALLUR IT
                </text>

                <text x="335" y="505" fill="#5C5750" fillOpacity="0.82" fontSize="10" fontWeight="750" letterSpacing="1" className="font-sans tracking-wider" textAnchor="middle">
                  TAMBARAM JN
                </text>

                <text x="500" y="495" fill="#5C5750" fillOpacity="0.75" fontSize="9.5" fontWeight="700" letterSpacing="1" className="font-sans tracking-wide" textAnchor="middle">
                  VELACHERY TOWN
                </text>

                {/* Outer supporting suburbs for authentic depth */}
                <text x="200" y="295" fill="#757169" fillOpacity="0.7" fontSize="9" fontWeight="600" letterSpacing="0.5">AVADI</text>
                <text x="210" y="380" fill="#757169" fillOpacity="0.7" fontSize="9" fontWeight="600" letterSpacing="0.5">POONAMALLEE</text>
                <text x="480" y="150" fill="#757169" fillOpacity="0.7" fontSize="9" fontWeight="600" letterSpacing="0.5">MADHAVARAM</text>
                <text x="320" y="595" fill="#757169" fillOpacity="0.7" fontSize="9" fontWeight="600" letterSpacing="0.5">PORUR RESIDENCY</text>
                <text x="480" y="420" fill="#757169" fillOpacity="0.7" fontSize="9" fontWeight="600" letterSpacing="0.5">T. NAGAR</text>
                <text x="320" y="410" fill="#757169" fillOpacity="0.7" fontSize="9" fontWeight="600" letterSpacing="0.5">VADAPALANI</text>
              </svg>
            </div>

            {/* UPWARD-FLOATING CONTENT / MAP TEXT INFORMATION */}
            <div className="z-10 relative pointer-events-none select-none max-w-md">
              <span className="text-emerald-700 font-black text-xs tracking-widest uppercase block mb-1">
                OUR IMPACT
              </span>
              <h1 className="text-3xl md:text-4.5xl font-serif font-black text-[#1E1C1B] tracking-tight leading-tight mb-2">
                Impact Across Chennai
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm hidden sm:block">
                Hover or click on interactive initiatives to explore full details and media stories.
              </p>
            </div>

            {/* CATEGORIES CARD - Left Aligned floating element */}
            <div className="z-10 absolute left-4 md:left-6 top-[150px] md:top-[160px] bg-white/90 backdrop-blur-md rounded-2xl border border-white/60 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.05)] max-w-[210px] hidden sm:block">
              <ul className="space-y-3">
                {Object.entries(CATEGORIES).map(([key, cat]) => (
                  <li key={key} className="flex items-center gap-3">
                    <span 
                      className={`w-3 h-3 rounded-full ${cat.bg} opacity-90 ring-4 ring-white shadow-sm flex-shrink-0`}
                      style={{ boxShadow: `0 0 5px ${cat.color}` }}
                    />
                    <span className="text-xs font-bold text-gray-700 tracking-wide">
                      {cat.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MAIN CLUSTER OF INTERACTIVE MARKERS (Only single unique markers render, no duplicate clovers) */}
            <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
              <div className="w-full h-full relative pointer-events-auto">
                {INITIATIVES.map((item, idx) => {
                  const isActive = item.id === activeId;
                  const isHovered = hoveredId === item.id;
                  const catTheme = CATEGORIES[item.category];
                  const Icon = catTheme.icon;

                  return (
                    <div
                      key={item.id}
                      style={{ left: `${item.x}%`, top: `${item.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group transition-all duration-300 ${
                        isActive ? "z-50" : "z-30 hover:z-40"
                      }`}
                      onMouseEnter={() => {
                        setHoveredId(item.id);
                        setActiveId(item.id); // Instantly update right card on hover
                      }}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setActiveId(item.id)}
                    >
                      {/* Subtle layered shadow beneath the active/hovered marker for real floating depth */}
                      <div 
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-1.5 bg-black/25 rounded-full blur-[1.5px] pointer-events-none transition-all duration-300" 
                        style={{ 
                          transform: isActive 
                            ? "scale(1.3) translateY(3px)" 
                            : isHovered 
                              ? "scale(1.15) translateY(2px)" 
                              : "scale(1)" 
                        }} 
                      />

                      {/* Main Center Floating Marker Element */}
                      <motion.div
                        animate={{
                          // Size markers perfectly: 60px active / 48px inactive
                          width: isActive ? 60 : 48,
                          height: isActive ? 60 : 48,
                          scale: isActive ? 1.25 : isHovered ? 1.15 : 1,
                          y: isActive ? [0, -5, 0] : [0, -2.5, 0], // Smooth, gentle float animation
                        }}
                        transition={{
                          width: { type: "spring", stiffness: 350, damping: 25 },
                          height: { type: "spring", stiffness: 350, damping: 25 },
                          scale: { type: "spring", stiffness: 350, damping: 25 },
                          y: {
                            repeat: Infinity,
                            duration: isActive ? 2.0 : 3.0 + (idx % 3) * 0.4,
                            ease: "easeInOut"
                          }
                        }}
                        className="relative flex items-center justify-center select-none shadow-[0_4px_12px_rgba(0,0,0,0.12)] rounded-full"
                      >
                        {/* 1. Precise, High-End Category Glow Ring (Floats together with marker) */}
                        <motion.div 
                          className="absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                          animate={{
                            scale: isActive ? [1, 1.25, 1] : [1, 1.18, 1],
                            opacity: isActive ? [0.65, 0.85, 0.65] : [0.45, 0.65, 0.45],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.2,
                            ease: "easeInOut",
                          }}
                          style={{
                            width: isActive ? "74px" : "58px",
                            height: isActive ? "74px" : "58px",
                            border: `1.2px solid ${catTheme.color}35`,
                            backgroundColor: isActive ? `${catTheme.color}15` : `${catTheme.color}08`,
                            boxShadow: isActive 
                              ? `0 0 16px ${catTheme.color}c0, inset 0 0 5px ${catTheme.color}30` 
                              : `0 0 10px ${catTheme.color}90`,
                          }}
                        />

                        {/* 2. Delicate Outer Dashes Ripple (Floats together with marker) */}
                        <motion.div 
                          className="absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                          animate={{
                            scale: isActive ? [1, 1.3, 1] : [1, 1.2, 1],
                            opacity: isActive ? [0.26, 0, 0.26] : [0.15, 0, 0.15],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.8,
                            ease: "easeOut",
                          }}
                          style={{
                            width: isActive ? "66px" : "52px",
                            height: isActive ? "66px" : "52px",
                            border: `1px dashed ${catTheme.color}60`,
                          }}
                        />

                        {/* Rounded Inside Thumbnail Mask */}
                        <div className="w-full h-full rounded-full overflow-hidden border-[2.5px] border-white bg-white relative z-10 flex items-center justify-center">
                          <img 
                             src={item.image} 
                             alt={item.name} 
                             className="w-full h-full object-cover rounded-full"
                             referrerPolicy="no-referrer"
                             onError={(e) => {
                               e.currentTarget.onerror = null;
                               e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=720&auto=format&fit=crop";
                             }}
                          />
                          <div className="absolute inset-0 opacity-10 bg-gradient-to-t from-black to-transparent" />
                          
                          {/* Floating Category Tiny Badge */}
                          <div 
                            className={`absolute bottom-0 right-0 rounded-full ${catTheme.bg} text-white flex items-center justify-center p-[2.5px] transition-all duration-300 shadow-md`}
                            style={{
                              width: isActive ? "18px" : "15px",
                              height: isActive ? "18px" : "15px",
                            }}
                          >
                            <Icon className="w-full h-full" strokeWidth={3} />
                          </div>
                        </div>

                        {/* Active vertical glow bumper indicator */}
                        {isActive && (
                          <div className="absolute -bottom-5 flex flex-col items-center z-40">
                            <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce shadow-md shadow-emerald-500/50" />
                          </div>
                        )}
                      </motion.div>

                      {/* Tooltip visible ONLY for active or hovered location, customized per location offsets to prevent overlap */}
                      <AnimatePresence>
                        {(isActive || isHovered) && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.85, ...getInitialLabelStyle(item.labelPosition) }}
                            animate={{ opacity: 1, scale: 1, x: getLabelXOffset(item.labelPosition), y: getLabelYOffset(item.labelPosition) }}
                            exit={{ opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute ${getLabelClass(item.labelPosition)} bg-white/95 backdrop-blur-md text-gray-900 border border-gray-100/80 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 z-50 pointer-events-none whitespace-nowrap`}
                          >
                            <span 
                              className={`w-2 h-2 rounded-full ${catTheme.bg}`} 
                              style={{ boxShadow: `0 0 4px ${catTheme.color}` }}
                            />
                            <span className="text-[12px] md:text-[13px] font-serif font-bold tracking-wide text-gray-950 whitespace-nowrap leading-none">
                              {item.name}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LEFT FLOATING STATS CARD - Bottom Left corner */}
            <div className="z-10 absolute left-4 md:left-6 bottom-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/60 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-[210px] select-none flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 animate-bounce">
                <Users className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-2xl font-black text-emerald-800 tracking-tight block leading-none">
                  96+
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mt-0.5 leading-tight">
                  Initiatives Across Chennai
                </span>
              </div>
            </div>

          </div>

          {/* Elegant vertical separation zone with premium micro-indicator */}
          <div className="hidden lg:flex items-center justify-center w-6 relative self-stretch my-8 pointer-events-none">
            <div className="w-[1px] h-[95%] bg-gradient-to-b from-transparent via-gray-300/30 to-transparent" />
            <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-16 rounded-full bg-gradient-to-b from-emerald-500/20 via-teal-500/25 to-emerald-500/20 backdrop-blur-[1px]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FAF9F5] border border-gray-200/55 flex items-center justify-center shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.03)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600/70" />
            </div>
          </div>

          {/* RIGHT CONTAINER: DETAIL GLASSMORPHISM CARD (Occupies remaining space dynamically with distinct layered panel effects) */}
          <div className="w-full lg:flex-1 flex flex-col justify-start z-10 relative group/card">
            
            {/* Ambient stacked layered panel backdrop element for 3D elevation */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[24px] translate-x-1.5 translate-y-1.5 shadow-[-16px_20px_40px_-5px_rgba(0,0,0,0.035),-4px_10px_16px_rgba(0,0,0,0.015)] pointer-events-none -z-10 border border-white/50" />
            <div className="absolute inset-0 bg-[#FAF9F5]/85 rounded-[24px] pointer-events-none -z-20 shadow-[-22px_35px_60px_-10px_rgba(0,0,0,0.055)]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeInitiative.id}
                initial={{ opacity: 0, x: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full bg-white/95 backdrop-blur-xl border border-white/90 rounded-[24px] shadow-[-32px_35px_60px_-12px_rgba(0,0,0,0.095),12px_15px_30px_-5px_rgba(0,0,0,0.025),0_0_1px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,1)] flex flex-col p-6 gap-5 overflow-hidden"
              >
                
                {/* Top Photo Frame */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md bg-gray-100">
                  <img 
                    src={activeInitiative.image} 
                    alt={activeInitiative.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=720&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Dark gradient shadow inside photo footer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Category Overlay Icon Floating Badge - Bottom Left */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                    <div className={`w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center ${activeCategory.text}`}>
                      <activeCategory.icon className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Text Details Area flowing naturally without forced spacing splits */}
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-[25px] xl:text-[28px] font-serif font-bold text-gray-950 tracking-wide leading-snug truncate">
                      {activeInitiative.neighborhood}
                    </h2>
                    <span className={`text-xs font-bold tracking-wider uppercase block mt-1.5 ${activeCategory.text}`}>
                      {activeInitiative.campaign}
                    </span>
                  </div>

                  <div className="h-[1px] bg-gray-200/50 w-full" />

                  {/* Metadata indicators: Date and People Helped */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{activeInitiative.date}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-end text-right">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{activeInitiative.peopleHelpedLabel}</span>
                    </div>
                  </div>

                  <div className="h-[1px] bg-gray-200/50 w-full" />

                  {/* Campaign description paragraph */}
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {activeInitiative.description}
                  </p>

                  {/* Active Stat Sub-Bubbles Section */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Sub-Bubble 1: Volunteers */}
                    <div className="bg-[#FAF9F5] border border-gray-100 rounded-xl p-3 flex flex-col justify-between shadow-sm">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                        Volunteers
                      </span>
                      <div className="flex items-baseline gap-1 mt-1.5">
                        <span className="text-lg font-black text-gray-800 leading-none">
                          {activeInitiative.volunteers}
                        </span>
                        <span className="text-xs text-gray-400">Team</span>
                      </div>
                    </div>

                    {/* Sub-Bubble 2: Resources count */}
                    <div className="bg-[#FAF9F5] border border-gray-100 rounded-xl p-3 flex flex-col justify-between shadow-sm">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none truncate">
                        Resources
                      </span>
                      <div className="flex flex-col mt-0.5">
                        <span className="text-lg font-black text-gray-800 leading-none">
                          {activeInitiative.resourcesCount}
                        </span>
                        <span className="text-[9px] font-bold text-gray-400 truncate mt-1 leading-none">
                          {activeInitiative.resourcesLabel}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Massive Premium NGO Action Button positioned naturally directly below the statistics section */}
                <div className="mt-auto">
                  <button 
                    onClick={() => {
                      alert(`Directing to live impact portfolios, video narratives, and volunteer registry for ${activeInitiative.name}.`);
                    }}
                    className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all shadow-[0_4px_14px_rgba(45,122,63,0.3)] active:scale-[0.98] focus:outline-none flex items-center justify-between bg-[#2d7a3f] hover:bg-[#235e30] hover:shadow-[0_6px_20px_rgba(45,122,63,0.4)] group overflow-hidden"
                  >
                    <span className="pl-1 uppercase tracking-widest text-[11px] font-black">View Full Story</span>
                    <div className="w-8 h-8 rounded-full bg-white text-[#2d7a3f] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-50 shadow-sm flex-shrink-0">
                      <ChevronRight className="w-4.5 h-4.5 text-[#2d7a3f] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={3} />
                    </div>
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* BOTTOM BRAND FOOTER (Click-safe social links) */}
        <div className="w-full bg-[#FAF9F5]/70 border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span className="tracking-wide">
              Chennai Social Welfare Coalition &copy; 2026. All initiatives verified.
            </span>
          </div>

          {/* Social media connections */}
          <div className="flex items-center gap-3 select-none pointer-events-auto">
            <a href="#facebook" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#instagram" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-pink-600 hover:border-pink-600 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#twitter" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#linkedin" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-sky-700 hover:border-sky-700 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#youtube" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
