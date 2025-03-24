"use server";

import { getErrorMessage } from "@/ultils/get-error-message";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const createNewUserAddress = async (data: {
  user_id: number;
  first_name: string;
  last_name: string;
  company?: string;
  address_1: string;
  address_2?: string;
  city: string;
  state_province: string;
  country_region: string;
  postal_zip_code: string;
  phone: string;
  is_default: boolean;
}) => {
  try {
    // Gọi API tùy chỉnh để tạo user mới sử dụng axios
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/add-address`,
      data
    );

    const result = response.data;

    if (!result?.error) {
      revalidatePath("/account/addresses");
    }

    return result;
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

export const deleteUserAddress = async ({
  address_id,
  user_id,
}: {
  address_id: number;
  user_id: number;
}) => {
  try {
    // Gọi API tùy chỉnh để tạo user mới sử dụng axios
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/delete-address`,
      {
        address_id,
        user_id,
      }
    );

    const result = response.data;

    if (!result?.error) {
      revalidatePath("/account/addresses");
    }

    return result;
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
