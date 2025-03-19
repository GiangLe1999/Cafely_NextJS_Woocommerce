"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const router = useRouter();

  // Kiểm tra xem người dùng mới đăng ký thành công hay không
  // const { registered } = router.query;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email hoặc mật khẩu không chính xác");
      } else {
        // Đăng nhập thành công, chuyển hướng đến trang chủ hoặc trang trước đó
        // const returnUrl = (router.query.callbackUrl as string) || "/";
        // router.push(returnUrl);
      }
    } catch (error) {
      console.error(error);
      setError("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Đăng nhập</h1>

      {/* {registered && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Đăng ký thành công! Vui lòng đăng nhập với tài khoản của bạn.
        </div>
      )} */}

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Chưa có tài khoản?{" "}
            <Link href="/auth/signup" className="text-blue-500 hover:underline">
              Đăng ký ngay
            </Link>
          </p>
          <p className="mt-2">
            <Link
              href="/auth/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
