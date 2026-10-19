import { useState } from "react";

export default function Feedback() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  function handleYes() {
    setYes(yes + 1);
  }

  function handleNo() {
    setNo(no + 1);
  }

  function handleClear() {
    setYes(0);
    setNo(0);
  }

  return (
    <div className="px-20 py-8 border-t border-[#C9996B]">
      <h3 className="text-2xl font-bold mb-4">Was this helpful?</h3>
      <div className="flex items-center gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-lg font-bold text-[#EDE9E6]"
          onClick={handleYes}
        >
          Yes ({yes})
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 text-lg font-bold text-[#5C4F4A]"
          onClick={handleNo}
        >
          No ({no})
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-6 py-2 text-lg font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}