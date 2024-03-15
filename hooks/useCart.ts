"use client";
import { useQuery } from "@tanstack/react-query";
import getCart from '@/app/api/index';

export default function useCart() {
  return useQuery({
    queryKey: ["getCart"],
    queryFn: () => {
      return getCart();
    },
  });
}


