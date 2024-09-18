import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({ IsActive }) => (IsActive ? "Active-Link" : null)}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ IsActive }) => (IsActive ? "Active-Link" : null)}
        to={"/Acerca"}
      >
        Acerca
      </NavLink>
      <NavLink
        className={({ IsActive }) => (IsActive ? "Active-Link" : null)}
        to={"/Productos"}
      >
        Productos
      </NavLink>
      <NavLink
        className={({ IsActive }) => (IsActive ? "Active-Link" : null)}
        to={"/Servicios"}
      >
        Servicios
      </NavLink>
    </nav>
  );
};

export default Menu;
