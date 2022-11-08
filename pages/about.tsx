import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useWorkplaceContext } from "../components/Layout";
import Image from "next/image";
import Workplaces from "../components/Workplaces";
import { useState, useEffect } from "react";
import LogoStack, { STACK_SVG_MAP } from "../components/LogoStack";
import { DESCRIPTIONS_DICT } from "../components/WorkplaceDescription";

export default function About() {
  const [entered, setEntered] = useState<boolean>(false);
  const [selectedElement, _] = useWorkplaceContext();
  const [currentStack, setCurrentStack] = useState<Array<string>>([""]);

  useEffect(() => {
    setCurrentStack(DESCRIPTIONS_DICT[selectedElement].stack);
  }, [selectedElement]);

  const aboutVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const computerLinesVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: entered === true ? 0 : 1,
      transition: { delay: entered === true ? 0.2 : 4, duration: 0.4 },
    },
  };

  return (
    <main className="relative flex flex-col font-bitter bg-blue_dark">
      <motion.section
        className="relative bg-blue_dark text-white font-bitter grid lg:grid-cols-2 grid-cols-1 w-full justify-items-center items-center gap-x-20 gap-y-40 lg:gap-y-0 px-20 h-[400vh] lg:h-[180vh] "
        variants={aboutVariants}
        exit="exit"
      >
        <div className="relative">
          <motion.div
            onAnimationStart={() => document.body.classList.remove("overflow-hidden")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            <Image src={"/about-nature.svg"} width={493} height={221} alt="nature-image" />
          </motion.div>

          <svg
            width="801"
            height="386"
            viewBox="0 0 801 386"
            className="absolute -top-10 -right-40"
            fill="none"
          >
            <motion.path
              d="M2 376.03C2 376.03 62.764 353.319 97.4822 331.125C122.309 315.254 134.352 303.602 157.04 284.802"
              stroke="#F6F0ED"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5, duration: 0.15 }}
            />
            <motion.path
              d="M356.513 74.9298C392.098 48.6392 405.672 34.279 451.995 13.9536C498.318 -6.37181 555.986 -0.226858 622.634 48.9322C707.454 111.494 766.571 153.476 798 254.077"
              stroke="#F6F0ED"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.65, duration: 0.15 }}
            />
            <motion.path
              d="M2 384.572C2 384.572 62.764 361.861 97.4822 339.667C122.309 323.796 134.352 312.144 157.04 293.344M356.513 83.4722C392.098 57.1816 405.672 42.8213 451.995 22.4959C498.318 2.17055 555.986 8.3155 622.634 57.4746C707.454 120.037 766.571 162.018 798 262.62"
              stroke="#F9A620"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            />
          </svg>
        </div>
        <motion.div
          className="w-full px-14 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.3 }}
        >
          <p className="text-6xl">
            <span className="text-yellow text-3xl">{"<"}</span>About me
            <span className="text-yellow text-3xl"> &nbsp;{"/>"}</span>
          </p>
          <motion.div className="pt-10">
            <p className="font-sans">
              Hello! My name is Qays Kocht
              <br />
              I started my developer journey in 2017 with Python, mostly building tools and
              automatizing tasks.
              <br />I then joined the web industry and have been enjoying building stuff for the web
              since that time.
              <br />I like working with forward-thinking people to design and build interactive,
              accessible web applications.
              <br />
              Here are a few technologies I've been working with:
            </p>
            <motion.div className="grid grid-cols-5 pt-8 w-[80%] place-items-center font-sans font-light opacity-90">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3 }}
              >
                <Image src={"/typescript.svg"} width={50} height={50} alt="typescript" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.1 }}
              >
                <Image src={"/python.svg"} width={50} height={50} alt="python" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.2 }}
              >
                <Image src={"/reactjs.svg"} width={50} height={50} alt="reactjs" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.3 }}
              >
                <Image src={"/django.svg"} width={50} height={50} alt="django" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.4 }}
              >
                <Image src={"/postgresql.svg"} width={50} height={50} alt="postgreSQL" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.1 }}
              >
                <p>Typescript</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.2 }}
              >
                <p>Python</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.3 }}
              >
                <p>React.js</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.4 }}
              >
                <p>Django</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 3.3 }}
              >
                <p>postgreSQL</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="relative place-self-start h-full w-full pt-[40%]">
          <div className="h-[80%] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 2 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl">
                <span className="text-yellow text-3xl">{"<"}</span>Where I've worked
                <span className="text-yellow text-3xl"> &nbsp;{"/>"}</span>
              </p>
              <Workplaces />
            </motion.div>
          </div>
        </div>
        <div className="relative self-start h-full w-full">
          {/* https://www.framer.com/docs/scroll-animations/#scroll-triggered-animations 
           Note: There's currently a bug in Chrome where IntersectionObserver doesn't work correctly with SVG elements.
           => need for InView */}
          <InView
            as="div"
            onChange={(inView, entry) => {
              if (inView === true) {
                setEntered(true);
              }
            }}
            className="absolute top-[20%] left-[30%]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image src={"/about-computer.svg"} width={350} height={313} alt="computer-image" />
            </motion.div>
            <svg
              width="712"
              height="859"
              viewBox="0 0 674 424"
              fill="none"
              className="absolute -top-[485px] -left-[252px] overflow-visible"
            >
              <motion.path
                d="M236.5 296.5C211 287.5 152 262 120 232C80 194.5 49.7809 169.658 26.5 116.5C9.56663 77.8354 8.33333 40.5 3 11"
                stroke="#F9A620"
                strokeOpacity="0.9"
                strokeWidth="2"
                variants={computerLinesVariants}
                initial="initial"
                animate="animate"
              />
              <motion.path
                d="M570.5 426.5C570.5 426.5 666.793 466.009 713 509C755.974 548.984 773.532 567.012 787 616C803.485 675.964 796.771 720.96 763.5 773.5C732.333 812 700 844.333 661.5 875.5C623 906.667 543.495 939.345 460.5 948C346.127 959.927 239.394 973.748 167.5 884C125.028 830.981 105.436 780.7 122 714C136.17 656.938 168.437 631.241 215.5 596C269.342 555.683 312.322 540.885 379.5 537.5M442 537.5C442 537.5 564.729 536.889 620 574.5C704.5 632 718 677 718 677"
                stroke="#F9A620"
                strokeOpacity="0.9"
                strokeWidth="2"
                animate={entered === true ? { pathLength: 1 } : { pathLength: 0 }}
                initial={{ pathLength: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              />
              <motion.path
                d="M236.5 287C211 278 152 252.5 120 222.5C80 185 49.7809 160.158 26.5 107C9.56663 68.3354 8.33333 31 3 1.5"
                stroke="#F6F0ED"
                strokeWidth="6"
                variants={computerLinesVariants}
                initial="initial"
                animate="animate"
              />
              <motion.path
                d="M570.5 417C570.5 417 666.793 456.509 713 499.5C755.974 539.484 773.532 557.512 787 606.5C803.485 666.464 796.771 711.46 763.5 764C732.333 802.5 700 834.833 661.5 866C623 897.167 543.495 929.845 460.5 938.5C346.127 950.427 239.394 964.248 167.5 874.5C125.028 821.481 105.436 771.2 122 704.5C136.17 647.438 168.437 621.741 215.5 586.5C269.342 546.183 313.822 531.385 381 528M445 528C445 528 564.729 527.389 620 565C704.5 622.5 718 667.5 718 667.5"
                stroke="#F6F0ED"
                strokeWidth="6"
                animate={entered === true ? { pathLength: 1 } : { pathLength: 0 }}
                initial={{ pathLength: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              />
            </svg>
            <motion.div
              className="grid grid-cols-3 pt-20 gap-8 ml-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4, duration: 0.3 }}
            >
              {currentStack.map((stack) => (
                <LogoStack
                  name={stack}
                  key={stack}
                  source={STACK_SVG_MAP[stack]}
                  width={50}
                  height={90}
                  alt={stack}
                  variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                  }}
                  withName={false}
                />
              ))}
            </motion.div>
          </InView>
        </div>
      </motion.section>
      <div className="flex place-content-between  px-20 pb-5">
        <p className="text-white font-bold opacity-50 text-xl">kocht.qays@gmail.com</p>
        <p className="text-white opacity-50">Design & Dev by Qays Kocht.</p>
      </div>
    </main>
  );
}
