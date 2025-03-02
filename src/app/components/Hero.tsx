import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-brandWhite px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 pt-20 pb-16">
        {/* Logo Section with adjusted positioning */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 mt-[-35px] lg:ml-24">
          <div className="w-64 h-64 md:w-80 md:h-80 relative ml-20"> {/* Added margin-left for right shift */}
            <Image
              src="/main_pink_logo.svg" 
              alt="Phoenix Gymnastics Academy Logo"
              width={300}
              height={300}
              priority
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Description Section */}
        <div className="lg:w-1/2 bg-brandHotPink rounded-lg p-6 text-brandWhite text-center shadow-md mt-12">
          <p className="mb-4 text-sm md:text-base">
            At Phoenix Gymnastics Academy, we believe in the boundless potential of every individual. Nestled in the heart of Jakarta & Depok, our academy is dedicated to providing top-tier gymnastics training to athletes of all ages and skill levels. Our state-of-the-art facilities and experienced coaches offer a nurturing environment where students can develop their athletic abilities, gain confidence, and pursue their dreams.
          </p>
          
          <p className="mb-4 text-sm md:text-base">
            Our programs are designed to accommodate a wide range of interests and goals, from recreational classes for beginners to intensive training for competitive gymnasts. We emphasize the importance of physical fitness, discipline, and perseverance, ensuring that our gymnasts not only excel in gymnastics but also build essential life skills.
          </p>
          
          <p className="text-sm md:text-base">
            Join us at Phoenix Gymnastics Academy and experience a community that celebrates hard work, determination, and the joy of movement. Let's flip, tumble, and soar together toward a future filled with achievement and success.
          </p>
        </div>
      </div>
    </section>
  );
}