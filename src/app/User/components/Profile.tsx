"use client";
import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface ProfileProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  profileImage?: string | StaticImageData;
  name: string;
  isActive?: boolean;
  className?: string;
}

export const Profile = forwardRef<HTMLButtonElement, ProfileProps>(
  ({ profileImage, name, isActive = false, className = "", ...rest }, ref) => {
    const baseStyle = "w-[142px] h-[50px] flex items-center  transition-colors";

    const variantStyle = isActive ? "bg-gray-900" : "bg-black";

    const contentStyle = "w-[118px] h-8 flex items-center gap-[30px] ml-3";

    return (
      <button
        ref={ref}
        type="button"
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...rest}
      >
        <div className={contentStyle}>
          {/* 프로필 이미지 */}
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex-shrink-0">
            {profileImage && (
              <Image
                src={profileImage}
                alt={name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* 이름 */}
          <span className="text-gray-400 text-LBody-M leading-[26px] whitespace-nowrap">
            {name}
          </span>
        </div>
      </button>
    );
  }
);

Profile.displayName = "Profile";
