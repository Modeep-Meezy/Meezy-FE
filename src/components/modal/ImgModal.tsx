import Image from "next/image";
import Line from "@/assets/line.svg";
import Button from "../button/Button";
import { Input } from "../input";

interface ImgModalProps {
  onBack?: () => void;
  onNext?: () => void;
}

export default function CreateModal({ onBack, onNext }: ImgModalProps) {
  const titleB = "text-Title-B text-white mb-2";

  return (
    <>
      {/* 콘텐츠 */}
      <div className="p-6 flex flex-col gap-1">
        {/* 제목 */}
        <div>
          <h2 className={`${titleB}`}>서버 만들기</h2>
          <p className="text-Body-M text-gray-300">
            회의를 위한 서버를 만들어 보세요!
          </p>
        </div>

        {/* 이름 입력 */}
        <div className="w-full h-full mb-2 flex flex-col gap-5">
          <label>
            <span className="text-Body-B text-white">이름</span>
            <Input variant="channel" placeholder="서버 이름" />
          </label>
          <Image
            src={Line}
            alt="delete icon"
            className="w-full border-2 border-gray-800"
          />
        </div>

        {/* 이미지 업로드 */}
        <div className="flex flex-col gap-3">
          <h3 className={`${titleB}`}>서버 대표 이미지 지정</h3>
          <p className="text-Body-M text-gray-300 ">
            서버 대표 이미지를 정해주세요!
            <br />
            최소 512 x 512 크기로 지정해주세요.
          </p>
          <div className="w-1/2">
            <Button type="ImgAdd" />
          </div>
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
        <Button type="button" text="다음" />
      </div>
    </>
  );
}
