export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  menu_order: number;
  count: number;
}
