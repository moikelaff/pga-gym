import Image from "next/image";

export default function Contacts() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-brandLightPink">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandNavy mb-8 md:mb-12">
          Visit Us
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="lg:w-full bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-bold text-brandNavy mb-4">
              Depok Location
            </h3>
            <p className="text-brandNavy mb-2 text-sm md:text-base">
              <strong>Address:</strong> Cinere Bellevue Mall, GF 18-20, Jalan Merawan No.23, Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat - 16514
            </p>
            <p className="text-brandNavy mb-6 text-sm md:text-base">
              <strong>Phone:</strong> +6281808418666
            </p>
            
            <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/map.svg"
                alt="Depok Map"
                layout="responsive"
                width={1500}
                height={600}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
