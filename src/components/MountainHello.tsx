//import { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export const MountainHello = () => {
  // const start = 0;
  // const end = 500;
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   console.log(position);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const background: BannerLayer = {
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 50],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl md:text-8xl text-white font-thin">
          Hello World!
        </h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="aspect-[1/1] md:aspect-[2/1] bg-gray-900"
    />
  );
};


// .inset {
//   position: absolute;
//   inset: 0;
// }
// .white {
//   color: white;
// }
// .gray {
//   color: #446;
// }

// .full {
//   height: 100vh;
// }

// .center {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .gradient {
//   background: linear-gradient(rgba(14, 62, 151, 0.5) 50%, black);
// }