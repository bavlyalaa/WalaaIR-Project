import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./services/AuthProvider.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </AuthProvider>
  </QueryClientProvider>
);
