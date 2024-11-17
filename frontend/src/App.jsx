import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Outlet renders all children */}
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-auto bg-cyan-400 px-4 py-6'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
