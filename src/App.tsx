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
    setMathematicalOperation("");
    setResult(undefined);
  };

  const setDigit = (digit: number) => {
    if (primaryNumber) {
      setSecondaryNumber(digit);
    } else {
      setPrimaryNumber(digit);
    }
  };

  const handleMathematicalOperation = (operation: string) => {
    if (operation === "=" && primaryNumber && secondaryNumber) {
      const value = primaryNumber + secondaryNumber;
      setResult(value);
    } else if (mathematicalOperation && primaryNumber && secondaryNumber) {
      let value = 0;

      if (operation === "+") {
        value = primaryNumber + secondaryNumber;
      }

      if (operation === "-") {
        value = primaryNumber - secondaryNumber;
      }

      setResult(value);
      console.log(value);

      setPrimaryNumber(value);
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
        <div className="flex h-28 border-b border-zinc-500 w-full px-12 my-0 bg-transparent">
          <input
            className="text-white text-5xl w-[70%] bg-transparent"
            type="text"
            name=""
            id=""
            readOnly
            value={`${primaryNumber ? primaryNumber : ""}${
              mathematicalOperation ? mathematicalOperation : ""
            }${secondaryNumber ? secondaryNumber : ""}`}
          />
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
