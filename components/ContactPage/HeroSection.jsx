const jobs = [
  {
    title: "Frontend Developer",
    desc: "Senior developer of C#, .Net Core, Entity Framework, MsSQL. Be sure to have practical skills working with Docker and Git",
  },
  {
    title: "Backend Developer",
    desc: "The applicant must have experience working with highly loaded services",
  },
];

export default function HeroSection() {
  return (
    <div className="px-[5%] grid grid-cols-12">
      <div className="grid grid-cols-2 gap-6 lg:px-6 col-span-12 lg:col-span-6">
        {/* Job Section */}
        <div className="h-fit col-span-2 sm:col-span-1 flex flex-col gap-4 p-6 bg-[#0f0e0e] bg-opacity-70 rounded-lg">
          <h1 className="text-xl">Job Openings</h1>
          <hr className="h-[1px] bg-gray-600 border-0" />
          {jobs.map((ele, ind) => {
            return (
              <div className="flex flex-col gap-2" key={ind + "job"}>
                <h1>{ele.title}</h1>
                <p className="text-gray-400">{ele.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Email */}
        <div className="h-fit col-span-2 sm:col-span-1  flex flex-col gap-4 p-6 bg-[#0f0e0e] bg-opacity-70 rounded-lg">
          <h1 className="text-xl">Contact us</h1>
          <hr className="h-[1px] bg-gray-600 border-0" />

          <p className="text-gray-400">Email</p>
          <a
            style={{ fontFamily: "IBM Plex Mono, monospace" }}
            className="text-red-500 hover:underline"
          >
            moi@nexstweb.fi
          </a>
          <p
            style={{ fontFamily: "IBM Plex Mono, monospace" }}
            className="text-gray-400"
          >
            Phone
          </p>
          <a href="tel:+92 123 456 7890" className="hover:underline">
            +92 123 456 7890
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full col-span-12 lg:col-span-6 mx-auto flex flex-col gap-3 p-6 py-12 lg:px-12 my-6 lg:my-0 bg-[#0F0E0E] bg-opacity-70 rounded-2xl">
        <h1 className="text-3xl">Contact us!</h1>
        <p className="text-gray-400">
          Let`s discuss your project, or together we will find a solution to the
          most difficult tasks
        </p>
        <hr className="border-0 h-[1.5px] bg-gray-600" />

        <form className="flex flex-col gap-4">
          <input
            placeholder="Your name"
            className="w-full p-5 text-sm bg-[#222222] outline-none rounded-2xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-3">
            <input
              placeholder="Email"
              className="w-full p-5 text-sm bg-[#222222] outline-none rounded-2xl"
            />
            <input
              placeholder="Phone"
              className="w-full p-5 text-sm bg-[#222222] outline-none rounded-2xl"
            />
          </div>
          <input
            placeholder="Company name/VAT"
            className="w-full p-5 text-sm bg-[#222222] outline-none rounded-2xl"
          />
          <hr className="h-[1px] bg-gray-600 border-0" />
          <p className="text-gray-400">
            By clicking on the button below, you accept our privacy policy
          </p>

          <button className="p-4 font-semibold bg-red-600 rounded-xl">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
