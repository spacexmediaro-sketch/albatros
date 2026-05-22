"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function GoldButton({ children, className, size, ...props }: GoldButtonProps) {
  return (
    <Button
      size={size}
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-[#111111] font-semibold",
        "shadow-[0_0_20px_rgba(201,168,76,0.3)]",
        "hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]",
        "transition-all duration-300",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent",
        "before:-translate-x-full before:animate-shimmer",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
