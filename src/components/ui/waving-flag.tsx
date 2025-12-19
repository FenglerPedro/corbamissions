import { cn } from "@/lib/utils";

interface WavingFlagProps {
    src: string;
    alt: string;
    className?: string;
}

const WavingFlag = ({ src, alt, className }: WavingFlagProps) => {
    return (
        <div className={cn("relative overflow-hidden rounded-2xl shadow-xl", className)}>
            {/* Wave container */}
            <div className="w-full h-full relative perspective-1000">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover animate-flag-wave origin-left"
                    style={{
                        filter: "brightness(1.1) contrast(1.1)",
                        transformStyle: "preserve-3d",
                    }}
                />

                {/* Light sheen overlay for wave effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] h-full animate-flag-shine pointer-events-none mix-blend-overlay" />

                {/* Shadow overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 animate-flag-shadow pointer-events-none" />
            </div>
        </div>
    );
};

export default WavingFlag;
