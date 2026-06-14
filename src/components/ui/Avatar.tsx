import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  priority?: boolean;
}

export function Avatar({ src, alt, size = 48, className, priority = false }: AvatarProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-full border-2 border-white shadow-lg", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
