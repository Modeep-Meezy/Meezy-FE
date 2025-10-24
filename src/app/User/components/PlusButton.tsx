"use client";
import { forwardRef, ButtonHTMLAttributes } from "react";
import Image from "next/image";
import DarkPlus from "@/assets/plus-dark-background.svg";
import BrightPlus from "@/assets/plus-bright-background.svg";

/* 첫번째 배경 어두운 버튼은 type을 dark로, 두번째 배경 살짝 밝은 버튼은 type을 bright로 tailwind 더 쓰고 싶음 className 사용해서 쓰기 */

type Variant = "dark" | "bright";

interface PlusButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant; //어두운 버튼인지, 밝은 버튼인지
  className?: string;
}

export const PlusButton = forwardRef<HTMLButtonElement, PlusButtonProps>(
  ({ variant = "dark", className = "", ...rest }, ref) => {
    const baseStyle =
      "w-16 h-16 rounded-[8px] flex items-center justify-center";

    const variantStyle = {
      dark: "bg-gray-800",
      bright: "bg-gray-700",
    };

    const plusIcon = variant === "dark" ? DarkPlus : BrightPlus;

    return (
      <button
        ref={ref}
        type="button"
        className={`${baseStyle} ${variantStyle[variant]} ${className}`}
        {...rest}
      >
        <Image src={plusIcon} alt="plus button" />
      </button>
    );
  }
);

PlusButton.displayName = "PlusButton";
