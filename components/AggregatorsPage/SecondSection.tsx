export default function SecondSection() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:w-9/12 gap-8">
        <h1 className="text-[2em] lg:text-[3em] text-center">
          We can do for you
        </h1>
        <p className="text-center text-[#afafaf]">
          We are developing web apps with a complex structure, listing and
          filtering
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 py-3 mt-6 lg:mt-20 gap-6">
          {[
            {
              title: "Aggregators",
              desc: "We are developing web apps with a complex structure, listing and filtering",
            },
            {
              title: "Booking",
              desc: "Creation of complex projects and dedicated booking systems of any complexity",
            },
            {
              title: "Startups",
              desc: "Creating projects for startups that require booking, listing and filtering systems",
            },
          ].map((ele, ind) => {
            return (
              <div
                key={"aggregators-second-sec-div-" + ind}
                className="px-8 py-8 bg-[#222] rounded-2xl"
              >
                <h1 className="text-2xl mb-2">{ele.title}</h1>
                <p className="text-[#afafaf]">{ele.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
