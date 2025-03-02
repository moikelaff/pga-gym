import Image from "next/image";

export default function Contacts() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-brandLightPink">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandNavy mb-8 md:mb-12">Visit Us</h2>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="lg:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-bold text-brandNavy mb-4">Jakarta Location</h3>
            <p className="text-brandNavy mb-2 text-sm md:text-base">
              <strong>Address:</strong> Jalan Sudirman No. 123, Jakarta Selatan
            </p>
            <p className="text-brandNavy mb-2 text-sm md:text-base">
              <strong>Hours:</strong> Monday-Friday 9am-8pm, Saturday-Sunday 9am-5pm
            </p>
            <p className="text-brandNavy mb-6 text-sm md:text-base">
              <strong>Phone:</strong> +62 818-0841-8666
            </p>
            
            <div className="w-full h-48 md:h-64 bg-gray-200 rounded-lg">
              {/* Placeholder for map - In production, replace with actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center text-brandGray">
                Map Location
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-bold text-brandNavy mb-4">Depok Location</h3>
            <p className="text-brandNavy mb-2 text-sm md:text-base">
              <strong>Address:</strong> Jalan Margonda Raya No. 456, Depok
            </p>
            <p className="text-brandNavy mb-2 text-sm md:text-base">
              <strong>Hours:</strong> Monday-Friday 9am-8pm, Saturday-Sunday 9am-5pm
            </p>
            <p className="text-brandNavy mb-6 text-sm md:text-base">
              <strong>Phone:</strong> +62 818-0841-8667
            </p>
            
            <div className="w-full h-48 md:h-64 bg-gray-200 rounded-lg">
              {/* Placeholder for map - In production, replace with actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center text-brandGray">
                Map Location
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <a
            href="https://wa.me/6281808418666"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              bg-brandGreen text-brandWhite
              border-2 border-brandWhite
              rounded-lg
              px-5 py-3 md:px-8 md:py-4 text-base md:text-lg
              hover:bg-opacity-90
              transition-colors
              shadow-md
            "
          >
            <Image
              src="/whatsapp_icon.svg"
              alt="WhatsApp Icon"
              width={24}
              height={24}
              className="mr-2 md:mr-3"
            />
            Contact Us for a Free Trial Class
          </a>
        </div>
      </div>
    </section>
  );
}