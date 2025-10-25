import { ALL_BUTTON_CONFIG } from "./buttonConfig";
import { UnifiedButtonType } from "./buttonTypes";
import ChevronRight from "@/assets/chevron-right.svg";
import Image from "next/image";

interface ButtonProps {
  type: UnifiedButtonType;
  isActive?: boolean; // true/false 외부 상태
  onClick?: () => void;
  text?: string;
}

export default function Button({
  type,
  isActive = true, //부모 컴포넌트에서 useState를 통해 boolean값 설정해줘야함
  onClick,
  text,
}: ButtonProps) {
  const config = ALL_BUTTON_CONFIG[type];

  const bgClass = isActive
    ? config.bgActive ?? "" // bgActive가 없으면 빈 문자열
    : config.bgInactive ?? "";

  //부모 컴포넌트에 text가 없다면 config.text로 가자
  let displayText = text ?? config.text ?? type;

  if (type === "team" || type === "teamGray400") {
    displayText = `${displayText}`;
  }

  if (type === "AI" || type === "AIStart" || type === "AISecond") {
    return (
      <div className={`bg-gray-900 rounded-lg`}>
        <div
          className={`flex justify-around items-center text-gray-400 border-b-2 border-gray-800 text-label-B`}
        >
          AI 도우미 - 리시브
          <div className={`flex items-center`}>
            <div>0:25</div>
            <div className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-system-800 text-white text-sm font-bold"></div>
          </div>
        </div>
        <button
          onClick={onClick}
          className={` ${config.font}
        ${config.fontColor}
        ${config.size}
        ${config.rounded}
        ${config.border || ""}
        ${bgClass}`}
        >
          {displayText ?? type}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`
        ${config.font}
        ${config.fontColor}
        ${config.size}
        ${config.rounded}
        ${config.border || ""}
        ${bgClass}
        flex items-center justify-around`}
    >
      <span>{displayText ?? type}</span>
      {(type === "team" || type === "teamGray400") && (
        <Image src={ChevronRight} alt="chevron" />
      )}
    </button>
  );
}
