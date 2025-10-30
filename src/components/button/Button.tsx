import { ALL_BUTTON_CONFIG } from "./buttonConfig";
import { UnifiedButtonType } from "./buttonTypes";
import ChevronRight from "@/assets/chevron-right.svg";
import Image from "next/image";
import { Team, AI } from "./buttonTypes";
import { classNames } from "@/lib/classNames";
import AIButton from "./AIButton";

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

  const TEAM_TYPES: Team[] = ["team", "teamGray400"]; //if문을 줄이자
  const AI_TYPES: AI[] = ["AI", "AIStart", "AISecond"];

  //부모 컴포넌트에 text가 없다면 config.text로 가자
  let displayText = text ?? config.text ?? type;

  if (TEAM_TYPES.includes(type as Team)) {
    //팀 타입 관련 if문
    displayText = `${displayText}`;
  }

  if (AI_TYPES.includes(type as AI)) {
    return (
      <AIButton
        type={type}
        isActive={isActive}
        onClick={onClick}
        text={displayText}
      />
    );
  }

  return (
    <div
      onClick={onClick}
      className={classNames(
        config.font,
        config.fontColor,
        config.size,
        config.rounded,
        config.border,
        bgClass,
        "flex items-center justify-around"
      )}
    >
      <span>{displayText ?? type}</span>
      {(type === "team" || type === "teamGray400") && (
        <Image src={ChevronRight} alt="chevron" />
      )}
    </div>
  );
}
