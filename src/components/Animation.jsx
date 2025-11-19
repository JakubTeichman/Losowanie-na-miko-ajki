import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Animation({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white relative">

      {/* MEGA WAŻNE — twarde ograniczenie */}
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-[320px] overflow-hidden p-2">

          {/* ❄️ Śnieg */}
          <div className="pointer-events-none absolute inset-0 animate-snow opacity-70"></div>

          {/* Napis */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center font-extrabold text-2xl text-white"
            style={{
              textShadow: "0px 0px 10px red",
              letterSpacing: "1px"
            }}
          >
            TRWA LOSOWANIE... 🎄
          </motion.h2>

          {/* 🎁 Prezent */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-24 h-24 bg-red-600 border-4 border-yellow-300 rounded-lg shadow-[0_0_25px_#ff0000] mx-auto mt-6 relative"
          >
            <div
              className="absolute inset-0
                before:content-[''] before:absolute before:w-3 before:h-full before:bg-yellow-300 before:left-1/2 before:-translate-x-1/2
                after:content-[''] after:absolute after:h-3 after:w-full after:bg-yellow-300 after:top-1/2 after:-translate-y-1/2"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
