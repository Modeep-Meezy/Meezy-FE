import Button from "../button/Button";

interface CreateTitleModalProps {
  onNext?: () => void;
  title: string;
  detail: string;
}

export default function CreateTitleModal({
  onNext,
  title,
  detail,
}: CreateTitleModalProps) {
  const titleB = "text-Title-B text-white mb-2";
  return (
    <>
      {/* 콘텐츠 */}
      <div className="p-6 flex flex-col gap-1">
        {/* 제목 */}
        <div>
          <h2 className={`${titleB}`}>{title}</h2>
          <p className="text-Body-M text-gray-300">{detail}</p>
        </div>
      </div>

      {/* 푸터 버튼 */}
      <div className="flex gap-4 p-6 pt-0">
        <Button type="buttonBorder" text="취소" />
        <Button type="button" text="확인" onClick={onNext} />
      </div>
    </>
  );
}
