import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { About, Home, Shop } from "./pages";


function Routes() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />,
      <Route path="/shop" element={<Shop />} />,
      <Route path="/about" element={<About />} />
    </Route>
  ));


  return (
    <RouterProvider router={router} />
  )
}

export default Routes

