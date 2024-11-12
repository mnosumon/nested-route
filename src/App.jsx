import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import NestedRoute from "./components/NestedRoute";
import Myaccount from "./page/myAccount/Myaccount";
import Home from "./page/Home";
import RouteLayout from "./RouteLayout";
import Refarence from "./page/Refarence";
import About from "./page/About";
import Dashbord from "./page/myAccount/nestedElement/Dashbord";
import Download from "./page/myAccount/nestedElement/Download";
import Address from "./page/myAccount/nestedElement/Address";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/refarence" element={<Refarence />} />
        <Route path="/about" element={<About />} />
        <Route element={<Myaccount />}>
          <Route index path="/dashbord" element={<Dashbord />} />
          <Route path="/download" element={<Download />} />
          <Route path="/address" element={<Address />} />
        </Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
