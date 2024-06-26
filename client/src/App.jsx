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
import BlogDetailsPage from "./pages/BlogDetailsPage";
import AuthGuard from "./guards/AuthGuard";

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
        { path: "blogs", element: <BlogsPage /> },
        { path: "blogs/:id", element: <BlogDetailsPage /> },
        {
          element: <AuthGuard />,
          children: [
            { path: "createDestination", element: <CreateDestinationPage /> },
            { path: "editDestination/:id", element: <EditDestinationPage /> },
            { path: "createBlog", element: <CreateBlogPage /> },
          ],
        },
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
