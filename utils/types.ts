import { z } from "zod";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export const cardSchema = z.object({
  cardNumber: z.string().refine((value) => /^\d{16}$/.test(value), {
    message: "Invalid card number. e.g - 16-digit numeric value.",
  }),
  expiryTime: z.string().refine((value) => /^\d{2}\/\d{2}$/.test(value), {
    message: "Invalid expiry time. e.g - MM/YY.",
  }),
  cvv: z.string().refine((value) => /^\d{3,4}$/.test(value), {
    message: "Invalid CVV. e.g - 3 numeric value.",
  }),
});

export type PaymentMethod = "UPI" | "CARDS";

export type StoreData = {
  products: Product[];
  paymentMethods: PaymentMethod[];
};

export type CardSchema = z.infer<typeof cardSchema>;
