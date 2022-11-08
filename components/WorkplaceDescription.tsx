import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type WorkDescription = {
  [key: string]: {
    description: Array<string>;
    jobTitle: string;
    startDate: string;
    endDate: string;
    stack: Array<string>;
  };
};

export const DESCRIPTIONS_DICT: WorkDescription = {
  Polyconseil: {
    description: [
      "Frontend and backend contributions for a Smart Mobility Platform web application using Django and React.js.",
      "Functional and technical specifications in collaboration with multiple Product Owners.",
      "Technical and process oriented contributions for our in-house tools.",
    ],
    jobTitle: "Full stack developer",
    startDate: "November 2019",
    endDate: "Present",
    stack: [
      "Python",
      "Django",
      "Typescript",
      "Reactjs",
      "Elasticsearch",
      "PostgreSQL",
      "RabbitMQ",
      "Material",
      "Docker",
    ],
  },
  Valeo: {
    description: [
      "Deliver a functional software while respecting automotive norms and delivery schedules.",
      "Develop and improve Python in-house tools.",
      "Test and validate the software using those tools.",
    ],
    jobTitle: "Leader function",
    startDate: "November 2015",
    endDate: "June 2017",
    stack: ["Python", "C", "Matlab"],
  },
  Navya: {
    description: [
      "Introduction of new process and in-house tools to help the whole R&D department gain quality through the software development life cycle.",
      "Build & release engineering and management (introduced continuous integration and release management process).",
      "Develop tools in Python to support those new process.",
    ],
    jobTitle: "Software QA Manager",
    startDate: "June 2017",
    endDate: "November 2019",
    stack: ["Python", "Cpp", "Docker"],
  },
};

interface IProps {
  selectedElement: string;
}

export default function WorkplaceDescription(props: IProps) {
  const workplace = DESCRIPTIONS_DICT[props.selectedElement];
  const [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="p-4 flex flex-col gap-4">
        <p className=" font-sans text-xl">
          {workplace.jobTitle} @{" "}
          <span className="text-yellow font-bold">{props.selectedElement}</span>
        </p>
        <p className=" font-monospace text-xs">
          {workplace.startDate} -- {workplace.endDate}
        </p>
        <ul className="font-sans ">
          {workplace.description.map((item) => (
            <div key={item} className="flex flex-row gap-4 pt-2 pb-2 w-full">
              <Image className="min-w-[4%]" src={"/arrow.svg"} width="22" height="27" alt="arrow" />
              <li className="relative before:absolute before:content-arrowIcon before:left-0 pl-10">
                {item}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </Transition>
  );
}
