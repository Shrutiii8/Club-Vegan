import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

interface RecipeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  recipeUrl: string;
}

export function RecipeCard({ title, description, imageUrl, recipeUrl }: RecipeCardProps) {
  return (
    <a 
      href={recipeUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:scale-105 hover:shadow-xl block border border-[#E8DCC8] hover:border-[#8B7355]"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-[#6B5D3F]">{title}</h3>
          <ExternalLink className="h-4 w-4 text-[#8B7355] flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-[#8B7355]">{description}</p>
        <p className="text-[#6B5D3F] text-sm mt-3 flex items-center gap-1">
          View Recipe <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </p>
      </div>
    </a>
  );
}
