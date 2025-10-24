"use client";
import { forwardRef, ButtonHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import Dark from "@/assets/dark.svg";
import Bright from "@/assets/bright.svg";

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string | StaticImageData;
  name: string;
  isActive?: boolean; //눌렀는지 아닌지
  className?: string;
}

export const Category = forwardRef<HTMLButtonElement, CategoryProps>(
  ({ icon, name, isActive = false, className = "", ...rest }, ref) => {
    const baseStyle =
      "w-[142px] h-[38px] flex items-center rounded-[4px] transition-colors";

    const variantStyle = isActive ? "bg-gray-900" : "bg-black";

    const contentStyle =
      "w-[120px] h-[26px] flex items-center ml-[10px] gap-[65px]";

    return (
      <button
        ref={ref}
        type="button"
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...rest}
      >
        <div className={contentStyle}>
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            <Image
              src={isActive ? Bright : Dark}
              alt={name}
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </div>
          {/* 누르면 하얀색으로 되게 */}
          <span
            className={`leading-[26px] whitespace-nowrap ${
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
