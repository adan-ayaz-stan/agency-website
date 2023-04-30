export default function CooperateSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-6 py-12">
      <h1 className="text-4xl">Let&apos;s cooperate!</h1>
      <p className="w-full md:w-1/3 text-center">
        We are here to help you solve problems of any complexity related to the
        development of design, complex software, website or mobile application
      </p>
      <div
        className="flex flex-col items-center md:flex-row gap-2 md:gap-3 text-xl"
        style={{ fontFamily: "IBM Plex Mono, monospace" }}
      >
        <a
          href="mailto:xyz@nestweb.fi"
          className="text-red-500 hover:underline"
        >
          moi@nexstweb.fai
        </a>
        <span>♦</span>
        <a href="tel:+92 123 456 7890" className="hover:underline">
          +92 123 456 7890
        </a>
      </div>
    </div>
  );
}
