import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  glowSize?: number;
  proximityDistance?: number;
}

const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, children, glowColor = "rgba(239, 68, 68, 0.8)", glowSize = 200, proximityDistance = 60, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [isNear, setIsNear] = React.useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if mouse is within proximity distance of the card
        const isWithinProximity = 
          e.clientX >= rect.left - proximityDistance &&
          e.clientX <= rect.right + proximityDistance &&
          e.clientY >= rect.top - proximityDistance &&
          e.clientY <= rect.bottom + proximityDistance;
        
        if (isWithinProximity) {
          setMousePosition({ x, y });
          setIsNear(true);
        } else {
          setIsNear(false);
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [proximityDistance]);

    return (
      <div
        ref={(node) => {
          (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn("relative", className)}
        {...props}
      >
        {/* Border glow container */}
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-[inherit]"
          style={{
            opacity: isNear ? 1 : 0,
            background: `radial-gradient(${glowSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
            transition: "opacity 0.2s ease-out",
          }}
        />
        {/* Inner card background to mask the glow and show only border */}
        <div
          className="absolute inset-[1px] rounded-[inherit] bg-card pointer-events-none"
          style={{
            opacity: isNear ? 1 : 0,
            transition: "opacity 0.2s ease-out",
          }}
        />
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";

export { GlowCard };
