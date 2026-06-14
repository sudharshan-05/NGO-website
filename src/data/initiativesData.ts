import {
  Heart,
  BookOpen,
  Leaf,
  Sparkles,
  Utensils,
  type LucideIcon,
} from "lucide-react";

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
  x: number;
  y: number;
  labelPosition?: "top" | "bottom" | "left" | "right";
}

export interface Category {
  name: string;
  color: string;
  icon: LucideIcon;
}

export const CATEGORIES: Record<string, Category> = {
  food: {
    name: "Food & Nutrition",
    color: "#2E7D32",
    icon: Utensils,
  },
  education: {
    name: "Education",
    color: "#4285F4",
    icon: BookOpen,
  },
  healthcare: {
    name: "Healthcare",
    color: "#F4B400",
    icon: Heart,
  },
  environment: {
    name: "Environment",
    color: "#2E7D32",
    icon: Leaf,
  },
  women: {
    name: "Women Empowerment",
    color: "#4285F4",
    icon: Sparkles,
  },
};

export const initiatives: Initiative[] = [
  {
    id: "tharamani-stationery",
    name: "Stationery Distribution Drive",
    neighborhood: "Tharamani",
    category: "education",
    campaign: "Academic Aid 2026",
    date: "Mar 18, 2026",
    peopleHelped: 350,
    peopleHelpedLabel: "Students Supported",
    description:
      "Distributed comprehensive learning kits including notebooks, pens, geometry boxes and art supplies to government school children across Tharamani.",
    volunteers: 45,
    resourcesCount: 1200,
    resourcesLabel: "Kits Distributed",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
    x: 62,
    y: 52,
    labelPosition: "right",
  },
  {
    id: "guindy-food",
    name: "Community Kitchen Program",
    neighborhood: "Guindy",
    category: "food",
    campaign: "Feed Chennai 2026",
    date: "Feb 05, 2026",
    peopleHelped: 800,
    peopleHelpedLabel: "Meals Served",
    description:
      "Weekly community kitchen providing nutritious meals to daily wage workers and families near Guindy industrial estates.",
    volunteers: 60,
    resourcesCount: 3200,
    resourcesLabel: "Meals Monthly",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400",
    x: 38,
    y: 42,
    labelPosition: "left",
  },
  {
    id: "besant-nagar-beach",
    name: "Beach Cleaning Campaign",
    neighborhood: "Besant Nagar",
    category: "environment",
    campaign: "Clean Coast 2026",
    date: "Jan 12, 2026",
    peopleHelped: 500,
    peopleHelpedLabel: "Volunteers Mobilised",
    description:
      "Monthly beach cleanup at Elliot's Beach removing plastic waste and conducting awareness sessions on marine conservation.",
    volunteers: 120,
    resourcesCount: 2,
    resourcesLabel: "Tonnes Collected",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400",
    x: 72,
    y: 68,
    labelPosition: "top",
  },
  {
    id: "adyar-digital",
    name: "Digital Literacy Initiative",
    neighborhood: "Adyar",
    category: "education",
    campaign: "Code For Change",
    date: "May 10, 2026",
    peopleHelped: 200,
    peopleHelpedLabel: "Students Trained",
    description:
      "Set up computer labs in municipal schools and mentored students in basic programming, internet literacy and digital safety.",
    volunteers: 30,
    resourcesCount: 5,
    resourcesLabel: "Labs Established",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400",
    x: 55,
    y: 62,
    labelPosition: "right",
  },
  {
    id: "velachery-health",
    name: "Community Health Camp",
    neighborhood: "Velachery",
    category: "healthcare",
    campaign: "Healthy Chennai",
    date: "Apr 22, 2026",
    peopleHelped: 600,
    peopleHelpedLabel: "Check-ups Done",
    description:
      "Free health screening camp offering eye tests, dental checkups, blood pressure monitoring and basic health awareness sessions.",
    volunteers: 40,
    resourcesCount: 15,
    resourcesLabel: "Doctors Volunteered",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
    x: 45,
    y: 75,
    labelPosition: "top",
  },
  {
    id: "tambaram-women",
    name: "Women Skill Development",
    neighborhood: "Tambaram",
    category: "women",
    campaign: "Empower Her",
    date: "Jun 02, 2026",
    peopleHelped: 150,
    peopleHelpedLabel: "Women Trained",
    description:
      "Vocational training workshops in tailoring, handicrafts and micro-enterprise management for women from economically weaker sections.",
    volunteers: 25,
    resourcesCount: 8,
    resourcesLabel: "Workshops Held",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=400",
    x: 30,
    y: 85,
    labelPosition: "top",
  },
];
