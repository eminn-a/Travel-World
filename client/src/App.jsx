// App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./data/configToaster";

import RouterLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import DestinationCreatePage from "./pages/DestinationCreatePage";
import Page404 from "./components/404/404Page";
import DestinationDetailsPage from "./pages/DestinationDetailsPage";
import DestinationEditPage from "./pages/DestinationEditPage";
import BlogsPage from "./pages/BlogsPage";
import BlogCreatePage from "./pages/BlogCreatePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import AuthGuard from "./guards/AuthGuard";
import DestinationsCatalogPage from "./pages/DestinationsCatalogPage";
import BlogEditPage from "./pages/BlogEditPage";

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
        { path: "catalog", element: <DestinationsCatalogPage /> },
        { path: "catalog/:id", element: <DestinationDetailsPage /> },
        { path: "blogs", element: <BlogsPage /> },
        { path: "blogs/:id", element: <BlogDetailsPage /> },
        {
          element: <AuthGuard />,
          children: [
            { path: "createDestination", element: <DestinationCreatePage /> },
            { path: "editDestination/:id", element: <DestinationEditPage /> },
            { path: "editBlog/:id", element: <BlogEditPage /> },
            { path: "createBlog", element: <BlogCreatePage /> },
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
