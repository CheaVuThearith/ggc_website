"use client";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState, useEffect } from "react";

const pages = ["home", "blog", "about", "recycle"];
function Navbar() {
  const [navbarOn, setnavbarOn] = useState(false);
  const [windowWidth, setwindowWidth] = useState<number>(0);
  useEffect(() => {
    setwindowWidth(window.innerWidth);
  }, [windowWidth]); // console.log(window.innerWidth);
  // TODO: figure out the background color of navbar
  return (
    <>
      {navbarOn && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="absolute inset-0 z-10 bg-white"
        ></motion.div>
      )}
      <LayoutGroup>
        {/* inner nav */}
        <motion.nav
          layout
          className="sticky top-0 py-2 z-20 flex w-full flex-col items-center justify-center gap-y-5 bg-white xl:flex-row xl:justify-between"
        >
          {/* left side */}
          <div
            className="flex cursor-pointer flex-row items-center gap-x-3"
            onClick={() => setnavbarOn((o) => !o)}
          >
            {/* logo */}
            <motion.img
              layout="position"
              src="/assets/ggc.svg"
              alt="ggc_logo"
              className="h-16 w-24"
            />
            <AnimatePresence mode="popLayout">
              {/* slogan and name */}
              {(navbarOn || windowWidth > 1280) && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  layout="position"
                  className="flex-col gap-y-2 xl:flex"
                >
                  <h1 className="font-accent text-3xl">
                    <span className="text-primary">Green</span> Growth Cycle
                  </h1>
                  <p className="font-primary text-xl">
                    Small Actions Can Lead to Big Changes
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* right side */}
          {/* link */}
          {(navbarOn || windowWidth > 1280) && (
            <motion.ul
              layout="position"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-20 -z-10 flex flex-col items-start justify-start gap-x-10 bg-white xl:static xl:w-auto xl:flex-row"
            >
              {/* add hidden to ul */}
              {pages.map((page, index) => (
                <li
                  key={index}
                  className="font-primary xl:p-auto w-full cursor-pointer border-none border-[#0000002c] py-5 text-center text-xl transition-all duration-200 xl:w-auto xl:border-t"
                >
                  {page.slice(0, 1).toUpperCase() + page.slice(1)}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.nav>
      </LayoutGroup>
    </>
  );
}

export default Navbar;
