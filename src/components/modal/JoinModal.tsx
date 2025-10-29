import Image from "next/image";
import Line from "@/assets/line.svg";
import Link from "@/assets/link.svg";
import Button from "../button/Button";
import { Input } from "../input";

export default function JoinModal() {
  const titleB = "text-Title-B text-white mb-2";

  return (
    <>
      {/* 콘텐츠 */}
      <div className="p-6 flex flex-col gap-1">
        {/* 제목 */}
        <div>
          <h2 className={`${titleB}`}>서버 가입하기</h2>
          <p className="text-Body-M text-gray-300">
            초대받은 서버 가입을 위해 링크를 입력해주세요.
          </p>
        </div>

        {/* 링크 입력 */}
        <div className="w-full h-full mb-2 flex flex-col gap-5">
          <label>
            <span className="text-Body-B text-white">링크 입력</span>
            <Input
              variant="channel"
              leftIcon={
                <Image src={Link} alt="copy icon" width={20} height={20} />
              }
              placeholder="서버 이름"
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
        <Button type="button" text="확인" />
      </div>
    </>
  );
}
