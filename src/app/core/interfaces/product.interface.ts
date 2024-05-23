export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    quantity: number;
    inventoryStatus: string;
    category: string;
    rating: number;
    image?: string;
  }
  