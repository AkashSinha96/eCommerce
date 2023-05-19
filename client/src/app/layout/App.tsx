import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" ? (
        <Header />
      ) : (
        <></>
      )}
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default App;
