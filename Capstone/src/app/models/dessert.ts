// export type ProductRequest = {
//   dateOfOrder?: string;
//   customerName?: string;
//   customerEmail?: string;
//   customerPhone?: string;
//   name?: string;
//   totalAmount?: number;
//   quantity?: number;
//   street?: string;
//   city?: string;
//   postalCode?: string;
//   state?: string;
//   country?: string;
// };
// models/dessert.ts
// models/dessert.ts
export type Products = {
  id?: number;
  productName?: string;
  image?: string;
  ingredients?: string;
  rating?: number;
  price?: number;
  categories?: string;
};
