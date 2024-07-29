"use client";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const pages = ["home", "blog", "recycle", "about"];
function Navbar() {
  const [navbarOn, setnavbarOn] = useState(false);
  const [windowWidth, setwindowWidth] = useState<number>(2144);
  useEffect(() => {
    setwindowWidth(window.innerWidth);
  }, [windowWidth]);
  const pathname = usePathname();
  return (
    <>
      {navbarOn && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="fixed inset-0 z-10 bg-white"
        ></motion.div>
      )}
      <LayoutGroup>
        {/* inner nav */}
        <motion.nav
          layout
          className="sticky top-0 z-20 flex w-full flex-col items-center justify-center gap-y-5 bg-white py-2 xl:flex-row xl:justify-between"
        >
          {/* left side */}
          <div className="flex w-full items-center justify-between gap-x-3 xl:w-auto xl:justify-normal">
            <div className="flex w-full flex-row items-center gap-x-3 xl:w-auto">
              {/* logo */}
              <a href="/">
                <motion.img
                  layout="position"
                  src="/assets/icons/ggc.svg"
                  alt="ggc_logo"
                  className="h-16 w-24"
                />
              </a>
              <AnimatePresence mode="popLayout">
                {/* slogan and name */}
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
                  {windowWidth > 1280 && (
                    <p className="font-primary text-xl">
                      Small Actions Can Lead to Big Changes
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* hamburger */}
            {windowWidth <= 1280 && (
              <Bars3Icon
                className="size-8 cursor-pointer"
                onClick={() => setnavbarOn((o) => !o)}
              />
            )}
          </div>
          {/* right side */}
          {/* link */}
          {(navbarOn || windowWidth > 1280) && (
            <motion.ul
              layout="position"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-20 -z-10 flex w-full flex-col items-center justify-start gap-x-10 bg-white xl:static xl:w-auto xl:flex-row"
            >
              {/* add hidden to ul */}
              {pages.map((page, index) => (
                <li key={index} className="flex w-full items-center">
                  <a
                    className={`${(pathname == `/${page}` || (pathname == "/" && page == "home")) && "text-primary"} font-primary xl:p-auto w-full cursor-pointer border-none border-[#0000002c] p-5 text-center text-xl transition-all duration-200 xl:w-auto xl:border-t`}
                    href={`/${page}`}
                  >
                    {page.slice(0, 1).toUpperCase() + page.slice(1)}
                  </a>
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
