"use client";

import { useState } from "react";
import Image from "next/image";
import Del from "@/assets/del.svg";
import CreateModal from "./CreateServerModal";
import JoinModal from "./JoinServerModal";

export default function Modal() {
  const [create, setCreate] = useState(true);

  const handleClose = () => {
    // 모달 닫기 로직
    console.log("Modal closed");
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md relative">
        {/* 헤더 */}
        <div className=" flex items-center justify-between pl-4 border-b border-zinc-700">
          <div className="flex gap-4 p-2">
            {create ? (
              <div className="px-2 py-2 bg-gray-700 flex items-center justify-center rounded-lg">
                <button
                  onClick={() => setCreate(true)}
                  className="text-Body-B text-white"
                >
                  서버 만들기
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCreate(true)}
                className="text-Body-B text-gray-400"
              >
                서버 만들기
              </button>
            )}

            {!create ? (
              <div className="px-2 py-2 bg-gray-700 flex items-center justify-center rounded-lg">
                <button
                  onClick={() => setCreate(false)}
                  className="text-Body-B text-white"
                >
                  서버 가입하기
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCreate(false)}
                className="text-Body-B text-gray-400"
              >
                서버 가입하기
              </button>
            )}
          </div>
          <button
            onClick={handleClose}
            className="text-zinc-400 hover:text-white transition-colors pr-3"
          >
            <Image src={Del} alt="delete icon" width={20} height={20} />
          </button>
        </div>
        {create ? <CreateModal /> : <JoinModal />}
      </div>
    </div>
  );
}
