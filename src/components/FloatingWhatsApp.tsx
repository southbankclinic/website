import { Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "447988978668"; // Replace with your actual WhatsApp number
  const message = "Hello! I would like to schedule an appointment."; // Default message

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
};

export default FloatingWhatsApp; 