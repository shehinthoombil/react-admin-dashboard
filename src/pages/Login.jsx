import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FormInput } from "../components/Login/FormInput";
import { LoginButton } from "../components/Login/LoginButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordResetButton from "../components/Login/PasswordResetButton";

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [accountError, setAccountError] = useState("");
    const [loading, setLoading] = useState(false);


    const validateEmail = (email) => {
        const emailValidation = /^\S+@\S+\.\S+$/;
        if (!email) {
            setEmailError("有効なメールアドレスをご入力してください");
            return false;
        }
        if (!emailValidation.test(email)) {
            setEmailError("有効なメールアドレスをご入力してください");
            return false;
        }
        setEmailError("");
        return true;
    };

    const suspendedAccounts = ["error@gmail.com"];

    const handleLogin = (e) => {
        e.preventDefault();

        setAccountError("");
        if (suspendedAccounts.includes(email)) {
            toast.error("お使いのアカウントは現在アクセスできません。ログインするには担当の管理者までお問合せください。");
            return;
        }

        const isEmailValid = validateEmail(email);

        if (!isEmailValid) {
            return;
        }
        if (!password) {
            toast.error("メールアドレスまたはパスワードを入力してください！");
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            if (email !== "admin@gmail.com" || password !== "admin123") {
                toast.error("メールアドレスまたはパスワードが正しくありません！");
            } else {
                toast.success("ログイン成功！");
              
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify({ email }));
               
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1000); 
            }
        }, 2000);
    };

    return (
        <div className="flex overflow-hidden min-h-screen flex-col pb-80 bg-stone-100 max-md:pb-24">
            <header className="flex flex-col justify-center items-start py-6 pr-2 pl-9 w-full border-b border-solid bg-stone-100 border-b-stone-300 min-h-[76px] max-md:pl-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb86849484a63fcd2629d025e71815deb834e6135f8d0c5104064d4b57e444ed?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
                    alt="Company Logo"
                    className="object-contain max-w-full aspect-[6.25] w-[188px]"
                />
            </header>

            <main className="flex flex-col  self-center  mt-32 max-w-full whitespace-nowrap px-6 w-full sm:w-[400px] max-md:mt-10">
                <h1 className="self-start text-3xl mx-auto font-semibold leading-none text-center text-stone-900">
                    ログイン
                </h1>

                <form className="flex flex-col mt-11 w-full max-md:mt-10" onSubmit={handleLogin} noValidate>
                    <div className="flex flex-col w-full text-xs font-medium text-stone-900">
                        <FormInput
                            label="メールアドレス"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateEmail(e.target.value);
                                setAccountError("");
                            }}
                            error={emailError}
                        />
                        {emailError && (
                            <span className="text-red-500 text-xs mt-1">{emailError}</span>
                        )}

                        <div className="mt-6">
                            <FormInput
                                label="パスワード"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-6 w-full text-sm leading-6 text-center">
                        <LoginButton variant="primary" loading={loading}>ログイン</LoginButton>
                        <div className="">
                            <PasswordResetButton variant="secondary">
                                <p className="font-semibold mt-2">パスワードをお忘れの場合</p>
                            </PasswordResetButton>
                        </div>
                    </div>
                </form>

            </main>
        </div>
    );
}