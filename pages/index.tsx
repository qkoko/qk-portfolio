import { useState } from "react";
import { motion } from "framer-motion";
import LogoWelcome from "../components/LogoWelcome";
import Image from "next/image";
import Link from "next/link";

const homeVariants = {
  exit: {
    opacity: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};
const footerVariants = {
  initial: {
    y: "-180%",
  },
  animate: {
    y: "-10%",
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
  exit: {
    y: "-180%",
    transition: {
      duration: 1,
    },
  },
};

interface IIndexPage {
  isFirstMount: boolean;
}

export default function IndexPage(props: IIndexPage) {
  const [isHovered, setHovered] = useState<boolean>(false);

  return (
    <main className="font-bitter">
      {props.isFirstMount && <LogoWelcome />}
      <motion.section
        key={"hero-section"}
        variants={homeVariants}
        exit="exit"
        className="z-10 bg-white"
      >
        <div className="h-screen flex flex-col relative">
          <section className="h-[calc(100%-10rem)] ">
            <div className="h-full relative">
              <div className="grid grid-cols-12 h-full items-center">
                <div className="z-30 mb-20 ml-10 col-start-3 col-span-5  ">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={
                      props.isFirstMount
                        ? { delay: 3.1, duration: 0.3 }
                        : { delay: 0.1, duration: 0.3 }
                    }
                    className="text-6xl relative text-black"
                    onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                  >
                    <span className="text-blue_dark">H</span>i, my
                    <br />
                    name is <span className="font-semibold">Qays</span>
                    <span className="text-blue_dark">.</span>
                    <svg
                      className="absolute top-[140px] -left-10"
                      width="523"
                      height="65"
                      viewBox="0 0 523 65"
                      fill="none"
                    >
                      <motion.path
                        d="M1 3C1 3 153.5 50.5 240.5 54.5"
                        stroke="#213C50"
                        strokeWidth="6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={
                          props.isFirstMount
                            ? { delay: 3, duration: 0.2 }
                            : { delay: 0, duration: 0.2 }
                        }
                      />
                      <motion.path
                        d="M1 12C1 12 153.5 59.5 240.5 63.5"
                        stroke="#F9A620"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={
                          props.isFirstMount
                            ? { delay: 3, duration: 0.2 }
                            : { delay: 0, duration: 0.2 }
                        }
                      />
                      <motion.path
                        d="M240.5 63.5C327.5 67.5 438 -3.5 521.5 34"
                        stroke="#F9A620"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={
                          props.isFirstMount
                            ? { delay: 3.2, duration: 0.2 }
                            : { delay: 0.2, duration: 0.2 }
                        }
                      />
                      <motion.path
                        d="M240.5 54.5C327.5 58.5 438 -12.5 521.5 25"
                        stroke="#213C50"
                        strokeWidth="6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={
                          props.isFirstMount
                            ? { delay: 3.2, duration: 0.2 }
                            : { delay: 0.2, duration: 0.2 }
                        }
                      />
                    </svg>
                  </motion.p>

                  <motion.p
                    className="text-blue_light text-xl pt-28"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      props.isFirstMount
                        ? { delay: 3.6, duration: 0.2 }
                        : { delay: 0.6, duration: 0.2 }
                    }
                  >
                    I&apos;m an independant software developer from Rennes, France.
                  </motion.p>
                </div>
                <div className="z-50 relative col-start-9 col-span-5 mb-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      props.isFirstMount
                        ? { delay: 3.5, duration: 0.2 }
                        : { delay: 0.5, duration: 0.2 }
                    }
                    className="z-50"
                  >
                    <Image src={"/photo-home.png"} width="403" height="537" alt="photo"></Image>
                  </motion.div>
                  <motion.svg
                    className="-z-10 absolute -bottom-10 -left-20"
                    width="517"
                    height="177"
                    viewBox="0 0 517 177"
                    fill="none"
                  >
                    <motion.path
                      d="M1 12.5C111.5 44.5 220 60 298.5 58"
                      stroke="#F9A620"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={
                        props.isFirstMount
                          ? { delay: 3.5, duration: 0.2 }
                          : { delay: 0.5, duration: 0.2 }
                      }
                    />
                    <motion.path
                      d="M298.5 58C377 56 611 136.5 469 176"
                      stroke="#F9A620"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={
                        props.isFirstMount
                          ? { delay: 3.5, duration: 0.2 }
                          : { delay: 0.5, duration: 0.2 }
                      }
                    />
                    <motion.path
                      d="M1 3.5C111.5 35.5 220 51 298.5 49"
                      stroke="#213C50"
                      strokeWidth="6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={
                        props.isFirstMount
                          ? { delay: 3.7, duration: 0.2 }
                          : { delay: 0.7, duration: 0.2 }
                      }
                    />
                    <motion.path
                      d="M298.5 49C377 47 611 127.5 469 167"
                      stroke="#213C50"
                      strokeWidth="6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={
                        props.isFirstMount
                          ? { delay: 3.7, duration: 0.2 }
                          : { delay: 0.7, duration: 0.2 }
                      }
                    />
                  </motion.svg>
                </div>
              </div>
              <div className="relative  w-1/2 h-0">
                <motion.svg
                  className="absolute -bottom-28 right-[300px]"
                  width="38"
                  height="202"
                  viewBox="0 0 38 202"
                  fill="none"
                >
                  <motion.path
                    d="M37 12C1.5 17.5 3.5 28 3.5 45"
                    stroke="#F9A620"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.8 }}
                    transition={
                      props.isFirstMount ? { delay: 4, duration: 0.2 } : { delay: 1, duration: 0.2 }
                    }
                  />
                  <motion.path
                    d="M3.5 45C3.5 62 3.5 201.5 3.5 201.5"
                    stroke="#F9A620"
                    strokeOpacity="0.9"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.8 }}
                    transition={
                      props.isFirstMount
                        ? { delay: 4.2, duration: 0.2 }
                        : { delay: 1.2, duration: 0.2 }
                    }
                    strokeWidth="2"
                  />
                  <motion.path
                    d="M37 3C1.5 8.5 3.5 19 3.5 36"
                    stroke="#213C50"
                    strokeWidth="6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={
                      props.isFirstMount ? { delay: 4, duration: 0.2 } : { delay: 1, duration: 0.2 }
                    }
                  />
                  <motion.path
                    d="M3.5 36C3.5 53 3.5 192.5 3.5 192.5"
                    stroke="#213C50"
                    strokeWidth="6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={
                      props.isFirstMount
                        ? { delay: 4.2, duration: 0.2 }
                        : { delay: 1.2, duration: 0.2 }
                    }
                  />
                </motion.svg>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    props.isFirstMount
                      ? { delay: 4.2, duration: 0.4 }
                      : { delay: 1.2, duration: 0.4 }
                  }
                >
                  <motion.p
                    className="absolute z-50 bottom-[100px] right-[290px] text-blue_light text-xl tracking-wider hover:cursor-pointer hover:text-yellow"
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                  >
                    <Link href="/about">About</Link>
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </motion.section>
      <motion.footer
        variants={footerVariants}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 bottom-0 z-30"
      >
        <motion.div animate={{ y: isHovered ? -10 : 0 }} className="relative">
          <Image
            src="/stacked-waves-bg.png"
            width={1920}
            height={1024 * 3}
            alt="background"
            className="w-screen h-auto "
          />
        </motion.div>
      </motion.footer>
    </main>
  );
}
