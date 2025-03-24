"use server";

import { getErrorMessage } from "@/ultils/get-error-message";
import axios from "axios";

// Get user information for login
export const getUserDefaultAddress = async (user_id: number | undefined) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/default-address`,
      { user_id }
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

export const getUserAddresses = async (user_id: number | undefined) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/all-addresses`,
      { user_id }
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

export const getUserAddressCount = async (user_id: number | undefined) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND_BASE_URL}/custom/v1/address-count`,
      { user_id }
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
