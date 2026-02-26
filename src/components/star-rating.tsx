import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  showText?: boolean;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  className,
  showText = false,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            size={size}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star size={size} className="text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={size} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(Math.max(0, emptyStars))].map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-gray-300" />
        ))}
      </div>
      {showText && (
        <span className="text-sm font-medium text-navy-dark">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
