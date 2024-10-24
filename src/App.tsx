import "./App.css";
import { useState } from "react";
import BasicOperations from "./components/basicOperaions";
import Digits from "./components/digits";

function App() {
  const [primaryNumber, setPrimaryNumber] = useState<number>();
  const [secondaryNumber, setSecondaryNumber] = useState<number>();
  const [mathematicalOperation, setMathematicalOperation] = useState<string>();
  const [resulted, setResult] = useState<number>();

  const clearValue = () => {
    setPrimaryNumber(undefined);
    setSecondaryNumber(undefined);
    setMathematicalOperation(undefined);
    setResult(undefined);
  };

  const setDigit = (digit: number) => {
    if (primaryNumber && mathematicalOperation) {
      const value = `${secondaryNumber ? secondaryNumber : ""}${
        digit ? digit : ""
      }`;
      setSecondaryNumber(Number(value));
    } else {
      const value = `${primaryNumber ? primaryNumber : ""}${
        digit ? digit : ""
      }`;

      setPrimaryNumber(Number(value));
    }
  };

  const handleMathematicalOperation = (operation: string) => {
    if (operation === "=" && primaryNumber && secondaryNumber) {
      let value = 0;

      if (mathematicalOperation === "+") {
        value = primaryNumber + secondaryNumber;
      }

      if (mathematicalOperation === "-") {
        value = primaryNumber - secondaryNumber;
      }

      if (mathematicalOperation === "*") {
        value = primaryNumber * secondaryNumber;
      }

      if (mathematicalOperation === "/") {
        value = primaryNumber / secondaryNumber;
      }

      setResult(Number(value.toFixed(3)));
    } else if (mathematicalOperation && primaryNumber && secondaryNumber) {
      let value = 0;

      if (mathematicalOperation === "+") {
        value = primaryNumber + secondaryNumber;
      }

      if (mathematicalOperation === "-") {
        value = primaryNumber - secondaryNumber;
      }

      if (mathematicalOperation === "*") {
        console.log("teste");
        value = primaryNumber * secondaryNumber;
      }

      if (mathematicalOperation === "/") {
        value = primaryNumber / secondaryNumber;
      }

      setResult(Number(value.toFixed(3)));

      setPrimaryNumber(Number(value.toFixed(3)));
      setMathematicalOperation(operation);
      if (secondaryNumber) {
        setSecondaryNumber(undefined);
      }
    } else {
      setMathematicalOperation(operation);
    }
  };

  return (
    <div className="h-screen w-screen bg-neutral-500">
      <div className="bg-zinc-950 rounded-lg mx-auto my-0 top-32 relative max-w-[27rem]">
        <div className="flex h-28 border-b border-zinc-500 w-full px-12 my-0 bg-transparent text-white text-5xl justify-between">
          <div className="flex items-center gap-1">
            <div>{primaryNumber}</div>
            <div>{mathematicalOperation}</div>
            <div>{secondaryNumber}</div>
          </div>

          <div className="text-blue-300 flex items-center justify-end text-5xl w-[30%]">
            {resulted}
          </div>
        </div>

        <div className="flex p-5">
          <div>
            <div className="flex w-full flex-row justify-between mb-2">
              <div
                className="w-24 h-24 cursor-pointer flex items-center justify-center rounded-2xl font-medium hover:bg-amber-100 hover:border border-zinc-600 text-5xl relative"
                onClick={clearValue}
              >
                <p className="-mt-0.5 text-red-500 absolute top-1/2 -translate-y-1/2">
                  C
                </p>
              </div>
              <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:border border-zinc-600 text-5xl hover:bg-amber-100">
                <p className="-mt-3 text-orange-400">( )</p>
              </div>
              <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:border border-zinc-600 text-5xl hover:bg-amber-100">
                <p className="-mt-3 text-orange-400">%</p>
              </div>
            </div>
            <Digits setDigit={setDigit} />
          </div>
          <BasicOperations
            handleMathematicalOperation={handleMathematicalOperation}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
