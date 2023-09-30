import { Link } from "react-router-dom";
import {
  FaFileCode,
  FaCode,
  FaDesktop,
  FaEnvelope,
  FaHome,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
  const links = [
    { icon: FaHome, label: "HOME", to: "/" },
    { icon: FaUser, label: "ABOUT", to: "/about" },
    { icon: FaCode, label: "SKILLS", to: "/skills" },
    { icon: FaDesktop, label: "PORTFOLIO", to: "/portfolio" },
    { icon: FaFileCode, label: "RESUME", path: "/resume" },
    { icon: FaEnvelope, label: "CONTACT", path: "/contact" },
  ];

  const renderLinks = (links) => {
    return (
      <ul className="flex p-2 flex-row max-md:hidden relative items-center gap-[15px] ">
        {links.map((item) => (
          <li className="flex transition-all hover:bg-slate-700 p-5 hover:border-b-2  gap-[4px] items-center flex-row " key={item.label}>
            <item.icon className="h-[10px]"size={20} color="white" />{" "}
            {/* Render the icon component directly */}
            <Link  className=" text-2xl max-md:text-lg text-sky-100"to={item.to || item.path}>{item.label}</Link>{" "}
            {/* Render the Link with label */}
          </li>
        ))}
      </ul>
    );
  };
  const [navToggle, setNavToggle] = useState(false);
  const handleToggle = () => {
    setNavToggle(!navToggle);
  };
  return (
    <nav className="   flex flex-row  h-[80px] bg-slate-400 justify-between   items-center px-[10px] py-2">
      <div className="navbar-icon px-2">
        <Link to="/">
          <FaCode size={50} color="cyan" />
        </Link>
      </div>
      <div className="">{renderLinks(links)}</div>
      <div className="  hidden max-md:block" onClick={handleToggle}>
        {navToggle ? (
          <FaTimes size={30} color="white" />
        ) : (
          <FaBars size={30} color="white" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
