'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "@fontsource/zen-old-mincho/400.css";
import "@fontsource/zen-old-mincho/700.css";

export default function RestaurantMenu() {
  const steps = [
    {
      title: 'Entrées',
      items: [
        'Nems aux légumes',
        'Gyoza au poulet',
        'Salade Wakame',
      ],
    },
    {
      title: 'Plats',
      items: [
        'Pad Thaï crevettes',
        'Curry rouge de bœuf',
        'Riz sauté aux légumes',
      ],
    },
    {
      title: 'Desserts',
      items: [
        'Mochi glacé',
        'Perles de coco',
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const changePage = (newIndex: number) => {
    setDirection(newIndex > currentPage ? 1 : -1);
    setCurrentPage(newIndex);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06111D]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/washi-paper.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dégradé premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08131f]/60 via-[#06111D]/40 to-black/70" />

      <div
  className="absolute top-0 left-0 w-[500px] h-[500px] z-50"
  style={{
    backgroundImage: "url('/sakura-top-left.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }}
/>

      {/* Sakura bas droite */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] z-50"
        style={{
          backgroundImage: "url('/sakura-bottom-right.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />

      {/* Halo central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 [perspective:1500px]">
        <div className="max-w-xl w-full">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  rotateY: dir > 0 ? 90 : -90,
                  opacity: 0,
                }),
                center: {
                  rotateY: 0,
                  opacity: 1,
                },
                exit: (dir: number) => ({
                  rotateY: dir < 0 ? 90 : -90,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
              className="
                relative
                min-h-[650px]
                bg-[#F8F1E3]
                border
                border-[#D7C6A0]
                shadow-[0_35px_80px_rgba(0,0,0,0.45)]
                px-14
                py-12
              "
            >
              {/* Sceau japonais */}
              <div className="absolute top-8 right-8">
                <div className="flex items-center justify-center w-12 h-12 bg-[#9F1D20] text-white text-xs font-bold tracking-widest">
                  印
                </div>
              </div>

              {/* Décoration haut */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-px bg-[#D7C6A0]" />

              {/* Header */}
              <header className="pb-10 border-b border-[#D7C6A0]">
                <div className="text-center">
                  <p className="text-xs tracking-[0.6em] text-stone-500 uppercase mb-4">
                    Menu
                  </p>

                  <h1
                    className="
                      text-5xl
                      uppercase
                      tracking-[0.18em]
                      text-[#1A1A1A]
                    "
                    style={{
                      fontFamily: 'Zen Old Mincho, serif',
                    }}
                  >
                    {steps[currentPage].title}
                  </h1>
                </div>
              </header>

              {/* Contenu */}
              <div className="flex-1 flex items-center justify-center py-16">
                <ul className="space-y-8 text-center">
                  {steps[currentPage].items.map((item) => (
                    <li
                      key={item}
                      className="
                        text-2xl
                        text-stone-800
                        tracking-wide
                      "
                      style={{
                        fontFamily: 'Zen Old Mincho, serif',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <footer className="border-t border-[#D7C6A0] pt-8">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 0}
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-xs
                      text-stone-500
                      transition
                      hover:text-stone-900
                      disabled:opacity-20
                    "
                  >
                    Précédent
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-px bg-[#D7C6A0]" />

                    <span className="text-xs tracking-[0.3em] text-stone-500">
                      {currentPage + 1} / {steps.length}
                    </span>

                    <div className="w-10 h-px bg-[#D7C6A0]" />
                  </div>

                  <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === steps.length - 1}
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-xs
                      text-stone-500
                      transition
                      hover:text-stone-900
                      disabled:opacity-20
                    "
                  >
                    Suivant
                  </button>
                </div>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}