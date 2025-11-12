import { MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";

interface FloatingButtonsProps {
  whatsappNumber: string;
  phoneNumber: string;
}

export function FloatingButtons({ whatsappNumber, phoneNumber }: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-[#25D366] shadow-lg transition-all hover:bg-[#20BA59] hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>
      <a href={`tel:${phoneNumber}`} className="group">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-[#6B5D3F] shadow-lg transition-all hover:bg-[#8B7355] hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
}
