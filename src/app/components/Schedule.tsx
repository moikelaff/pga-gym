export default function Schedule() {
  return (
    <section id="schedule" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-brandWhite">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandHotPink mb-8 md:mb-12">
          Fixed & Flexible Schedule
        </h2>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 text-center w-full">
          {/* Days of the Week */}
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
            <div key={index} className="flex flex-col w-full">
              <h3 className="text-lg md:text-xl font-bold text-brandNavy mb-3">{day}</h3>

              <div className="flex flex-col gap-2">
                {/* Toddler Classes (Pink) */}
                {getScheduleForDay(day, "Toddler").map((session, idx) => (
                  <div
                    key={`toddler-${idx}`}
                    className="py-2 px-2 text-sm md:text-base font-medium rounded-lg bg-brandHotPink text-white"
                  >
                    {session.time}
                  </div>
                ))}

                {/* Artistic Classes (Gray) */}
                {getScheduleForDay(day, "Artistic").map((session, idx) => (
                  <div
                    key={`artistic-${idx}`}
                    className="py-2 px-2 text-sm md:text-base font-medium rounded-lg bg-brandGray text-white"
                  >
                    {session.time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-6 md:mt-8">
          <div className="flex items-center">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-brandHotPink rounded-full mr-2"></div>
            <span className="text-sm md:text-base text-brandNavy font-medium">Toddler | 5 Years Old & Below</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-brandGray rounded-full mr-2"></div>
            <span className="text-sm md:text-base text-brandNavy font-medium">Artistic | 6 Years Old & Above</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Function to return class schedules based on the day and type (Toddler or Artistic)
const getScheduleForDay = (day: string, type: "Toddler" | "Artistic") => {
  const schedules: Record<string, { time: string; type: "Toddler" | "Artistic" }[]> = {
    Monday: [
      { time: "13:00 - 14:00", type: "Toddler" },
      { time: "14:30 - 15:30", type: "Toddler" },
      { time: "13:00 - 14:30", type: "Artistic" },
      { time: "16:30 - 18:00", type: "Artistic" },
      { time: "18:00 - 19:30", type: "Artistic" },
    ],
    Tuesday: [
      { time: "10:00 - 11:00", type: "Toddler" },
      { time: "14:30 - 15:30", type: "Toddler" },
      { time: "10:00 - 11:30", type: "Artistic" },
      { time: "13:00 - 14:30", type: "Artistic" },
      { time: "14:30 - 16:00", type: "Artistic" },
      { time: "18:00 - 19:30", type: "Artistic" },
    ],
    Wednesday: [
      { time: "13:00 - 14:00", type: "Toddler" },
      { time: "14:30 - 15:30", type: "Toddler" },
      { time: "13:00 - 14:30", type: "Artistic" },
      { time: "16:30 - 18:00", type: "Artistic" },
      { time: "18:00 - 19:30", type: "Artistic" },
    ],
    Thursday: [
      { time: "10:00 - 11:00", type: "Toddler" },
      { time: "14:30 - 15:30", type: "Toddler" },
      { time: "10:00 - 11:30", type: "Artistic" },
      { time: "13:00 - 14:30", type: "Artistic" },
      { time: "14:30 - 16:00", type: "Artistic" },
      { time: "18:00 - 19:30", type: "Artistic" },
    ],
    Friday: [
      { time: "13:00 - 14:00", type: "Toddler" },
      { time: "14:30 - 15:30", type: "Toddler" },
      { time: "13:00 - 14:30", type: "Artistic" },
      { time: "16:30 - 18:00", type: "Artistic" },
      { time: "18:00 - 19:30", type: "Artistic" },
    ],
    Saturday: [
      { time: "10:00 - 11:00", type: "Toddler" },
      { time: "13:00 - 14:00", type: "Toddler" },
      { time: "10:00 - 11:30", type: "Artistic" },
      { time: "13:00 - 14:30", type: "Artistic" },
      { time: "14:30 - 16:00", type: "Artistic" },
      { time: "16:30 - 18:00", type: "Artistic" },
      { time: "18:00 - 19:30", type: "Artistic" },
    ],
  };
  return schedules[day]?.filter((session) => session.type === type) || [];
};