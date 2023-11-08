import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="root-nav"></div>
      <div className="root-outlet">
        <Outlet />
      </div>
      <div className="root-nav"></div>
    </div>
  );
};

export default Root;
