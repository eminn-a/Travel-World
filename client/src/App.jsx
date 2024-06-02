import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { toastOptions } from "./data/configToaster";

import RouterLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import CatalogPage from "./pages/CatalogPage";
import CreateDestinationPage from "./pages/CreateDestination";
import Page404 from "./components/404/404Page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      errorElement: <Page404 />,
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
        {
          path: "create",
          element: <CreateDestinationPage />,
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
