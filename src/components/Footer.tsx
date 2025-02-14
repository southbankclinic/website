
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>0207 928 8333</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>mail@southbankclinic.co.uk</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Location</h3>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>75 Roupell St, London SE1 8SS</span>
            </div>
            <p>Near Waterloo or Southwark underground stations</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Opening Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
