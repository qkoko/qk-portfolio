interface IProps {
  name: string;
  onClick: (name: string) => void;
  isActive: boolean;
}

export default function WorkplaceElement(props: IProps) {
  return (
    <li
      onClick={() => props.onClick(props.name)}
      className={`transition-all pl-4 py-6 border-l-2 hover:bg-blue_light hover:border-yellow hover:text-yellow hover:cursor-pointer ${
        props.isActive ? "text-yellow" : ""
      }`}
    >
      {props.name}
    </li>
  );
}
