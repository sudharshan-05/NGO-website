import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "green" | "gold" | "blue" | "neutral";
}

const variants = {
  green: "text-[#2E7D32] bg-[#2E7D32]/10 border-[#2E7D32]/25",
  gold: "text-[#1F2937] bg-[#F4B400]/20 border-[#F4B400]/40",
  blue: "text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/25",
  neutral: "text-[#1F2937]/70 bg-white/80 border-gray-200",
};

export function Badge({ children, className, variant = "green" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[10px] font-inter font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
