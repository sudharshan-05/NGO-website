import { cn } from "@/lib/utils";
import { layout } from "@/lib/tokens";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full", layout.maxWidth, layout.containerPadding, className)}>
      {children}
    </Tag>
  );
}
