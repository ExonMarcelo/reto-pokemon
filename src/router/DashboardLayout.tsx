import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        {/* <Link to="/dashboard/list">Listado</Link> |{" "}
        <Link to="/dashboard/detail/1">Detalle</Link> */}
        <h1 className="text-2xl">¡Bienvenido al mundo Pokemon!</h1>
      </nav>
      <hr />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;