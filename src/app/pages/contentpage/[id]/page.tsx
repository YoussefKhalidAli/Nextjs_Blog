"use client";

// Imported utilities
import { Provider } from "react-redux";

// Imported redux store
import store from "@/app/store/store";

// Imported components
import Content from "@/app/components/Content/Content";

// Interface of props
interface PageProps {
  params: {
    id: Number;
  };
}

// Display content page
const page = ({ params }: PageProps) => {
  return (
    <Provider store={store}>
      <Content id={params.id} />
    </Provider>
  );
};

export default page;
