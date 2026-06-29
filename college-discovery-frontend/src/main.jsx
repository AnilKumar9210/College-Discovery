import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { AuthProvider } from "./Context/AuthContext";
import { SavedCollegesProvider } from "./Context/SavedCollegesContext";
import { CompareProvider } from "./Context/CompareContext";

import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <QueryClientProvider
      client={queryClient}
    >
      <BrowserRouter>
      <CompareProvider>
        <AuthProvider>
          <SavedCollegesProvider>
            <App />
            <Toaster position="top-right" toastOptions={{duration:3000,}} />
          </SavedCollegesProvider>
        </AuthProvider>
        </CompareProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);