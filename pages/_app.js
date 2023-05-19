import { RecoilRoot } from "recoil";
import { ParallaxProvider } from "react-scroll-parallax";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "@/styles/globals.css";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const nextFontMona = localFont({
  src: "../assets/fonts/Mona Sans/Mona-Sans-SemiBold.ttf",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <style jsx global>
          {`
            h1 {
              font-family: ${nextFontMona.style.fontFamily};
            }
          `}
        </style>
        <AnimatedCursor
          innerScale={4}
          innerSize={0}
          outerSize={12}
          outerScale={2}
          outerAlpha={4}
          color={"255, 59, 34"}
        />
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </RecoilRoot>
    </>
  );
}
