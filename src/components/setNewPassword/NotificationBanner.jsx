import * as React from "react";

export function NotificationBanner() {
  return (
    <div className="flex gap-1.5 items-center py-3 pr-4 pl-3 mt-64 text-sm tracking-normal leading-loose whitespace-nowrap bg-white rounded-lg border border-gray-200 border-solid min-h-[48px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)] text-stone-900 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f52bddca26fffd7a0c86851e4ff905a7d8c9f14be9af918ddb1be1dee8664a?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <span className="self-stretch my-auto">
        パスワード再設定用URLを送信しました
      </span>
    </div>
  );
}
