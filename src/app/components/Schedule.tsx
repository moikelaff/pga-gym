export default function Schedule() {
    return (
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
    );
  }