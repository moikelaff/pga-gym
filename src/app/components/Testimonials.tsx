export default function Testimonials() {
    return (
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
    );
  }