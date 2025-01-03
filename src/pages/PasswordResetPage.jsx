import * as React from "react";
import { PasswordResetForm } from "../components/passswordReset/PasswordResetForm.jsx.jsx";
import { Logo } from "../components/passswordReset/Logo.jsx";

export function PasswordResetPage() {
  return (
    <div className="flex overflow-hidden flex-col pb-80 min-h-screen bg-stone-100 max-md:pb-24">
      <Logo />
      <div className="flex flex-col self-center mt-44 max-w-full max-sm:px-6 sm:w-[400px] max-md:mt-10">
        <div className="flex flex-col items-start w-full text-center">
          <div className="text-3xl mx-auto font-medium leading-none text-center text-stone-900">
            パスワード再設定
          </div>
          <div className="mt-6 text-sm tracking-normal px-3 sm:px-6 text-stone-500 ">
            現在使っているメールアドレスを入力してください。 パスワード再設定用のURLをメールで送信いたします。
          </div>
        </div>
        <PasswordResetForm />
      </div>
    </div>
  );
}