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
<ul className={`nav-menu md:flex md:flex-row   max-md:absolute max-md:top-[80px] max-md: ${navToggle ? 'right-[0%]' : 'right-[-100%]'} max-md: ${navToggle ? 'flex-column' : 'hidden'}`}>
        {links.map((item) => (
          <li className="flex max-md:rounded-lg hover:from-blue-500 p-4 max-md:p-3 max-md:hover:bg-gradient-to-l from-blue-800 max-md:my-2 max-md:mx-3  hover:text-blue-100  gap-[4px] items-center flex-row " key={item.label}>
            <item.icon className="h-[10px]"size={20} color="white" />{" "}
            {/* Render the icon component directly */}
            <Link  className=" md:text-xl max-md:text-lg text-blue-200"to={item.to || item.path}>{item.label}</Link>{" "}
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
    <nav className=" reltive top-0  flex flex-row  z-20 bg-gradient-to-l from-blue-800  h-[80px] bg--400 justify-between   items-center px-[10px] py-2">
      <div className="navbar-icon px-2">
        <Link to="/">
          <FaCode size={30} color="cyan" />
        </Link>
      </div>
      <div className="">{renderLinks(links)}</div>
      <div className="  hidden max-md:block" onClick={handleToggle}>
        {navToggle ? (
          <FaTimes size={20} color="white" />
        ) : (
          <FaBars size={20} color="white" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
