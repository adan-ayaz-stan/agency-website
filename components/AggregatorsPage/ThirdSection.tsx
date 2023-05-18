export default function ThirdSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center">
      {/* STYLED DIV FOR BACKGROUND */}
      <div className="absolute top-[45%] right-[15%] h-[85vh] w-[85vh] z-[-10] rounded-full bg-white opacity-[0.05] blur-[10em]" />

      {/*  */}
      <div className="flex flex-col gap-6">
        <h1 className="text-[3em] text-center">
          We solve{" "}
          <span
            style={{ fontFamily: "IBM Plex Sans" }}
            className="text-[#ff3b22] font-bold"
          >
            {" "}
            any tasks{" "}
          </span>
          with no limits
        </h1>

        <p className="text-[#afafaf] text-center mb-12">
          We have experience in solving the problems of lack of software in a
          variety of niches
        </p>

        <div className="lg:w-8/12 flex flex-row gap-2 flex-wrap items-center justify-center mx-auto">
          {[
            "Air tickets",
            "Hotels",
            "Construction equipment",
            "Apartments",
            "Car rental",
            "Tutors",
            "Medicine",
            "Boutiques",
            "Restaurants",
            "Freelance",
            "Clothing Stores",
            "Perfumery",
            "Technic",
            "Any other",
          ].map((ele, ind) => {
            return (
              <p
                key={"aggregators-third-section-" + ind}
                className="text-sm p-5 px-8 rounded-full bg-[#222]"
              >
                {ele}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
