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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/clinic_homeimg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-light mb-8 tracking-[8px] text-[#a4cd39]">WELCOME</h1>
            <p className="text-xl text-center max-w-2xl mb-8">
            The Clinic@Southbank (previously The Traditional Acupuncture Centre) is London's oldest specialist clinic for acupuncture.
            </p>
            <div className="flex gap-4">
              <a href="tel:02079288333" className="bg-[#a4cd39] text-white px-8 py-3 rounded">
                CALL
              </a>
              <a href="mailto:mail@southbankclinic.co.uk" className="border border-white text-white px-8 py-3 rounded">
                EMAIL US
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-8 tracking-[5px]">ABOUT THE CLINIC</h2>
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
            <h3 className="text-xl font-medium mb-4 tracking-[5px]">ACUPUNCTURE</h3>
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
      <div className="bg-[#192024] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-8 text-white tracking-[5px]">LOCATION</h2>
          <p className="text-center mb-4 text-white">
            The clinic is located near Waterloo or Southwark underground stations at:<br />
            75 Roupell St, Southbank, London SE1 8SS
          </p>
          <div className="h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5476244304706!2d-0.11124812302821927!3d51.50427497181436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a7c75b2d6f%3A0x5cc9e55676429c82!2s75%20Roupell%20St%2C%20London%20SE1%208SS%2C%20UK!5e0!3m2!1sen!2s!4v1709901234567!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Our Practitioners Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-8 tracking-[5px]">OUR PRACTITIONERS</h2>
          <div className="max-w-3xl mx-auto text-[#8e8e9c]-600 space-y-6">
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
            We are very conscious of the health and safety of our patients and we are working strictly to the Public Health England and the British Acupuncture Council. If you have any questions, please do get in touch.
            </p>
          </div>
        </div>
      </div>

      {/* The Clinic Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-8 tracking-[5px]">THE CLINIC</h2>
          
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
              <h3 className="text-xl font-medium mb-4 text-center">Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="text-center">Wheelchair accessible</li>
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
