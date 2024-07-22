import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { About, Home, Shop } from "./pages";
import Layout from "./Layout";


function Routes() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />,
      <Route path="/shop" element={<Shop />} />,
      <Route path="/about" element={<About />} />,
      <Route path="*" element={(<div> Not Found</div>)} />
    </Route>
  ));


  return (
    <RouterProvider router={router} />
  )
}

export default Routes

