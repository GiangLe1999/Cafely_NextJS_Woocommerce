export interface Product {
  id: number; // ID của sản phẩm
  name: string; // Tên sản phẩm
  slug: string; // Đường dẫn (slug)
  description: string; // Mô tả sản phẩm
  short_description: string; // Mô tả ngắn
  price: string; // Giá sản phẩm (chuỗi để xử lý các định dạng tiền tệ)
  regular_price: string; // Giá thông thường
  sale_price: string; // Giá giảm
  stock_status: "instock" | "outofstock" | "onbackorder"; // Trạng thái kho hàng
  total_sales: number; // Tổng số lần bán
  images: Array<{
    id: number; // ID của ảnh
    src: string; // Đường dẫn ảnh
    alt: string; // Văn bản thay thế cho ảnh
  }>; // Danh sách hình ảnh
  categories: Array<{
    id: number; // ID danh mục
    name: string; // Tên danh mục
    slug: string; // Slug của danh mục
  }>; // Danh sách danh mục sản phẩm
  tags: Array<{
    id: number; // ID tag
    name: string; // Tên tag
    slug: string; // Slug của tag
  }>; // Danh sách tag sản phẩm
  date_created: string; // Ngày tạo sản phẩm
  date_modified: string; // Ngày sửa sản phẩm
  permalink: string; // Đường dẫn đầy đủ tới sản phẩm
  on_sale: boolean; // Sản phẩm có đang giảm giá không
  average_rating: string;
  rating_count: number;
}