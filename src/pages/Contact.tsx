import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-4">CONTACT US TODAY</h1>
        <p className="text-center text-xl mb-16">75 Roupell St, Southbank London SE1 8SS</p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-light mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#a4cd39]" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">0207 928 8333</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#a4cd39]" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">mail@southbankclinic.co.uk</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#a4cd39]" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">75 Roupell St, London SE1 8SS</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full p-3 border rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full p-3 border rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full p-3 border rounded"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#a4cd39] text-white py-3 rounded hover:bg-[#93b933] transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
