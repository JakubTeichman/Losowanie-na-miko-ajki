import React from "react";
import { motion } from "framer-motion";

export default function Result({ person, target }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center p-10 text-center text-white relative"
    >
      {/* NAGŁÓWEK */}
      <h2
        className="text-3xl font-bold mb-6 text-white"
        style={{
          textShadow: "0 0 12px red, 0 0 22px red",
          padding: "6px 12px",
          borderRadius: "12px",
        }}
      >
        Twój podopieczny to:
      </h2>

      {/* DUŻE, CZYSTE IMIĘ — bez efektów */}
      <div className="mb-10 font-extrabold"
        style={{
          fontSize: "4rem",
          color: "white",
          padding: "12px 26px",
        }}
      >
        {target}
      </div>

      {/* PRZYCISK */}
      <a
        href="https://www.facebook.com/groups/839970941463193?locale=pl_PL"
        target="_blank"
        className="
          mt-4 px-8 py-3 rounded-2xl text-white font-semibold text-xl 
          transition-all shadow-[0_0_12px_rgba(255,50,50,0.7)]
          hover:shadow-[0_0_18px_rgba(255,80,80,0.9)]
        "
        style={{
          background: "rgb(185, 28, 28)", // klasyczna świąteczna czerwień
        }}
      >
        Przejdź do grupy na Facebooku
      </a>
    </motion.div>
  );
}
