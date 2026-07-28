import { Star } from 'lucide-react';

export function StarRating({ rating = 5, size = 16 }: { rating?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-orange-500 text-orange-500' : 'fill-navy-100 text-navy-200'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
