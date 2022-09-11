import { ParallaxProvider } from "react-scroll-parallax";
import {MountainHello} from "./MountainHello";

export default function Test2() {
  return (
    <ParallaxProvider>
      <MountainHello />
      <div className="h-[1000px]"></div>
    </ParallaxProvider>
  );
}