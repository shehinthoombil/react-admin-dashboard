import * as React from "react";

export function LoginButton() {
  return (
    <button
      type="submit"
      className="flex flex-col justify-center items-center w-full font-bold text-white bg-amber-500 min-h-[48px] rounded-[100px]"
    >
      <span className="flex-1 px-28 max-w-full w-[343px] max-md:px-5">
        ログイン
      </span>
    </button>
  );
}