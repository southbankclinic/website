const practitioners = [
  {
    name: "HUINA HUO",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Huina is a highly qualified and multi-disciplinary practitioner, having initially trained and worked as a beauty therapist, practicing bodywork such as Swedish massage and facial massage.Following this diverse foundation in therapy she then chose to pursue her true passion for Chinese medicine, graduating from the University of Westminster with a BSc (Hons) in Chinese medicine acupuncture."
  },
  {
    name: "PROF. VOLKER SCHEID",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Volker grew up in a family engaged in the cultivation of medicinal herbs. Following an apprenticeship as a gardener he came to England to study phytotherapy, acupuncture, Chinese and Japanese herbal medicine. Further studies led him to China where he spent three years studying and Shanghai University of Chinese medicine as well as studying privately with different master physicians."
  },
  {
    name: "CINZIA SCORZON",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Cinzia graduated from the College of Traditional Acupuncture in Leamington Spa in 1984. Together with her husband Volker Scheid, she established the West Terapias clinic in Eastbourne. Her acupuncture course for complementary medicine, Running a busy practice for the next fifteen years Cinzia gained experience in treating a wide range of conditions and patients of all age groups."
  }
];

const Practitioners = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-16">OUR PRACTITIONERS</h1>
        <div className="space-y-16">
          {practitioners.map((practitioner, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img 
                  src={practitioner.image} 
                  alt={practitioner.name}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-light">{practitioner.name}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {practitioner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practitioners;
