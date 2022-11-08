import WorkplaceElement from "./WorkListElement";
import WorkplaceDescription from "./WorkplaceDescription";
import { useWorkplaceContext } from "./Layout";

export default function Workplaces() {
  const [selectedElement, setSelectedElement] = useWorkplaceContext();

  const onClick = (name: string) => {
    setSelectedElement(name);
  };

  return (
    <div className="relative pt-10 font-sans">
      <ul className="w-[20%]">
        <WorkplaceElement
          name={"Polyconseil"}
          onClick={onClick}
          isActive={selectedElement === "Polyconseil"}
        />
        <WorkplaceElement name={"Navya"} onClick={onClick} isActive={selectedElement === "Navya"} />
        <WorkplaceElement name={"Valeo"} onClick={onClick} isActive={selectedElement === "Valeo"} />
      </ul>
      <div className="h-full absolute top-11 left-[25%]">
        <WorkplaceDescription selectedElement={selectedElement} />
      </div>
    </div>
  );
}
