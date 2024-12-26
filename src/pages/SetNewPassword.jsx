import * as React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { NotificationBanner } from "./NotificationBanner";

function LoginForm() {
  const formFields = [
    { label: "メールアドレス", type: "email", id: "email" },
    { label: "パスワード", type: "password", id: "password" }
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center pb-7 bg-stone-100">
      <header className="flex flex-col justify-center items-start self-stretch py-6 pr-2 pl-9 w-full border-b border-solid bg-stone-100 border-b-stone-300 min-h-[76px] max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2421845b77ece85947e25ba00555b13775f4dc87caf62a384c134802a589f7?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
          alt="Company logo"
          className="object-contain max-w-full aspect-[6.25] w-[188px]"
        />
      </header>
      <main className="flex flex-col mt-32 max-w-full whitespace-nowrap w-[400px] max-md:mt-10">
        <h1 className="self-start text-3xl font-medium leading-none text-center text-stone-900">
          ログイン
        </h1>
        <form className="flex flex-col mt-11 w-full max-md:mt-10">
          <div className="flex flex-col w-full text-xs font-medium text-stone-900">
            {formFields.map((field) => (
              <InputField
                key={field.id}
                label={field.label}
                type={field.type}
                id={field.id}
              />
            ))}
          </div>
          <div className="flex flex-col mt-6 w-full text-sm leading-6 text-center">
            <Button variant="primary" type="submit">
              ログイン
            </Button>
            <Button variant="secondary">
              パスワードをお忘れの場合
            </Button>
          </div>
        </form>
      </main>
      <NotificationBanner
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/06f52bddca26fffd7a0c86851e4ff905a7d8c9f14be9af918ddb1be1dee8664a?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
        message="パスワード再設定用URLを送信しました"
      />
    </div>
  );
}

export default LoginForm;