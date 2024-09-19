import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { PriceDetailsProvider } from "./components/context/PriceDetailsProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PriceDetailsProvider>
        <App />
      </PriceDetailsProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
