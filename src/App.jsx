import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 md:px-12">
        <Outlet />
      </main>
    </>
  );
}

export default App;
