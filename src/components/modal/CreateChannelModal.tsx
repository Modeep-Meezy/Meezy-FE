import Image from "next/image";
import Line from "@/assets/line.svg";
import Button from "../button/Button";
import { Input } from "../input";
import { useServerModalStore } from "@/store/serverModalStore";

interface CreateChannelModalProps {
  onNext?: () => void;
}

export default function CreateChannelModal({
  onNext,
}: CreateChannelModalProps) {
  const titleB = "text-Title-B text-white mb-2";
  const { serverName, setServerName } = useServerModalStore();

  return (
    <>
      {/* 콘텐츠 */}
      <div className="p-6 flex flex-col gap-1">
        {/* 제목 */}
        <div>
          <h2 className={`${titleB}`}>채널 만들기</h2>
          <p className="text-Body-M text-gray-300">
            다양한 소통 채널을 만들어 보세요!
          </p>
        </div>

        {/* 이름 입력 */}
        <div className="w-full h-full mb-2 flex flex-col gap-5">
          <label>
            <Input
              variant="channel"
              placeholder="채널 이름"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
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
        <Button type="buttonBorder" text="닫기" />
        <Button type="button" text="추가" onClick={onNext} />
      </div>
    </>
  );
}
