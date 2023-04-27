import dynamic from "next/dynamic";
import "@/styles/globals.css";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <AnimatedCursor
        innerScale={4}
        innerSize={0}
        outerSize={12}
        outerScale={2}
        outerAlpha={4}
      />
      <Component {...pageProps} />
    </>
  );
}
