import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import About from "./About";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
