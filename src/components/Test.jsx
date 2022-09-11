import { ParallaxProvider, Parallax } from "react-scroll-parallax";
export default function Test() {
  function Component() {
    return (
      <Parallax rotate={[0, 360]}  className="w-12 h-12 bg-primary">

      </Parallax>
    );
  }

  return (
    <ParallaxProvider>
      <div>
        <div className="h-[600px] bg-red-300"></div>
        <div className="h-[1200px] bg-blue-300 flex justify-center">
          <Component />
        </div>
      </div>
    </ParallaxProvider>
  );
}
