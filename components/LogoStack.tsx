import { motion } from "framer-motion";
import Image from "next/image";

type stackSvgMapType = {
  [key: string]: string;
};

export const STACK_SVG_MAP: stackSvgMapType = {
  Python: "python.svg",
  Typescript: "typescript.svg",
  Django: "django.svg",
  Reactjs: "reactjs.svg",
  PostgreSQL: "postgresql.svg",
  Elasticsearch: "elasticsearch.svg",
  Material: "material.svg",
  RabbitMQ: "rabbitmq.svg",
  Docker: "docker.svg",
  C: "c.svg",
  Cpp: "c++.svg",
  Matlab: "matlab.svg",
};

type variantType = {
  initial: any;
  animate: any;
};

interface IProps {
  source: string;
  name: string;
  alt: string;
  width: number;
  height: number;
  variants: variantType;
  withName: boolean;
}
export default function (props: IProps) {
  return (
    <motion.div
      variants={props.variants}
      initial="initial"
      animate="animate"
      className={`flex flex-col space-y-4`}
    >
      <Image src={`/${props.source}`} width={props.width} height={props.height} alt={props.alt} />
      {props.withName ? <p>{props.name}</p> : null}
    </motion.div>
  );
}
