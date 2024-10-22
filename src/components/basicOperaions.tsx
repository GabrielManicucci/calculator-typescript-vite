import { Divide, Equal, Minus, Plus, X } from "lucide-react";

type OperationsType = {
  operation: string;
  icon: JSX.Element;
  className?: string;
};

const Operations: OperationsType[] = [
  {
    operation: "+",
    icon: <Plus className="text-orange-400" size={48} />,
  },
  {
    operation: "-",
    icon: <Minus className="text-orange-400" size={52} />,
  },
  {
    operation: "*",
    icon: <X className="text-orange-400" size={52} />,
  },
  {
    operation: "/",
    icon: <Divide className="text-orange-400" size={52} />,
  },
  {
    operation: "=",
    icon: <Equal className="" size={52} />,
    className:
      "p-5 flex items-baseline justify-center hover:bg-amber-100 text-white hover:text-zinc-950 transition-all rounded-2xl",
  },
];

type BasicOperationsProps = {
  handleMathematicalOperation: (operation: string) => void;
};

export default function BasicOperations({
  handleMathematicalOperation,
}: BasicOperationsProps) {
  return (
    <div className="flex flex-col justify-between ml-2">
      {Operations.map(({ icon, className, operation }) => (
        <div
          key={operation}
          className={
            className
              ? className
              : "p-5 flex items-baseline justify-center hover:bg-amber-100 transition-all rounded-2xl"
          }
          onClick={() => handleMathematicalOperation(operation)}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}
