"use server";

import { getErrorMessage } from "@/ultils/get-error-message";
import axios from "axios";

// Get user information for login
export const getUserForLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    // Chuẩn bị dữ liệu đăng nhập
    const loginData = {
      email,
      password,
    };

    // Gọi API đăng nhập
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/login`,
      loginData
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        error: error.response.data.message || getErrorMessage(error),
      };
    }

    return {
      error: getErrorMessage(error),
    };
  }
};
