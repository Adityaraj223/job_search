import React from "react";
import { useSpring, animated } from "react-spring";

const SignUp = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: "translateX(100px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div
      style={fadeIn}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-pink-900 opacity-80"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-md"
            style={{ backgroundImage: 'url("galaxy-background.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <animated.div
        style={slideIn}
        className="bg-white p-8 rounded-lg shadow-md w-96 backdrop-blur-md backdrop-filter bg-opacity-50 border border-gray-300"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-500"
              placeholder="Your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-500"
              placeholder="Your password"
            />
          </div>
          <animated.button
            type="submit"
            style={fadeIn}
            className="bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-800 focus:outline-none focus:ring focus:border-purple-900 transition duration-300"
          >
            Sign Up
          </animated.button>
        </form>
      </animated.div>
    </animated.div>
  );
};

export default SignUp;
