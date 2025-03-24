"use server";

import { getErrorMessage } from "@/ultils/get-error-message";
import axios from "axios";

export const createNewUser = async ({
  first_name,
  last_name,
  email,
  password,
}: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) => {
  try {
    // Chuẩn bị dữ liệu để gửi đến API tùy chỉnh
    const userData = {
      first_name,
      last_name,
      email,
      password,
    };

    // Gọi API tùy chỉnh để tạo user mới sử dụng axios
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/users`,
      userData
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Xử lý lỗi từ API
      return {
        error: error.response.data.message || getErrorMessage(error),
      };
    }

    return {
      error: getErrorMessage(error),
    };
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/forgot-password`,
      {
        email,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Xử lý lỗi từ API
      return {
        error: error.response.data.message || getErrorMessage(error),
      };
    }

    return {
      error: getErrorMessage(error),
    };
  }
};
