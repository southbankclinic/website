
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-light mb-4">WELCOME</h1>
            <p className="text-xl text-center max-w-2xl mb-8">
              THE CLINIC @ SOUTHBANK (PREVIOUSLY THE TRADITIONAL ACUPUNCTURE CENTRE) IS LONDON'S FIRST DEDICATED CLINIC FOR ACUPUNCTURE
            </p>
            <Link to="/contact" className="bg-green-500 text-white px-8 py-3 rounded">
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-8">ABOUT THE CLINIC</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p>
              The clinic @ southbank (previously the Traditional Acupuncture Centre) has been offering acupuncture, Chinese herbal medicine and related therapies to the Waterloo community for over 30 years.
            </p>
            <p>
              Established in 1991 by Professors Volker Scheid and Dan Bensky, we are London's first dedicated Chinese medicine clinic and have treated thousands of patients over the years.
            </p>
            <p>
              We maintain a commitment to classical East Asian medicine traditions while incorporating modern research and understanding to provide effective treatments for contemporary health issues.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">ACUPUNCTURE</h3>
            <p className="text-gray-600">
              We maintain classical traditions while incorporating modern research to provide effective treatments.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">HERBAL MEDICINE</h3>
            <p className="text-gray-600">
              Chinese traditional herbal remedies combined with modern understanding for optimal results.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">FACIAL ACUPUNCTURE</h3>
            <p className="text-gray-600">
              Natural facial rejuvenation using traditional techniques and modern approaches.
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-8">LOCATION</h2>
          <p className="text-center mb-4">
            The clinic is located near Waterloo or Southwark underground stations at:<br />
            75 Roupell St, Southbank, London SE1 8SS
          </p>
          <div className="h-[400px] bg-gray-300">
            {/* Google Maps would go here */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
