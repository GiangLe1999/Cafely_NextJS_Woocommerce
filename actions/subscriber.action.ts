"use server";

import { getErrorMessage } from "@/ultils/get-error-message";
import axios from "axios";

export const createNewSubscriber = async (email: string) => {
  try {
    // Gọi API tùy chỉnh để tạo user mới sử dụng axios
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/subscribe`,
      { email }
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

export const deleteSubscriber = async (token: string) => {
  try {
    // Gọi API tùy chỉnh để tạo user mới sử dụng axios
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/unsubscribe`,
      { token }
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
