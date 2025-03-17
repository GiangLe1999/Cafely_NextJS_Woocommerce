// lib/store/useCartStore.ts
import { bag_discount, pouch_discount } from "@/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
  id: number;
  name: string;
  regular_price: number;
  price: number;
  backup_price: number;
  is_beans: boolean;
  slug: string;
  quantity: number;
  image?: string;
  type: string;
}

// Định nghĩa kiểu dữ liệu cho state của giỏ hàng
interface CartState {
  items: Product[];
  totalItems: number;
  totalPrice: number;
  totalBags: number;
  totalPouch: number;

  // Các action
  addItem: (item: Product) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

// Tạo store với zustand và sử dụng middleware persist để lưu vào localStorage
const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      totalBags: 0,
      totalPouch: 0,

      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );

          let totalBags = state.totalBags;
          let totalPouch = state.totalPouch;

          if (product.type === "bag") totalBags += product.quantity;
          if (product.type === "pouch") totalPouch += product.quantity;

          // Xác định discountRate cho bag
          let bagDiscountRate = 1;
          if (
            totalBags >= bag_discount.quantity_1 &&
            totalBags < bag_discount.quantity_2
          ) {
            bagDiscountRate = bag_discount.rate_1;
          } else if (totalBags >= bag_discount.quantity_2) {
            bagDiscountRate = bag_discount.rate_2;
          }

          // Xác định discountRate cho pouch
          let pouchDiscountRate = 1;
          if (
            totalPouch >= pouch_discount.quantity_1 &&
            totalPouch < pouch_discount.quantity_2
          ) {
            pouchDiscountRate = pouch_discount.rate_1;
          } else if (totalPouch >= pouch_discount.quantity_2) {
            pouchDiscountRate = pouch_discount.rate_2;
          }

          // Cập nhật giá của tất cả sản phẩm theo loại
          const updatedItems = state.items.map((item) => {
            if (item.type === "bag") {
              return { ...item, price: item.backup_price * bagDiscountRate };
            }
            if (item.type === "pouch") {
              return { ...item, price: item.backup_price * pouchDiscountRate };
            }
            return item;
          });

          if (existingItem) {
            const newItems = updatedItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            );

            return {
              items: newItems,
              totalItems: state.totalItems + product.quantity,
              totalPrice: newItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              ),
              totalBags,
              totalPouch,
            };
          } else {
            const newProduct = {
              ...product,
              price:
                product.type === "bag"
                  ? product.backup_price * bagDiscountRate
                  : product.type === "pouch"
                  ? product.backup_price * pouchDiscountRate
                  : product.price,
            };

            const newItems = [...updatedItems, newProduct];

            return {
              items: newItems,
              totalItems: state.totalItems + product.quantity,
              totalPrice: newItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              ),
              totalBags,
              totalPouch,
            };
          }
        }),

      updateQuantity: (itemId, newQuantity) =>
        set((state) => {
          const itemToUpdate = state.items.find((item) => item.id === itemId);

          if (!itemToUpdate) return state;

          const quantityDifference = newQuantity - itemToUpdate.quantity;

          let totalBags = state.totalBags;
          let totalPouch = state.totalPouch;

          if (itemToUpdate.type === "bag") totalBags += quantityDifference;
          if (itemToUpdate.type === "pouch") totalPouch += quantityDifference;

          // Xác định discountRate cho bag
          let bagDiscountRate = 1;
          if (
            totalBags >= bag_discount.quantity_1 &&
            totalBags < bag_discount.quantity_2
          ) {
            bagDiscountRate = bag_discount.rate_1;
          } else if (totalBags >= bag_discount.quantity_2) {
            bagDiscountRate = bag_discount.rate_2;
          }

          // Xác định discountRate cho pouch
          let pouchDiscountRate = 1;
          if (
            totalPouch >= pouch_discount.quantity_1 &&
            totalPouch < pouch_discount.quantity_2
          ) {
            pouchDiscountRate = pouch_discount.rate_1;
          } else if (totalPouch >= pouch_discount.quantity_2) {
            pouchDiscountRate = pouch_discount.rate_2;
          }

          const updatedItems =
            newQuantity > 0
              ? state.items.map((item) =>
                  item.id === itemId ? { ...item, quantity: newQuantity } : item
                )
              : state.items.filter((item) => item.id !== itemId);

          // Cập nhật giá của tất cả sản phẩm theo loại
          const finalItems = updatedItems.map((item) => {
            if (item.type === "bag") {
              return { ...item, price: item.backup_price * bagDiscountRate };
            }
            if (item.type === "pouch") {
              return { ...item, price: item.backup_price * pouchDiscountRate };
            }
            return item;
          });

          return {
            items: finalItems,
            totalItems: state.totalItems + quantityDifference,
            totalPrice: finalItems.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            ),
            totalBags,
            totalPouch,
          };
        }),

      removeItem: (itemId) =>
        set((state) => {
          const itemToRemove = state.items.find((item) => item.id === itemId);

          if (!itemToRemove) return state;

          let totalBags = state.totalBags;
          let totalPouch = state.totalPouch;

          if (itemToRemove.type === "bag") totalBags -= itemToRemove.quantity;
          if (itemToRemove.type === "pouch")
            totalPouch -= itemToRemove.quantity;

          // Xác định discountRate mới cho bag
          let bagDiscountRate = 1;
          if (
            totalBags >= bag_discount.quantity_1 &&
            totalBags < bag_discount.quantity_2
          ) {
            bagDiscountRate = bag_discount.rate_1;
          } else if (totalBags >= bag_discount.quantity_2) {
            bagDiscountRate = bag_discount.rate_2;
          }

          // Xác định discountRate mới cho pouch
          let pouchDiscountRate = 1;
          if (
            totalPouch >= pouch_discount.quantity_1 &&
            totalPouch < pouch_discount.quantity_2
          ) {
            pouchDiscountRate = pouch_discount.rate_1;
          } else if (totalPouch >= pouch_discount.quantity_2) {
            pouchDiscountRate = pouch_discount.rate_2;
          }

          const updatedItems = state.items.filter((item) => item.id !== itemId);

          // Cập nhật giá của tất cả sản phẩm còn lại theo loại
          const finalItems = updatedItems.map((item) => {
            if (item.type === "bag") {
              return { ...item, price: item.backup_price * bagDiscountRate };
            }
            if (item.type === "pouch") {
              return { ...item, price: item.backup_price * pouchDiscountRate };
            }
            return item;
          });

          return {
            items: finalItems,
            totalItems: state.totalItems - itemToRemove.quantity,
            totalPrice: finalItems.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            ),
            totalBags,
            totalPouch,
          };
        }),

      clearCart: () =>
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
          totalBags: 0,
          totalPouch: 0,
        }),
    }),
    {
      name: "cart-storage",
      skipHydration: true,
    }
  )
);

export default useCartStore;
