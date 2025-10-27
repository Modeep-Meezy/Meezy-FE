import { classNames } from "@/utils/classNames";
import { ALL_BUTTON_CONFIG } from "./buttonConfig";
import { UnifiedButtonType } from "./buttonTypes";

interface AIBotButtonProps {
  type: UnifiedButtonType;
  isActive?: boolean;
  onClick?: () => void;
  text?: string;
}

export default function AIButton({
  type,
  isActive = true,
  onClick,
  text,
}: AIBotButtonProps) {
  const config = ALL_BUTTON_CONFIG[type];

  const bgClass = isActive ? config.bgActive ?? "" : config.bgInactive ?? "";

  const displayText = text ?? config.text ?? type;

  return (
    <div className="bg-gray-900 rounded-lg">
      <div className="flex justify-around items-center text-gray-400 border-b-2 border-gray-800 text-label-B">
        AI 도우미 - 리시브
        <div className="flex items-center">
          <div>0:25</div>
          <div className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-system-800 text-white text-sm font-bold"></div>
        </div>
      </div>
      <button
        onClick={onClick}
        className={classNames(
          config.font,
          config.fontColor,
          config.size,
          config.rounded,
          config.border,
          bgClass
        )}
      >
        {displayText}
      </button>
    </div>
  );
}
