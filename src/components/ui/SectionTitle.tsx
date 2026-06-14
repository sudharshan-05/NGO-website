import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-[10px] font-inter font-bold tracking-[0.28em] uppercase text-[#2E7D32] bg-[#C8E6C9]/60 border border-[#C8E6C9] px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_8px_rgba(46,125,50,0.12)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-gondens text-4xl md:text-5xl leading-[1.05] mb-4",
          dark ? "text-white" : "text-[#1F2937]",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-inter text-base leading-relaxed",
            dark ? "text-white/60" : "text-[#1F2937]/55",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
