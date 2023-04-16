import SignUp from "Pages/Auth/SignUp";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.scss";

import Home from "./Home";
import Root from "./Root";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/signUp" element={<SignUp/>} />
      </Route>
    )
  );
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
