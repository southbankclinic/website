const practitioners = [
  {
    name: "HUINA HUO",
    image: "Huina5.jpg",
    description: "Huina is a highly qualified and multi-disciplinary practitioner, having initially trained and worked as a beauty therapist, practicing bodywork such as Swedish massage and facial massage. Following this diverse foundation in therapy she then chose to pursue her true passion for Chinese medicine, graduating from the University of Westminster with a BSc (Hons) in Chinese medicine acupuncture. Huina completed extensive training in the Polyclinic at the University of Westminster, treating patients with a wide range of conditions including fertility / IVF support. Huina furthered her studies by completing a MSc(Hons) in Chinese Herbal Medicine allowing her to be a licensed practitioner of the Register Chinese Herbal Medicine (RCHM). In addition to her studies in the UK, Huina has been fortunate to foster relationships in her native country of Mainland China and in Taiwan, in particular studying closely with the prominent physician Prof. Xian Jianchun at the Guangzhou university of Chinese Medicine, and her time at the Taiwan China Medical University hospital has given her valuable first hand insight on the field of cosmetic and beauty related acupuncture."
  },
  {
    name: "PROF. VOLKER SCHEID",
    image: "Volker.jpg",
    description: "Volker grew up in a family engaged in the cultivation of medicinal herbs. Following an apprenticeship as a gardener he came to England to study phytotherapy, acupuncture, Chinese and Japanese herbal medicine. Further studies led him to China, where he spent three years at Beijing and Shanghai Universities of Chinese medicine as well as studying privately with different master physicians. It also led to a deepening academic involvement with East Asian medicines pursued at the University of Cambridge, SOAS, and now the University of Westminster, where he is director of the EASTmedicine Research Centre. He is also a licensed practitioner of natural medicine (Heilpraktiker) in his native Germany."
  },
  {
    name: "CINZIA SCORZON",
    image: "cinzia.jpg",
    description: "Cinzia graduated from the College of Traditional Acupuncture in Leamington Spa in 1984. Together with her husband Volker Scheid, she established the West Terrace Clinic in Eastbourne, a multi-disciplinary center for complementary medicine. Running a busy practice for the next fifteen years Cinzia gained experience in treating a wide range of conditions and patients of all age groups.Cinzia left Eastbourne in 1999 for further studies of Chinese language and medicine at the Shanghai University of Chinese Medicine. She was particularly fortunate to be able to study with Prof. Li Ding and Prof. You Yiren, two of Shanghai's foremost acupuncture physicians.\n* Please note, after many years at the Southbank clinic, Cinzia has left the UK and started a new chapter in her life, relocating in Tenerife. If you wish to book an appointment with please contact Huina on 020 7928 8333 or mail@southbankclinic.co.uk."
  }
];

const Practitioners = () => {
  return (
    <div className="min-h-screen bg-[#edeff2] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light font-[300] text-center mb-16 text-[#676770] tracking-[5px]">OUR PRACTITIONERS</h1>
        <div className="space-y-16">
          {practitioners.map((practitioner, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img 
                  src={practitioner.image} 
                  alt={practitioner.name}
                  className="w-full h-[400px] object-contain rounded-lg bg-white"
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
