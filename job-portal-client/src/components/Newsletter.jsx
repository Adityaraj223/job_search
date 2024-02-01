import React from "react";
import { FaEnvelopeOpen, FaRocket } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div>
      {/* First Newsletter Section */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpen />
          Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          lopefijbxun n hisvbuvb ibvdunv sdfggr gregbrg gbhtb. ftgtrvg
        </p>

        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="maen@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue-700 rounded-sm text-white cursor-pointer"
          />
        </div>
      </div>

      {/* Second Newsletter Section */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get notice faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          lopefijbxun n hisvbuvb ibvdunv sdfggr gregbrg gbhtb. ftgtrvg
        </p>

        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue-700 rounded-sm text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
