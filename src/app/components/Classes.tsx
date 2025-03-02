import Image from "next/image";

export default function Classes() {
  return (
    <section id="classes" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-brandWhite">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandNavy mb-8 md:mb-12">Our Classes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-brandHotPink mb-2">Toddler Gymnastics</h3>
              <p className="text-brandNavy mb-4 text-sm md:text-base">
                For ages 18 months to 3 years. Parent-assisted classes focusing on basic motor skills, 
                balance, and fun introduction to gymnastics equipment.
              </p>
              <p className="text-brandGray text-sm">
                45-minute sessions · Small class sizes · Nurturing environment
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
              <h3 className="text-xl md:text-2xl font-bold text-brandHotPink mb-2">Beginner Gymnastics</h3>
              <p className="text-brandNavy mb-4 text-sm md:text-base">
                For ages 4-6. Introduction to fundamental gymnastics skills including 
                basic rolls, handstands, and beam walks in a fun, encouraging atmosphere.
              </p>
              <p className="text-brandGray text-sm">
                60-minute sessions · Progressive skill building · Confidence development
              </p>
            </div>
          </div>
          
          {/* Intermediate Class */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 md:h-64 relative">
              <Image
                src="/article_1.svg"
                alt="Intermediate Gymnastics"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-brandHotPink mb-2">Intermediate Gymnastics</h3>
              <p className="text-brandNavy mb-4 text-sm md:text-base">
                For ages 7-9. Building on foundational skills with introduction to more complex 
                movements across all apparatus including bars, beam, floor, and vault.
              </p>
              <p className="text-brandGray text-sm">
                90-minute sessions · Structured progression · Strength development
              </p>
            </div>
          </div>
          
          {/* Advanced Class */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 md:h-64 relative">
              <Image
                src="/article_2.svg"
                alt="Advanced Gymnastics"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-brandHotPink mb-2">Advanced Gymnastics</h3>
              <p className="text-brandNavy mb-4 text-sm md:text-base">
                For ages 10-12. Focused training for gymnasts who have mastered basics and 
                are ready for more challenging skills and routines.
              </p>
              <p className="text-brandGray text-sm">
                2-hour sessions · Technique refinement · Performance preparation
              </p>
            </div>
          </div>
          
          {/* Competition Team */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 md:h-64 relative">
              <Image
                src="/article_3.svg"
                alt="Competition Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-brandHotPink mb-2">Competition Team</h3>
              <p className="text-brandNavy mb-4 text-sm md:text-base">
                For dedicated gymnasts showing exceptional potential. Intensive training 
                preparing athletes for local, regional, and national competitions.
              </p>
              <p className="text-brandGray text-sm">
                Multiple weekly sessions · Personalized coaching · Competition opportunities
              </p>
            </div>
          </div>
          
          {/* Adult Class */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 md:h-64 relative bg-brandLightPink flex items-center justify-center">
              <span className="text-2xl md:text-4xl text-brandHotPink font-bold">Coming Soon!</span>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-brandHotPink mb-2">Adult Gymnastics</h3>
              <p className="text-brandNavy mb-4 text-sm md:text-base">
                For ages 18+. Whether you're a former gymnast or a complete beginner, 
                our adult classes provide a fun way to build strength and flexibility.
              </p>
              <p className="text-brandGray text-sm">
                Evening sessions · All skill levels welcome · Fitness-focused
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}