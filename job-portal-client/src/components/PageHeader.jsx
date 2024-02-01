import React from "react";
import { useSpring, animated } from "react-spring";

const PageHeader = ({ title, path }) => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={animationProps}
      className="py-24 mt-3 bg-gradient-to-r from-purple-800 to-indigo-800 rounded-tl-3xl rounded-br-3xl flex flex-col items-center justify-center text-white font-bold"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h2>
        <p className="text-sm text-center">
          {" "}
          <a href="/">Home</a> / {path}
        </p>
      </div>
    </animated.div>
  );
};

export default PageHeader;
