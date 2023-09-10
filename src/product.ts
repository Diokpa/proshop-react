
export interface Product {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: ProductData[];
}

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productType: string;
  productBrand: string;
}
