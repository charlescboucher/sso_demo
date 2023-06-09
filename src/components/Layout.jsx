import { Outlet, Link } from "react-router-dom";
import UserService from "../services/UserService";
const Layout = () => {
  const isRole1 = UserService.hasRole(['Role1']) ;
  const isRole2 = UserService.hasRole(['Role2','Admin']) ;
  const isAdmin = UserService.hasRole(['Admin','Role1','Role2'])
  ;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          {(isRole2 || isAdmin) && <li>
            <Link to="/blogs">Blogs</Link>
          </li>}
          {(isRole1 || isAdmin) && <li>
            <Link to="/contact">Contact</Link>
          </li>}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;