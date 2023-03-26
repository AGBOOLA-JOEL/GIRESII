import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.scss";

import Home from "./Home";
import Login from "./Pages/Auth/Login";
import Root from "./Root";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
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
