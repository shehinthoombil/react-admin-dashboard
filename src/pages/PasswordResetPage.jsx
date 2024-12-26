import * as React from "react";
import { PasswordResetForm } from "../Components/passswordReset/PasswordResetForm.jsx";
import { Logo } from "../Components/passswordReset/Logo.jsx";

export function PasswordResetPage() {
  return (
    <div className="flex overflow-hidden flex-col pb-80 bg-stone-100 max-md:pb-24">
      <Logo />
      <div className="flex flex-col self-center mt-44 max-w-full w-[400px] max-md:mt-10">
        <div className="flex flex-col items-start w-full text-center">
          <div className="text-3xl font-medium leading-none text-stone-900">
            パスワード再設定
          </div>
          <div className="mt-6 text-sm tracking-normal text-stone-500">
            現在使っているメールアドレスを入力してください。 パスワード再設定用のURLをメールで送信いたします。
          </div>
        </div>
        <PasswordResetForm />
      </div>
    </div>
  );
}