import Image from "next/image";
import Line from "@/assets/line.svg";
import Link from "@/assets/link.svg";
import Copy from "@/assets/copy.svg";
import Button from "../button/Button";
import { Input } from "../input";

interface InviteModalProps {
  onBack?: () => void;
  onNext?: () => void;
}

export default function InviteModal({ onBack, onNext }: InviteModalProps) {
  const titleB = "text-Title-B text-white mb-2";
  return (
    <>
      {/* 콘텐츠 */}
      <div className="p-6 flex flex-col gap-1">
        {/* 제목 */}
        <div>
          <h2 className={`${titleB}`}>팀원 초대하기</h2>
          <p className="text-Body-M text-gray-300">
            아래 링크를 공유하여 팀원을 초대하세요.
          </p>
        </div>

        {/* 링크 입력 */}
        <div className="w-full h-full mb-2 flex flex-col gap-5 pt-3">
          <label>
            <Input
              variant="channel"
              leftIcon={
                <Image src={Link} alt="copy icon" width={20} height={20} />
              }
              rightIcon={
                <Image src={Copy} alt="copy icon" width={20} height={20} />
              }
              placeholder="백엔드가 줄 링크"
            />
          </label>
          <Image
            src={Line}
            alt="delete icon"
            className="w-full border-2 border-gray-800"
          />
        </div>
      </div>

      {/* 푸터 버튼 */}
      <div className="flex gap-4 p-6 pt-0">
        <Button type="buttonBorder" text="닫기" onClick={onBack} />
        <Button type="button" text="확인" onClick={onNext} />
      </div>
    </>
  );
}
