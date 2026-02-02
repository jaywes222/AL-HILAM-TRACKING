import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";
import { ErrorBoundary } from ".";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-phone-number-input/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <Toaster position="top-right" reverseOrder={false} />
              <RouterProvider
                router={router}
                future={{
                  v7_startTransition: true,
                }}
              />
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
