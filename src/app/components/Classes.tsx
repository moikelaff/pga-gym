import Image from "next/image";

export default function Classes() {
  return (
    <section id="classes" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-brandLightPink">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandNavy mb-8 md:mb-12">Our Classes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 mx-20">
          {/* Toddler Class */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 md:h-64 relative">
              <Image
                src="/toddler_img.svg"
                alt="Toddler Gymnastics"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-brandHotPink mb-2">Toddler Gymnastics</h3>
              <p className="text-brandNavy mb-4 text-sm md:text-base text-justify">
              Join our toddler gymnastics program for a mini adventure! 
              Your little one will jump, crawl, roll, and climb, building strong muscles and 
              better balance while having loads of fun. They’ll learn to follow 
              simple routines, solve tiny challenges, and make new friends in a safe, 
              friendly space. Our caring instructors celebrate every milestone, 
              so each class feels like a playful family get-together. 
              Come play, learn, and grow with us. moms and toddlers love it here!
              </p>

            </div>
          </div>
          
          {/* Beginner Class */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 md:h-64 relative">
              <Image
                src="/artistic_img.svg"
                alt="Beginner Gymnastics"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-brandHotPink mb-2 text-center">Beginner Gymnastics</h3>
              <p className="text-brandNavy mb-4 text-sm md:text-base text-justify">
              Artistic gymnastics blends strength, flexibility, and creativity. Perfect for anyone who loves a fun challenge! 
              You’ll vault, tumble, and balance to build muscle and boost endurance while sharpening focus and problem-solving skills. 
              Plus, you get to show off your style in every routine! Our friendly coaches 
              and teammates are here to cheer you on, whether you’re aiming to compete or 
              just want an active, exciting pastime. Join us and discover a sport 
              that powers your body, sharpens your mind, and lets your creativity shine!
              </p>
 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}