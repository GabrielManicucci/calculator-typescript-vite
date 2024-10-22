import { Diff } from "lucide-react";

type DigitsProps = {
  setDigit: (digit: number) => void;
};

export default function Digits({ setDigit }: DigitsProps) {
  return (
    <div className="text-blue-200 grid grid-cols-3 gap-2 grid-rows-4">
      {Array.from({ length: 9 }, (_v, i) => i + 1).map((digit) => (
        <div
          key={digit}
          onClick={() => setDigit(digit)}
          className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl"
        >
          <p className="-mt-1">{digit}</p>
        </div>
      ))}

      <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
        <Diff size={50} />
      </div>
      <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
        <p className="-mt-1">0</p>
      </div>
      <div className="w-24 h-24 cursor-pointer font-medium flex items-center justify-center rounded-2xl hover:bg-slate-700 hover:border border-slate-500 text-5xl">
        <p className="-mt-1">.</p>
      </div>
    </div>
  );
}
