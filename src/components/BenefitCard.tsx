import { LucideIcon, ArrowRight } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function BenefitCard({ icon: Icon, title, description, onClick }: BenefitCardProps) {
  return (
    <button
      onClick={onClick}
      className="group rounded-lg bg-[#F5F1E8] p-6 shadow-md transition-all hover:shadow-xl hover:scale-105 text-left w-full border border-[#E8DCC8] hover:border-[#8B7355]"
    >
      <div className="mb-4 inline-flex rounded-full bg-[#E8DCC8] p-3 group-hover:bg-[#8B7355] transition-colors">
        <Icon className="h-6 w-6 text-[#6B5D3F] group-hover:text-white transition-colors" />
      </div>
      <h3 className="mb-2 text-[#6B5D3F]">{title}</h3>
      <p className="text-[#8B7355] mb-3">{description}</p>
      <div className="flex items-center gap-2 text-[#6B5D3F] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Learn more</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}
