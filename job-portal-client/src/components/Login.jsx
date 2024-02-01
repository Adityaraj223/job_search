import React from "react";
import { useSpring, animated } from "react-spring";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import add from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();

import { getAuth } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div
      style={fadeIn}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: 'url("your-background-image.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-900 opacity-80"></div>
      <animated.div
        style={slideIn}
        className="bg-white p-8 rounded-lg shadow-md w-96 backdrop-blur-md backdrop-filter bg-opacity-50"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Your password"
            />
          </div>
          <animated.button
            type="submit"
            style={fadeIn}
            className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-900 transition duration-300"
            onClick={handleLogin}
          >
            Log In
          </animated.button>
        </form>
      </animated.div>
    </animated.div>
  );
};

export default Login;
