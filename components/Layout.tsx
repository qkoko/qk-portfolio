import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useState, useEffect, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

// commodity function to get a return type
function useWorkplaceStore() {
  const store = useState<string>("");
  return store;
}

type workplaceStoreType = ReturnType<typeof useWorkplaceStore>;

export const WorkplaceContext = createContext<workplaceStoreType | null>(null);
export const useWorkplaceContext = () => useContext(WorkplaceContext)!;

interface IProps {
  children?: ReactNode;
}

export default function Layout(props: IProps) {
  const store = useState<string>("Polyconseil");
  return (
    <WorkplaceContext.Provider value={store}>
      <Header />
      <div className="flex-1">{props.children}</div>
    </WorkplaceContext.Provider>
  );
}

const headerVariants = {
  animate: {
    transition: { duration: 2, type: "linear" },
  },
  exit: {
    transition: { duration: 1, type: "linear" },
  },
};
export function Header() {
  const { asPath } = useRouter();
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-blue_dark");
  const [textColor, setTextColor] = useState<string>("text-blue_dark");
  useEffect(() => {
    if (asPath === "/") {
      setBackgroundColor("bg-white");
      setTextColor("text-blue_dark");
    } else if (asPath === "/about") {
      setBackgroundColor("bg-blue_dark");
      setTextColor("text-white");
    }
  }, [asPath]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.header
        className={`relative z-40 ${backgroundColor} font-bitter`}
        key={asPath}
        variants={headerVariants}
        animate="animate"
        exit="exit"
        initial="initial"
      >
        <motion.div
          className={`container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row `}
        >
          <Link href="/">
            <div className="mb-4 md:mb-0">
              {asPath === "/" ? (
                <Image src="/logo-header.svg" width={64} height={64} alt="logo" />
              ) : (
                <Image src="/logo-header-inverted.svg" width={64} height={64} alt="logo" />
              )}
            </div>
          </Link>
          <nav
            className={`flex flex-wrap items-center justify-center space-x-4 md:ml-auto ${textColor}`}
          >
            <Link href="/">
              <div className={`hover:text-yellow ${asPath === "/" ? "font-bold" : "font-dark"}`}>
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className={asPath === "/about" ? "text-white font-bold " : "hover:text-yellow"}>
                About
              </div>
            </Link>
            <Link className="hover:text-yellow" href="mailto: kocht.qays@gmail.com">
              Contact
            </Link>
          </nav>
        </motion.div>
      </motion.header>
    </AnimatePresence>
  );
}
