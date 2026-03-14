import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 md:px-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
