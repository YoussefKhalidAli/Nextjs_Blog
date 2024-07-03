"use client";

// Imported utilities
import { Provider } from "react-redux";

// Imported redux store
import store from "@/app/store/store";

// Imported components
import MainPage from "@/app/pages/mainPage/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    // Redux store and React query providers
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    </Provider>
  );
}
