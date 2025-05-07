import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_b528c7o', // Replace with your EmailJS service ID
        'template_n90i98s',
        {
          to_email: 'mail@southbankclinic.co.uk',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'r6JcynhezWDiHMOMS' // EmailJS public key
      );

      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-16 tracking-[5px]">CONTACT US TODAY</h1>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-light mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#a4cd39]" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:02079288333"
                    className="text-gray-600 hover:text-[#a4cd39] transition-colors"
                  >
                    0207 928 8333
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#a4cd39]" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:mail@southbankclinic.co.uk" 
                    className="text-gray-600 hover:text-[#a4cd39] transition-colors"
                  >
                    mail@southbankclinic.co.uk
                  </a>
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
            {error && (
              <div className="p-3 text-red-500 bg-red-50 rounded">
                {error}
              </div>
            )}
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
              disabled={isSubmitting}
              className="w-full bg-[#a4cd39] text-white py-3 rounded hover:bg-[#93b933] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "SENDING..." : "SUBMIT"}
            </button>
          </form>
        </div>
        <div className="mt-16 w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6367862515414!2d-0.1097833!3d51.5043444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a7a6b21881%3A0x5e50a72587970d09!2s75%20Roupell%20St%2C%20London%20SE1%208SS!5e0!3m2!1sen!2suk!4v1650000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
