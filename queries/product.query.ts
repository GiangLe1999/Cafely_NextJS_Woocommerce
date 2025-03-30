"use server";

import { getErrorMessage } from "@/ultils/get-error-message";
import wooClient from "@/ultils/woo-client";
import axios from "axios";

// Products
export const getAllProducts = async () => {
  try {
    const response = await wooClient.get("/products", {
      params: {
        per_page: 20,
        status: "publish",
      },
    });

    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

// Search Products and Blogs
export const getSearchResults = async (keyword?: string) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_BASE_URL}/custom/v1/search`,
      {
        params: {
          keyword: keyword,
        },
      }
    );
    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

// Get 3 Bestsellers for Search Bar
export const get3BestSellers = async () => {
  try {
    const response = await wooClient.get("/products", {
      params: {
        orderby: "sales",
        order: "desc",
        per_page: 3,
        status: "publish",
      },
    });
    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

// Get Home Products
export const getHomeProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_BASE_URL}/custom/v1/home-products`
    );
    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
