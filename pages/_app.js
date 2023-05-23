import { RecoilRoot } from "recoil";
import { ParallaxProvider } from "react-scroll-parallax";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { ScrollerMotion } from "scroller-motion";

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
        <ScrollerMotion>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </ScrollerMotion>
      </RecoilRoot>
    </>
  );
}
