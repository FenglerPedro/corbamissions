import Image from "next/image";
import { cn } from "@/lib/utils";

const WavingFlag = ({ src, alt, className }) => {
    return (
        <div className={cn("relative overflow-hidden rounded-2xl shadow-xl", className)}>
            {/* Wave container */}
            <div className="w-full h-full relative" style={{ perspective: '1000px' }}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover animate-flag-wave origin-left"
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
