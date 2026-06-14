import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-6 shadow-xl border border-gray-100",
        hover && "hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
