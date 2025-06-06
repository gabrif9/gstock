import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import build from "next/dist/build";

export interface User {
  userId: string;
  name: string;
  email: string;
}

export interface NewProduct {
  name: string
  price: number
  rating?: number
  stockQuantity: number
}

export interface Product {
  productId: string
  name: string
  price: number
  rating?: number
  stockQuantity: number
}

export interface SalesSummary {
  salesSummaryId: string
  totalValue: number
  changePercentAge: number
  date: string
}

export interface PurchaseSummary {
  purchaseSummaryId: string
  totalPurchased: number
  changePercentAge?: number
  date: string
}

export interface ExpenseSummary {
  expenseSummaryId: string
  totalExpenses: number
  date: string
}

export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: string
  date: string
  category: string
  amount: string
}

export interface DashboardMetrics {
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"]
        }),
        getProducts: build.query<Product[], string | void>({
            query: (search) => ({
              url: "/products",
              params: search ? { search } : {}
            }),
            providesTags: ["Products"]
        }),
        createProducts: build.mutation<Product, NewProduct>({
          query: (newProduct) => ({
              url: "/products",
              method: "POST",
              body: newProduct
            }),
            invalidatesTags: ["Products"]
        }),
        getUsers: build.query<User[], void>({
            query: () => "/users",
            providesTags: ["Users"]
        }),
        getExpensesByCategory: build.query<ExpenseByCategorySummary[], void>({
            query: () => "/expenses",
            providesTags: ["Expenses"]
        }),
    }),
})

export const { 
  useGetDashboardMetricsQuery, 
  useGetProductsQuery, 
  useCreateProductsMutation, 
  useGetUsersQuery,
  useGetExpensesByCategoryQuery
} = api;