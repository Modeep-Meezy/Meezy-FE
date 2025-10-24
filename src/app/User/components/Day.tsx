"use client";
import { useState } from "react";

export default function Day() {
  const [isActive, setIsActive] = useState(false);
  const today = new Date().getDate();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[28px] h-[28px] rounded-full flex items-center justify-center text-white text-LBody-M ${
        isActive ? "bg-primary-500" : "bg-primary-600"
      }`}
    >
      {today}
    </button>
  );
}
