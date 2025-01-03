import * as React from "react";
import { Button } from "./Button";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function PasswordResetForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("メールアドレスを入力してください");
      return;
    }

    if (!validateEmail(email)) {
      setError("有効なメールアドレスをご入力してください");
      return;
    }

    setLoading(true);

    try {
      // Replace with your actual API call
      await mockPasswordResetRequest(email);

      toast.success(
        "パスワード再設定用のメールを送信しました。メールをご確認ください。",
        { autoClose: 5000 }
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleReturnToLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate('/');
  };

  // Mock API call - replace with real API
  const mockPasswordResetRequest = async (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate API response
        if (email === "error@test.com") {
          reject(new Error("このメールアドレスは登録されていません。"));
        }
        resolve({ success: true });
      }, 1500);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-11 w-full whitespace-nowrap max-md:mt-10" noValidate>
      <div className="flex flex-col w-full text-xs font-medium text-stone-900">
        <label htmlFor="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          disabled={loading}
          required
          placeholder="example@email.com"
          className={`flex mt-2 w-full bg-white rounded-lg border border-solid 
            ${error ? 'border-red-500' : 'border-stone-300'} 
            min-h-[44px] px-3 focus:outline-none focus:ring-2 focus:ring-amber-500
            ${loading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          `}
        />
        {error && (
          <span className="text-red-500 text-xs mt-1">{error}</span>
        )}
      </div>

      <div className="flex flex-col mt-6 w-full text-sm leading-6 text-center gap-3">
        <Button
          type="submit"
          variant="primary"
          className="bg-amber-500"
          disabled={loading}
        >
          {loading ? "送信中..." : "パスワード再設定用URLを送信する"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={handleReturnToLogin}
          disabled={loading}
          className="hover:bg-gray-100 transition-colors"

        >
          ログイン画面にもどる
        </Button>
      </div>
    </form>
  );
}