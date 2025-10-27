"use client";
import { forwardRef, ButtonHTMLAttributes, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ProfileProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  profileImage?: string | StaticImageData;
  name: string;
  className?: string;
}

export const Profile = forwardRef<HTMLButtonElement, ProfileProps>(
  ({ profileImage, name, className = "", ...rest }, ref) => {
    const [isActive, setIsActive] = useState(false);

    const baseStyle =
      "w-[120px] h-[42px] sm:w-[142px] sm:h-[50px] flex items-center transition-colors rounded-[8px]";

    const variantStyle = isActive ? "bg-gray-900" : "bg-black";

    const contentStyle =
      "w-[100px] h-7 sm:w-[118px] sm:h-8 flex items-center gap-4 sm:gap-[30px] ml-2 sm:ml-3";

    const imageStyle =
      "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white overflow-hidden flex-shrink-0";

    const nameStyle =
      "text-gray-400 text-sm sm:text-LBody-M leading-[22px] sm:leading-[26px] whitespace-nowrap";

    const handleClick = () => {
      setIsActive((prev) => !prev);
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...rest}
      >
        <div className={contentStyle}>
          <div className={imageStyle}>
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
          <span className={nameStyle}>{name}</span>
        </div>
      </button>
    );
  }
);

Profile.displayName = "Profile";
