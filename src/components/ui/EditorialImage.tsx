import Image from "next/image";
import { cn } from "@/lib/utils";

const EDITORIAL_IMAGE_CLASS =
  "object-cover transition-[transform,filter] duration-[400ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:[filter:brightness(0.9)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:[filter:brightness(1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.02]";

interface EditorialImageProps {
  src: string;
  alt: string;
  sizes: string;
  wrapperClassName?: string;
  aspectClassName?: string;
  className?: string;
}

export function EditorialImage({
  src,
  alt,
  sizes,
  wrapperClassName,
  aspectClassName = "aspect-[4/5]",
  className,
}: EditorialImageProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-sm border border-border",
        wrapperClassName,
      )}
    >
      <div className={cn("relative", aspectClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={cn(EDITORIAL_IMAGE_CLASS, className)}
        />
      </div>
    </div>
  );
}
