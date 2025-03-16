// lib/store/useCartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
  id: number;
  name: string;
  regular_price: number;
  price: number;
  is_beans: boolean;
  slug: string;
  quantity: number;
  image?: string;
}

// Định nghĩa kiểu dữ liệu cho state của giỏ hàng
interface CartState {
  items: Product[];
  totalItems: number;
  totalPrice: number;

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

      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            );

            return {
              items: updatedItems,
              totalItems: state.totalItems + product.quantity,
              totalPrice: state.totalPrice + product.price * product.quantity,
            };
          } else {
            // Nếu là sản phẩm mới, thêm vào giỏ hàng
            return {
              items: [...state.items, product],
              totalItems: state.totalItems + product.quantity,
              totalPrice: state.totalPrice + product.price * product.quantity,
            };
          }
        }),

      removeItem: (itemId) =>
        set((state) => {
          const itemToRemove = state.items.find((item) => item.id === itemId);

          if (!itemToRemove) return state;

          return {
            items: state.items.filter((item) => item.id !== itemId),
            totalItems: state.totalItems - itemToRemove.quantity,
            totalPrice:
              state.totalPrice - itemToRemove.price * itemToRemove.quantity,
          };
        }),

      updateQuantity: (itemId, newQuantity) =>
        set((state) => {
          const itemToUpdate = state.items.find((item) => item.id === itemId);

          if (!itemToUpdate) return state;

          const quantityDifference = newQuantity - itemToUpdate.quantity;

          const updatedItems =
            newQuantity > 0
              ? state.items.map((item) =>
                  item.id === itemId ? { ...item, quantity: newQuantity } : item
                )
              : state.items.filter((item) => item.id !== itemId); // Remove item if quantity is 0

          return {
            items: updatedItems,
            totalItems: state.totalItems + quantityDifference,
            totalPrice:
              state.totalPrice + itemToUpdate.price * quantityDifference,
          };
        }),

      clearCart: () =>
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        }),
    }),
    {
      name: "cart-storage", // tên key trong localStorage
      skipHydration: true, // để tránh lỗi hydration trong NextJS
    }
  )
);

export default useCartStore;
