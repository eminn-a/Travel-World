// App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./data/configToaster";

import RouterLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import CatalogPage from "./pages/CatalogPage";
import CreateDestinationPage from "./pages/CreateDestinationPage";
import Page404 from "./components/404/404Page";
import DestinationDetailsPage from "./pages/DestinationDetailsPage";
import EditDestinationPage from "./pages/EditDestinationPage";
import BlogsPage from "./pages/BlogsPage";
import CreateBlogPage from "./pages/CreateBlogPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contacts", element: <ContactsPage /> },
        { path: "catalog", element: <CatalogPage /> },
        { path: "catalog/:id", element: <DestinationDetailsPage /> },
        { path: "createDestination", element: <CreateDestinationPage /> },
        { path: "createBlog", element: <CreateBlogPage /> },
        { path: "edit/:id", element: <EditDestinationPage /> },
        { path: "blogs", element: <BlogsPage /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster {...toastOptions} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
