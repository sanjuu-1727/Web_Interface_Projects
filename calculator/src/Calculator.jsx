import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handlePress = (value) => {
    if (value === "AC") {
      setDisplay("");
      return;
    }
    if (value === "DEL") {
      setDisplay((prev) => prev.slice(0, -1));
      return;
    }
    if (value === "=") {
      if (!display) return;
      try {
        const result = Function(
          `"use strict"; return (${display
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")})`
        )();
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }
      return;
    }
    setDisplay((prev) => (prev === "Error" ? value : prev + value));
  };

  const buttons = [
    ["AC", "DEL", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const isOperator = (v) => ["÷", "×", "−", "+", "%"].includes(v);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 rounded-3xl p-6 w-full max-w-xs shadow-2xl border border-indigo-500/20">
        <h1 className="text-center text-white font-bold text-xl mb-5 tracking-wide">
          Calculator
        </h1>
        <div className="bg-slate-950 rounded-xl mb-5 px-4 py-6 flex items-end justify-end min-h-[70px] border border-indigo-500/30">
          <span className="text-white text-2xl font-mono break-all text-right">
            {display}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {buttons.map((row, i) => (
            <div key={i} className="grid grid-cols-4 gap-3">
              {row.map((btn) => {
                const isZero = btn === "0";
                const isEquals = btn === "=";
                const isFuncBtn =
                  btn === "AC" || btn === "DEL" || btn === "%" || isOperator(btn);

                return (
                  <button
                    key={btn}
                    onClick={() => handlePress(btn)}
                    className={[
                      "rounded-xl h-14 text-base font-semibold transition-colors flex items-center justify-center",
                      isZero ? "col-span-2" : "",
                      isEquals
                        ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
                        : isFuncBtn
                        ? "bg-indigo-800 text-indigo-100 hover:bg-indigo-700"
                        : "bg-slate-800 text-white hover:bg-slate-700",
                    ].join(" ")}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
