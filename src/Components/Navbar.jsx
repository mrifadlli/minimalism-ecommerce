import { React } from "react";

function Navbar() {
  //   const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex  items-center justify-between bg-[#eeeeee] shadow ">
      <div className="container w-[90%] mx-auto flex flex-wrap items-center justify-between">
        <a href="Home">Logo</a>
      </div>
    </nav>
  );
}

export default Navbar;
