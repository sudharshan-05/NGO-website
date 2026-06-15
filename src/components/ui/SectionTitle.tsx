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
        align === "center"
          ? "mb-16 flex flex-col items-center text-center mx-auto max-w-5xl"
          : "mb-16 text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-[11px] font-inter font-bold tracking-[0.3em] uppercase text-[#2E7D32] bg-[#C8E6C9]/60 border border-[#C8E6C9] px-5 py-2 rounded-full mb-3 shadow-[0_2px_8px_rgba(46,125,50,0.12)]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse"
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      )}

 <h2
  className={cn(
    "font-gondens text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-center",
    dark ? "text-white" : "text-[#1F2937]"
  )}
>

        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "font-inter text-lg md:text-xl leading-relaxed max-w-3xl",
            dark ? "text-white/75" : "text-[#1F2937]/65"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}