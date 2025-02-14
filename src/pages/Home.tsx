import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/clinic_homeimg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-light mb-4" style={{ color: '#a4cd39', letterSpacing: '10px' }}>WELCOME</h1>
            <p className="text-xl text-center max-w-2xl mb-8">
              THE CLINIC @ SOUTHBANK (PREVIOUSLY THE TRADITIONAL ACUPUNCTURE CENTRE) IS LONDON'S FIRST DEDICATED CLINIC FOR ACUPUNCTURE
            </p>
            <Link to="/contact" className="bg-green-500 text-white px-8 py-3 rounded">
              CONTACT US
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
            Founded in 1983, the Clinic re-opened under its new name in 2010. As London's premier centre of traditional East Asian and other forms of personalised medicine including different styles of acupuncture, traditional Chinese medicine (TCM), Japanese Kampo, tuina massage, Ayurveda and various forms of body work.
            </p>
            <p>
            What makes us different is our long-standing involvement in the field of East Asian medicines as practitioners, scholars, teachers and researchers. This provides us with a unique ability to flexibly and selectively apply the art and science of East Asian medicines to a wide range of health care problems in the West.
            </p>
            <p>
              We offer treatment by a dynamic team of practitioners led by by two of Europe's foremost experts in traditional East Asian medicines. Our focus on personalised healthcare aims to treat existing conditions, prevent future illness, and enhance well-being. To this end we tailor treatment to individual needs and offer advice on diet and life-style changes where appropriate.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="text-center border border-[#dcebf7] rounded-[5px] p-4">
            <h3 className="text-xl font-medium mb-4">ACUPUNCTURE</h3>
            <p className="text-gray-600">
              This treatment consists of inserting fine needles into the skin often only very superficially. We only use sterilized disposable needles. Moxibustion uses various forms of gentle heat to stimulate acupuncture points; this is often combined with needling.
            </p>
          </div>
          <div className="text-center border border-[#dcebf7] rounded-[5px] p-4">
            <h3 className="text-xl font-medium mb-4">HERBAL MEDICINE</h3>
            <p className="text-gray-600">
              Chinese and Japanese herbal medicines combine the knowledge of more than 300 herbs and their actions with the art of combining these into prescriptions suited to each individual case. These prescriptions usually consist of 6-12 herbs most often taken today as an instant drink. Topical applications like creams and compresses may also be used. Prescriptions need to be adjusted from time to time as symptoms change during the course of healing.
            </p>
          </div>
          <div className="text-center border border-[#dcebf7] rounded-[5px] p-4">
            <h3 className="text-xl font-medium mb-4">FACIAL ACUPUNCTURE</h3>
            <p className="text-gray-600">
              Facial acupuncture a natural, anti-ageing treatment that improves skin tone and leaves the face feeling lifted and toned, it also helps to prevent the formation of wrinkles and minimises the appearance of fine lines by stimulating the flow of blood and Qi to the face, thereby boosting the skin's supply of nutrients and oxygen.
              Skin care advice will be given to prolong the results of the treatment.
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

      {/* Our Practitioners Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-8">OUR PRACTITIONERS</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p>
            We offer a wide range of treatments including acupuncture, Chinese herbal medicine, Kampo, tuina, physiotherapy, osteopathy and Ayurveda. We have some of the most experienced practitioners in Europe and patients come to visit us from all over the UK, the EU and beyond. We speak English, Chinese, German, Italian, Swedish and French.
            </p>
            <p>
            We treat a wide range of disorders including all kinds of pain such as backache or migraines, women's and men's health issues including fertility and menopausal problems, skin disorders, allergies, insomnia and chronic fatigue. We specialise in treating complex disorders that have not responded to previous treatment and work in conjunction with both biomedical and complementary medical practitioners.
            </p>
            <p>
            All practitioners are members of their respective professional bodies and adhere to their codes of ethics and practice. Treatment is private but in certain situations may be reimbursable by your insurance. You are welcome to book a free chat or phone to find out how we might be able to help you.
            </p>
            <p>
            We are very conscious of the health and safety of our patients and we are working strictly to the Public Health England and the British Acupuncture Council. If you have any questions get in touch, please.
            </p>
          </div>
        </div>
      </div>

      {/* The Clinic Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-8">THE CLINIC</h2>
          
          {/* Text Section */}
          <div className="max-w-3xl mx-auto mb-12 text-gray-600 space-y-6">
            <p>
              Welcome to our state-of-the-art clinic in the heart of Southbank.
              Each of our treatment rooms is thoughtfully appointed to ensure your comfort and relaxation during your visit. Our clinic maintains the highest standards of hygiene and professional care, creating an ideal space for your healing journey.
            </p>
            <p>
              If you wish to book an appointment, please direct all your enquiries to Huina on 020 7928 8333 or mail@southbankclinic.co.uk, thankyou. 
            </p>
          </div>

          {/* Image Carousel */}
          <div className="max-w-4xl mx-auto mb-12 relative">
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full pt-[56.25%]">
                      <img
                        src={`/Evolution-${index}.jpg`}
                        alt={`Clinic image ${index}`}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">Opening Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="text-center">Monday - Friday: 9:00 AM - 7:00 PM</li>
                <li className="text-center">Saturday: 10:00 AM - 4:00 PM</li>
                <li className="text-center">Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-center">Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="text-center">Wheelchair accessible</li>
                <li className="text-center">Air-conditioned treatment rooms</li>
                <li className="text-center">Comfortable waiting area</li>
                <li className="text-center">Private consultation rooms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
