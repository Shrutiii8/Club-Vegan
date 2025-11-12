import { X, LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface BenefitDetailProps {
  open: boolean;
  onClose: () => void;
  icon: LucideIcon;
  title: string;
  fullDescription: string;
  details: string[];
}

export function BenefitDetail({ 
  open, 
  onClose, 
  icon: Icon, 
  title, 
  fullDescription,
  details 
}: BenefitDetailProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 bg-[#F5F1E8]">
        <DialogHeader className="p-6 pb-4 border-b border-[#E8DCC8]">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#6B5D3F] shadow-lg">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-[#6B5D3F] mb-1">{title}</DialogTitle>
              <p className="text-[#8B7355]">{fullDescription}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 rounded-lg p-2 text-[#8B7355] hover:bg-[#E8DCC8] hover:text-[#6B5D3F] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>
        
        <ScrollArea className="p-6 max-h-[calc(90vh-200px)]">
          <div className="space-y-6">
            <div>
              <h3 className="text-[#6B5D3F] mb-4">Key Benefits</h3>
              <div className="space-y-4">
                {details.map((detail, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#8B7355]"></div>
                    </div>
                    <p className="text-[#6B5D3F] leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl bg-[#E8DCC8] p-6 border border-[#C4896F]">
              <h4 className="text-[#6B5D3F] mb-3">Why This Matters</h4>
              <p className="text-[#6B5D3F] leading-relaxed">
                Including tofu in your diet is an excellent way to enjoy these health benefits. 
                Our premium tofu products are carefully crafted to preserve maximum nutritional value 
                while delivering exceptional taste and versatility in your cooking.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
