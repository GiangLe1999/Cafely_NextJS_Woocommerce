"use server";

import { getErrorMessage } from "@/ultils/get-error-message";
import wooClient from "@/ultils/woo-client";

// Products
export const getAllProducts = async () => {
  try {
    const response = await wooClient.get("/products");
    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

// Categories
export const getAllCategories = async () => {
  try {
    const response = await wooClient.get("/products/categories");
    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
