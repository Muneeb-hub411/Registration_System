import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";
import { useAuth } from "./Context/AuthContext";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const Nav = [
    { id: 1, link: "About" },
    { id: 2, link: auth.user.Status ? "Registered" : "Register now" },
  ];
  return (
    <div className="w-full bg-custom-gradient h-20 text-white flex items-center justify-between ">
      <div>
        <CDropdown>
          <CDropdownToggle style={{ fontSize: "1.5rem", color: "white" }}>
            {auth.user.name}
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={() => {
                setAuth(null);
                navigate("/login");
              }}
            >
              Logout
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      <ul className="sm:flex hidden ">
        {auth.user.role == 0
          ? Nav.map(({ id, link }) => (
              <li
                key={id}
                className="p-4 text-2xl font-DM cursor-pointer  hover:scale-105 transition-transform duration-200"
              >
                <Link to={link} smooth duration={300}>
                  {link}
                </Link>
              </li>
            ))
          : null}
      </ul>
      <div
        className="sm:hidden z-10 cursor-pointer pr-4  "
        onClick={() => setMenu(!menu)}
      >
        {menu ? <ImCross size={30} /> : <FaHamburger size={30} />}
      </div>
      {menu && (
        <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-custom-gradient  text-white font-DM">
          {Nav.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl">
              <Link
                onClick={() => setMenu(!menu)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
