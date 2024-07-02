"use client";

import { Provider } from "react-redux";
import store from "@/app/store/store"; // Adjust the path as needed
import MainPage from "@/app/pages/mainPage/page";

export default function Home() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
