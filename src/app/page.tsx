// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-[60px]"> {/* Padding-top for fixed navbar */}
      {/* Hero Section with Logo and Description */}
      <section className="w-full bg-brandWhite py-10 md:py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 relative left-[100px] top-[-50px]"> {/* Shifted right by 100px and up by 50px */}
            <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative mb-4">
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
          <div className="lg:w-1/2 bg-brandHotPink rounded-lg p-6 text-brandWhite text-center shadow-md">
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
      
      {/* Schedule Section */}
      <section id="schedule" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-brandLightPink">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brandNavy mb-8 md:mb-12">Our Schedule</h2>
          
          {/* Weekly Schedule - Responsive Table with Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full border border-brandGray rounded-lg overflow-hidden">
              <thead className="bg-brandHotPink text-white">
                <tr>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-left">Time</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-center">Monday</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-center">Tuesday</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-center">Wednesday</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-center">Thursday</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-center">Friday</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-center">Saturday</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-center">Sunday</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="border-b border-brandGray">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-medium">09:00 - 10:30</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Toddler Gym</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">-</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Toddler Gym</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">-</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Toddler Gym</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Beginner</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Beginner</td>
                </tr>
                <tr className="border-b border-brandGray bg-gray-50">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-medium">10:30 - 12:00</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Beginner</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Beginner</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Beginner</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Beginner</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Beginner</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Intermediate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Intermediate</td>
                </tr>
                <tr className="border-b border-brandGray">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-medium">13:00 - 14:30</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Intermediate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Intermediate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Intermediate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Intermediate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Intermediate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Advanced</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b border-brandGray bg-gray-50">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-medium">15:00 - 17:00</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Advanced</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Advanced</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Advanced</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Advanced</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Advanced</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Competition Team</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Competition Team</td>
                </tr>
                <tr>
                  <td className="py-3 md:py-4 px-3 md:px-6 font-medium">17:30 - 19:30</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Competition Team</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Competition Team</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Competition Team</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Competition Team</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">Competition Team</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">-</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Schedule Indicator */}
          <div className="md:hidden mt-4 text-center text-sm text-brandNavy">
            <p>Swipe horizontally to view full schedule</p>
          </div>
          
          <p className="mt-6 md:mt-8 text-center text-brandNavy text-sm md:text-base">
            Schedule is subject to change. Please contact us to confirm class availability.
          </p>
        </div>
      </section>
      
      {/* Classes Section */}
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
      
      {/* Membership Plans Section - Added from Figma design */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-brandLightPink">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brandNavy mb-8 md:mb-12">Join Phoenix Academy Today!</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 max-w-4xl mx-auto">
            {/* Monthly Rates Card */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2 border-2 border-brandHotPink">
              <h3 className="text-xl md:text-2xl font-bold text-center text-brandNavy mb-4">MONTHLY RATES</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold">UNLIMITED</span>
                  <span className="font-bold">1,300K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>3x / WEEK</span>
                  <span>1,100K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2x / WEEK</span>
                  <span>900K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>1x / WEEK</span>
                  <span>600K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>VISIT</span>
                  <span>250K</span>
                </div>
              </div>
            </div>
            
            {/* Membership Fee Card */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2 border-2 border-brandHotPink">
              <h3 className="text-xl md:text-2xl font-bold text-center text-brandNavy mb-4">MEMBERSHIP FEE</h3>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-5xl font-bold text-brandHotPink mb-4">700K</span>
                <p className="text-center text-sm text-brandNavy">
                  Bonus 1 T-shirt & 1 Leotard included
                </p>
              </div>
            </div>
          </div>
          
          {/* Special Promo */}
          <div className="mt-8 md:mt-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-brandNavy mb-2">Special Promo!</h3>
            <h4 className="font-medium text-lg text-brandNavy mb-2">Member Get Member Discount</h4>
            <p className="text-brandNavy max-w-2xl mx-auto mb-4">
              Refer a friend to join our gymnastics academy and you will receive a 10% Discount on your next month's membership fee
            </p>
            <p className="font-medium text-brandNavy">Family Discount</p>
            <p className="text-brandNavy max-w-2xl mx-auto">
              Sign up with your Siblings and enjoy a 15% Discount on your total monthly fees!
            </p>
          </div>
          
          {/* Coming Soon Banner */}
          <div className="mt-12 bg-brandLightPink rounded-lg p-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-brandHotPink mb-2">TUMBLING SOON ON</h3>
            <p className="text-4xl md:text-5xl font-bold text-brandHotPink">APRIL 2025</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-brandWhite">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brandNavy mb-8 md:mb-12">What Our Members Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brandHotPink rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="font-bold text-brandNavy">Sarah K.</h3>
                  <p className="text-brandGray text-xs md:text-sm">Parent of Beginner Student</p>
                </div>
              </div>
              <p className="text-brandNavy text-sm md:text-base">
                "My daughter has gained so much confidence since joining Phoenix. The coaches are patient, 
                encouraging, and truly care about each child's development."
              </p>
            </div>
            
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brandHotPink rounded-full flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="font-bold text-brandNavy">Rini T.</h3>
                  <p className="text-brandGray text-xs md:text-sm">Intermediate Gymnast</p>
                </div>
              </div>
              <p className="text-brandNavy text-sm md:text-base">
                "I've been at Phoenix for two years and have learned so many new skills. The coaches 
                push me to be my best while keeping training fun and exciting!"
              </p>
            </div>
            
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brandHotPink rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="font-bold text-brandNavy">Ahmad J.</h3>
                  <p className="text-brandGray text-xs md:text-sm">Parent of Competition Team Member</p>
                </div>
              </div>
              <p className="text-brandNavy text-sm md:text-base">
                "The dedication of the coaching staff is incredible. My son has thrived in the 
                competitive program and has developed discipline that extends beyond gymnastics."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
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
      
        {/* Footer */}
    <footer className="bg-brandHotPink py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo/Name and Address */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Phoenix Gymnastics Academy</h3>
            <p className="text-sm max-w-md">
              Cinere Bellevue Mall, GF 18-20, Jalan Merawan No.23, Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat - 16514
            </p>
          </div>

          {/* Email Contact */}
          <div className="text-right">
            <p className="font-medium mb-2">Email Us</p>
            <a href="mailto:phoenixgymnasticsa@gmail.com" className="text-sm hover:underline">
              phoenixgymnasticsa@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-pink-400 pt-6">
          <p className="text-sm mb-4 md:mb-0">© 2025 Phoenix Gymnastics Academy. All rights reserved</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 items-center">
            <a href="https://www.tiktok.com/@phoenixgymacademy" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/tiktok.svg" alt="TikTok" width={24} height={24} className="align-middle" />
            </a>
            <a href="https://www.instagram.com/phoenixgymacademy" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/instagram.svg" alt="Instagram" width={24} height={24} className="align-middle" />
            </a>
            <a href="mailto:phoenixgymnasticsa@gmail.com" className="hover:opacity-80">
              <img src="/email.svg" alt="Email" width={24} height={24} className="align-middle" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}