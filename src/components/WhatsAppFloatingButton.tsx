import { MessageCircle } from "lucide-react";

const WhatsAppFloatingButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/916386282989?text=Hi! I'm interested in Domotiq products.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(var(--whatsapp))] hover:bg-[hsl(142,70%,40%)] text-[hsl(var(--whatsapp-foreground))] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-card text-card-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[hsl(var(--whatsapp))] animate-ping opacity-20" />
    </button>
  );
};

export default WhatsAppFloatingButton;
