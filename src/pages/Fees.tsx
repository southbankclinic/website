const treatments = [
  {
    title: "ACUPUNCTURE",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    prices: [
      { service: "First consultation & treatment", price: "£105" },
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
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    prices: [
      { service: "First consultation & treatment (90 minutes)", price: "£150" },
      { service: "Follow-up sessions (60 minutes)", price: "£100" },
    ]
  },
  {
    title: "FERTILITY AND IVF SUPPORT",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    prices: [
      { service: "Initial consultation & treatment", price: "£120" },
      { service: "Follow-up sessions", price: "£90" },
      { service: "IVF support package (6 sessions)", price: "£480" },
    ]
  },
  {
    title: "WEIGHT LOSS SUPPORT",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    prices: [
      { service: "Initial consultation & treatment", price: "£105" },
      { service: "Follow-up sessions", price: "£85" },
      { service: "Weight loss package (8 sessions)", price: "£600" },
    ]
  }
];

const Fees = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-4 tracking-[5px]">TREATMENT FEES</h1>
        <p className="text-center text-[#6a859c] max-w1-1.5xl mx-auto mb-16">
          Traditional East Asian medicines are diverse and different types of treatments are suited to different complaints and patients. Some emphasise eliminating pathogens and toxins from the body, while others primarily aim to strengthen a person's defences or energies. At times it is more suitable to focus on a patient's general constitution, at others it is more important to deal with a single illness or symptom. Drawing on a wide repertoire of traditions, therapies and techniques as well as modern research we will select those that are most suitable to your individual condition. Traditional East Asian medicines are diverse and different types of treatments are suited to different complaints and patients. Some emphasise eliminating pathogens and toxins from the body, while others primarily aim to strengthen a person's defences or energies. At times it is more suitable to focus on a patient's general constitution, at others it is more important to deal with a single illness or symptom. Drawing on a wide repertoire of traditions, therapies and techniques as well as modern research we will select those that are most suitable to your individual condition.

          We believe that good health care should be available to everyone. For this reason we offer personalised expert treatments at highly competitive rates.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
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
