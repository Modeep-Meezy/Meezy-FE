"use client";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import EyeOff from "@/assets/eye-off.svg";
import EyeOpen from "@/assets/eye-open.svg";

/* 로그인, 회원가입 인풋은 그냥 right icon 쓰면되고, 모달 input? 그 작은건 오른쪽, 왼쪽 아이콘 
필요할 때마다 불러서 쓰기, 더 tailwind 쓰고 싶음 className사용해서 쓰기
label, varient, type, placeholder, leftIcon, rightIcon, className있음 */

type Variant = "default" | "channel";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  type?: "text" | "password" | "email" | "number";
  variant?: Variant; //그냥 로그인할 때 쓰면 default, 모달창에 쓰는 작은 input이면 channel로 하기
  leftIcon?: ReactNode; //모달 작은 input 왼쪽 사진있음 쓰게 하기
  rightIcon?: ReactNode; //모달 작은 input 오른쪽에 사진있음 쓰게 하기
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      variant = "default",
      leftIcon,
      rightIcon,
      className,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    const baseStyle =
      "outline-none text-white leading-none placeholder:leading-[100%] placeholder:align-middle border-[0.4px] rounded-[12px]";

    const variantStyle = {
      default:
        "w-[800px] h-[81px] border-gray-800 bg-gray-900 text-Title-M placeholder:text-Title-M placeholder:text-gray-500 px-8",
      channel:
        "w-[523px] h-[53px] border-[#404040] bg-[#404040] text-sTitle-M placeholder:text-sTitle-M placeholder:text-gray-400 px-[24px]",
    };

    // 모달 작은 input 아이콘 유무에 따라 패딩ㅠ
    const movingcPadding = `
      ${leftIcon ? "pl-[52px]" : ""}
      ${rightIcon ? "pr-[52px]" : ""}
    `;

    return (
      <div
        className={`flex flex-col gap-[10px] ${
          variant === "channel" ? "w-[523px]" : "w-[800px]"
        } relative ${className}`}
      >
        {/* 라벨(label) */}
        {label && (
          <label className="text-sTitle-M text-gray-400 leading-[100%] align-middle">
            {label}
          </label>
        )}
        {/* 왼쪽 아이콘(Icon) */}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-[20px] top-1/2 -translate-y-1/2">
              {leftIcon}
            </div>
          )}
          {/* 인풋(input) */}
          <input
            ref={ref}
            type={isPassword && showPassword ? "text" : type}
            {...rest}
            className={`${baseStyle} ${variantStyle[variant]} ${movingcPadding}`}
          />

          {/* 오른쪽 아이콘(Icon) 필요할 때 */}
          {rightIcon && (
            <div className="absolute right-[20px] top-1/2 -translate-y-1/2">
              {rightIcon}
            </div>
          )}

          {/* type==password일 때  */}
          {isPassword && !rightIcon && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-7 top-1/2 -translate-y-1/2"
            >
              <Image
                src={showPassword ? EyeOpen : EyeOff}
                alt={showPassword ? "eye-off" : "eye-open"}
              />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
