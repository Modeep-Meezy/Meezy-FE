"use client";
import { forwardRef, ButtonHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import Dark from "@/assets/dark.svg";
import Bright from "@/assets/bright.svg";

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string | StaticImageData;
  name: string;
  isActive?: boolean;
  className?: string;
}

export const Category = forwardRef<HTMLButtonElement, CategoryProps>(
  ({ icon, name, isActive = false, className = "", ...rest }, ref) => {
    const baseStyle =
      "w-[120px] h-[42px] sm:w-[142px] sm:h-[50px] flex items-center rounded-[8px] transition-colors";

    const variantStyle = isActive ? "bg-gray-900" : "bg-black";

    const contentStyle =
      "w-full h-7 sm:h-8 flex items-center justify-between px-2 sm:px-3";

    return (
      <button
        ref={ref}
        type="button"
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...rest}
      >
        <div className={contentStyle}>
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
            <Image
              src={isActive ? Bright : Dark}
              alt={name}
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>

          <span
            className={`text-sm sm:text-base leading-[22px] sm:leading-[26px] whitespace-nowrap ${
              isActive
                ? "text-white text-LBody-B"
                : "text-gray-400 text-LBody-M"
            }`}
          >
            {name}
          </span>
        </div>
      </button>
    );
  }
);

Category.displayName = "Category";
