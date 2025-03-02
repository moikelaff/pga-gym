export default function Membership() {
    return (
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
    );
  }