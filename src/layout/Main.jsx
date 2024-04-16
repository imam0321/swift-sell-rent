import { Outlet } from "react-router-dom";
import NavBer from "../pages/shared/NavBar/NavBer";


const Main = () => {
  return (
    <>
      <NavBer></NavBer>
      <Outlet></Outlet>
    </>
  );
};

export default Main;