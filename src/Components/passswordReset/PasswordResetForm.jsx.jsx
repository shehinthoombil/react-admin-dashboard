import * as React from "react";
import { Button } from "../passswordReset/Button";

export function PasswordResetForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-11 w-full whitespace-nowrap max-md:mt-10">
      <div className="flex flex-col w-full text-xs font-medium text-stone-900">
        <label htmlFor="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          required
          className="flex mt-2 w-full bg-white rounded-lg border border-solid border-stone-300 min-h-[44px]"
        />
      </div>
      <div className="flex flex-col mt-6 w-full text-sm leading-6 text-center">
        <Button
          type="submit"
          variant="primary"
          className="bg-amber-500"
        >
          パスワード再設定用URLを送信する
        </Button>
        <Button
          type="button"
          variant="secondary"
        >
          ログイン画面にもどる
        </Button>
      </div>
    </form>
  );
}