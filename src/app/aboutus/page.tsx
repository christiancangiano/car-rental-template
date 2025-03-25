"use client";

import Image from "next/image";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
     
      <style jsx global>{`
        body, html {
          overflow-x: hidden;
        }
      `}</style>

    
      <section 
        className="relative min-h-screen flex items-center justify-center w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/greensto.png')" }}
      >
     
        <div className="absolute inset-0 bg-opacity-50" />
        
        <h1 className="relative text-5xl md:text-6xl font-bold text-white text-center px-4">
          ABOUT US
        </h1>
      </section>

    
      <section className="bg-gray-100 px-4 sm:px-6 py-12 md:py-16 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-700 text-center">Our Journey to Excellence</h2>

        <div className="max-w-screen-lg text-center space-y-6 text-lg text-gray-700">
          <p>
            It all began in a <strong>small Brooklyn garage</strong> with just one <strong>Lamborghini Huracán STO</strong> and a dream—
            to redefine the luxury car rental industry. What started as a passion project quickly gained momentum as word spread about
            our <strong>unmatched service, pristine fleet, and exclusive experiences.</strong>
          </p>

          <p>
            Within a year, we expanded our fleet and became <strong>New York Citys most sought after exotic car rental service.</strong>
            Celebrities, business executives, and car enthusiasts alike trusted us for their luxury transportation needs.
          </p>

          <p>
            Our success in New York paved the way for <strong>Los Angeles,</strong> where we opened a second location catering to the
            elite of <strong>Beverly Hills and Hollywood.</strong> Today, we are the <strong>leading luxury car rental provider</strong> in both cities,
            offering the most prestigious vehicles and tailored VIP experiences.
          </p>

          <p>
            Whether you need a <strong>chauffeured Rolls-Royce</strong> for a red carpet event or a <strong>Ferrari 812 Superfast</strong> for an
            adrenaline-fueled weekend, we are dedicated to delivering the <strong>ultimate luxury experience.</strong>
          </p>
        </div>

        <div className="mt-10 w-full max-w-screen-lg px-4 sm:px-0">
          <Image 
            src="/cullinan.png" 
            alt="Our Journey from Brooklyn to Beverly Hills" 
            width={500} 
            height={500} 
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;