import Image from "next/image";
import Line from "@/assets/line.svg";
import Button from "../button/Button";
import { useServerModalStore } from "@/store/serverModalStore";

interface ImgModalProps {
  onBack?: () => void;
  onNext?: () => void;
}

export default function ImgModal({ onBack, onNext }: ImgModalProps) {
  const titleB = "text-Title-B text-white mb-2";
  const { serverImage, setServerImage } = useServerModalStore();

  return (
    <>
      {/* 콘텐츠 */}
      <div className="p-6 flex flex-col gap-1">
        {/* 제목 */}
        <div>
          <h2 className={`${titleB}`}>서버 대표 이미지 지정</h2>
          <p className="text-Body-M text-gray-300">
            서버 대표 이미지를 정해주세요!
            <br />
            최소 512 x 512 크기로 지정해주세요.
          </p>
        </div>

        {/* 이미지 업로드 */}
        <div className="flex flex-col gap-3">
          <div className="w-2/3 aspect-square relative rounded-lg overflow-hidden bg-[#782222]">
            {serverImage && (
              <Image
                src={URL.createObjectURL(serverImage)}
                alt="선택 이미지"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
          <div className="flex">
            <input
              id="serverImageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                e.target.files?.[0] && setServerImage(e.target.files[0])
              }
            />
            <label htmlFor="serverImageUpload" className="cursor-pointer">
              <Button type="ImgAdd" text="이미지 변경" />
            </label>
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
        <Button type="buttonBorder" text="닫기" onClick={onBack} />
        <Button type="button" text="다음" onClick={onNext} />
      </div>
    </>
  );
}
