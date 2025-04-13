import React, { useState, useEffect, useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [motivationalQuote, setMotivationalQuote] = useState("");

  const motivationalQuotes = useMemo(
    () => [
      "Belajar adalah kunci untuk membuka pintu masa depan.",
      "Kegagalan hanya terjadi ketika kita menyerah.",
      "Pendidikan adalah senjata paling ampuh untuk mengubah dunia.",
      "Ilmu adalah cahaya yang tidak pernah redup.",
      "Belajar tidak mengenal kata terlambat.",
      "Kesuksesan dimulai dengan langkah pertama belajar.",
      "Pengetahuan adalah investasi terbaik yang bisa kamu berikan.",
      "Belajar hari ini, memimpin esok hari.",
      "Masa depan cerah dimulai dari belajar yang tekun.",
      "Teruslah belajar karena ilmu tidak pernah habis.",
    ],
    []
  );

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }

    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setMotivationalQuote(motivationalQuotes[randomIndex]);

    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, motivationalQuotes]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          <motion.div className="flex flex-col items-center">
            <motion.div className="flex space-x-3 mb-10">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    darkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } mb-6`}
            >
              Memuat...
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-md text-center px-4 italic text-sm"
            >
              "{motivationalQuote}"
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
