const treatments = [
  {
    title: "ACUPUNCTURE",
    image: "/Acuimg.jpeg",
    prices: [
      { service: "First consultation & treatment", price: "£110" },
      { service: "Follow-up sessions", price: "£85" },
      { service: "Children (under 12) first consultation & treatment", price: "£80" },
      { service: "Children (under 12) follow up", price: "£65" },
    ]
  },
  {
    title: "HERBAL MEDICINE",
    image: "/MedCab3.jpg",
    prices: [
      { service: "First consultation", price: "£150" },
      { service: "Follow-up consultation", price: "£80" },
      { service: "(Cost of herbs not included)", price: "" },
    ]
  },
  {
    title: "FACIAL ACUPUNCTURE",
    image: "/Facial.jpeg",
    prices: [
      { service: "First consultation & treatment (90 minutes)", price: "£180" },
      { service: "Follow-up sessions (60 minutes)", price: "£150" },
    ]
  },
  {
    title: "FERTILITY AND IVF SUPPORT",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    prices: [
      { service: "Initial consultation & treatment", price: "£110" },
      { service: "Follow-up sessions", price: "£85" },
    ]
  },
  {
    title: "WEIGHT LOSS SUPPORT",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    prices: [
      { service: "Initial consultation & treatment", price: "£110" },
      { service: "Follow-up sessions", price: "£85" }
    ]
  }
];

const Fees = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-4 tracking-[5px] text-[#676770]">TREATMENT FEES</h1>
        <p className="text-center text-[#6a859c] max-w1-3xl mx-auto mb-16 px-8">
          Traditional East Asian medicines offer diverse treatment approaches tailored to individual needs. Whether focusing on eliminating pathogens, strengthening the body's natural defenses, or addressing specific symptoms, we combine time-tested traditions with modern research to provide the most effective treatment for your condition.

          We believe that good health care should be available to everyone, which is why we offer expert treatments at competitive rates.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <img 
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className="text-xl font-medium mb-4">{treatment.title}</h2>
              <div className="space-y-3">
                {treatment.prices.map((price, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-600">{price.service}</span>
                    <span className="font-medium">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fees;
