"use client"
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
const pages = ["home", "blog", "about", "recycle"];
function Navbar() {
  const [navbarOn, setnavbarOn] = useState(false);
  return (
    <nav className="w-full bg-black flex justify-center items-center">
      <LayoutGroup>
        {/* inner nav */}
        <motion.div
          layout
          className="flex flex-col gap-y-5 xl:flex-row min-w-[80%] max-w-[80%] justify-center xl:justify-between items-center"
        >
          {/* left side */}

  
          
          <div
            onClick={() => setnavbarOn((o) => !o)}
            className="flex flex-row items-center gap-x-3 cursor-pointer"
          >
            {/* logo */}
            <motion.img
              layout="position"
              src="/assets/ggc.svg"
              alt="ggc_logo"
              className="w-24 h-16"
            />
            <AnimatePresence mode="popLayout">
              {/* slogan and name */}
              {(navbarOn || window.innerWidth > 1280) && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  layout="position"
                  className="flex-col gap-y-2 xl:flex"
                >
                  <h1 className="font-accent text-3xl">
                    <span className="text-ggcPrimary">Green</span> Growth Cycle
                  </h1>
                  <p className="text-xl font-ggcPrimary">
                    Small Actions Leads to Big Changes
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* right side */}
          {/* link */}
          {(navbarOn || window.innerWidth > 1280) && (
            <motion.ul
              layout="position"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col xl:flex-row xl:w-auto items-center justify-center w-full gap-x-10 "
            >
              {/* add hidden to ul */}
              {pages.map((page, index) => (
                <li
                  key={index}
                  className="font-ggcPrimary hover:bg-ggcPrimaryLight
                   transition-all duration-200 cursor-pointer text-xl w-full xl:w-auto xl:p-auto py-5 xl:border-t border-none border-[#0000002c] text-center"
                >
                  {page.slice(0, 1).toUpperCase() + page.slice(1)}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </LayoutGroup>
    </nav>
  );
}

export default Navbar;
