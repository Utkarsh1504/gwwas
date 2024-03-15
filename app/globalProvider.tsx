import { ReactNode } from "react";
import { CartProvider } from "@/context/cart";

type GlobalProviderProps = {
  children: ReactNode;
};

export function GlobalProvider({ children }: GlobalProviderProps) {
  return <CartProvider>{children}</CartProvider>;
}
