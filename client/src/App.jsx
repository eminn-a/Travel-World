import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { toastOptions } from "./data/configToaster";
import RouterLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      // errorElement: <>404 page not found</>,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contacts",
          element: <ContactsPage />,
        },
        {
          path: "catalog",
          element: <CatalogPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster {...toastOptions} />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
