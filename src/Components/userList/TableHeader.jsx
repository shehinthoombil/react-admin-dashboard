import * as React from "react";

export function TableHeader() {
  return (
    <>
      <div className="flex gap-1 items-center px-4 py-5 w-[76px] bg-white border-b border-solid border-b-stone-300 min-h-[56px]">
        <div className="self-stretch my-auto text-base font-medium leading-none text-neutral-500">
          No.
        </div>
        <div className="flex flex-col justify-center items-center self-stretch p-1 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb30af85f43350d2dc5f6de6d02f8b4aa0830f620d7055b27533503693a9a38?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
            alt="Sort Icon"
            className="object-contain aspect-[1.17] fill-neutral-500 w-[7px]"
          />
        </div>
      </div>
      <div className="gap-2 self-stretch px-4 py-6 w-[202px] font-medium text-base leading-none bg-white border-b border-solid border-b-stone-300 min-h-[56px] text-neutral-500">
        ニックネーム
      </div>
      <div className="gap-2 self-stretch px-4 py-6 min-w-[240px] w-[315px] font-medium text-base leading-none bg-white border-b border-solid border-b-stone-300 min-h-[56px] text-neutral-500">
        メールアドレス
      </div>
      <div className="gap-2 self-stretch px-4 py-6 w-[116px] font-medium text-base leading-none bg-white border-b border-solid border-b-stone-300 min-h-[56px] text-neutral-500">
        生年月
      </div>
      <div className="gap-2 self-stretch px-4 py-6 w-[107px] font-medium text-base leading-none bg-white border-b border-solid border-b-stone-300 min-h-[56px] text-neutral-500">
        性別
      </div>
      <div className="gap-2 self-stretch px-4 py-6 w-[92px] font-medium text-base leading-none bg-white border-b border-solid border-b-stone-300 min-h-[56px] text-neutral-500">
        居住地
      </div>
      <div className="gap-2 self-stretch px-4 py-6 flex-1 shrink basis-0 min-w-[240px] font-medium text-base leading-none bg-white border-b border-solid border-b-stone-300 min-h-[56px] text-neutral-500">
        登録日
      </div>
    </>
  );
}