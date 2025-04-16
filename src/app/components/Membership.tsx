export default function Membership() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-brandHotPink mb-8">Join Phoenix Academy Today!</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {/* Monthly Rates Card */}
          <div className="rounded-lg w-full md:w-1/2 p-3 bg-brandLightPink border-2 border-brandHotPink overflow-hidden">
          <div className="rounded-lg border-2 h-full bg-white border-brandHotPink overflow-hidden">
            <div className="p-5">
              <h3 className="text-xl font-bold text-center text-brandNavy mb-4">MONTHLY RATES</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-brandNavy font-bold">UNLIMITED</span>
                  <span className="text-brandNavy">1.300K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brandNavy font-bold">3x / WEEK</span>
                  <span className="text-brandNavy">1.100K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brandNavy font-bold">2x / WEEK</span>
                  <span className="text-brandNavy">900K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brandNavy font-bold">1x / WEEK</span>
                  <span className="text-brandNavy">600K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brandNavy font-bold">VISIT</span>
                  <span className="text-brandNavy">200K</span>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          {/* Membership Fee Card */}
          <div className="rounded-lg w-full md:w-1/2 p-3 bg-brandLightPink border-2 border-brandHotPink overflow-hidden">
          <div className="rounded-lg border-2 h-full bg-white border-brandHotPink overflow-hidden">
            <div className="p-5 flex flex-col items-center justify-center h-full">
              <h3 className="text-xl font-bold text-center text-brandNavy mb-4">MEMBERSHIP FEE</h3>
              <div className="flex flex-col items-center justify-center">
                <span className="text-6xl font-bold text-brandNavy mb-4">700K</span>
                <p className="text-center text-brandNavy">
                  Bonus 1 T-shirt & 1 Leotard <br />Included!
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        {/* Special Promo */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-brandNavy mb-4">Special Promo!</h3>
          
          <div className="mb-4">
            <h4 className="font-bold text-brandNavy mb-1">Member Get Member Discount</h4>
            <p className="text-brandNavy">
              Refer a Friend to join our gymnastics academy and you will receive a 10% 
              <span className="font-bold"> Discount </span>
              on your next month's membership fee
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-brandNavy mb-1">Sibling Discount</h4>
            <p className="text-brandNavy">
              Sign up with your 
              <span className="font-bold"> Siblings </span>
              and enjoy a 20% 
              <span className="font-bold"> Discount </span>
              on your total monthly fees!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}