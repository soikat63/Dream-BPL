import { useState } from "react";
import Currency from "../../assets/Currency.png";
import Nav_logo from '../../assets/Nav-Logo.png'


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar py-4 relative w-[100%] lg:max-w-10/12 px-5 md:px-9  lg:px-0 mx-auto">
      {/* LEFT */}
      <div className="flex-1">
        <a href="#">
          <img src={Nav_logo} alt="Nav_logo" />
        </a>
      </div>

      {/* RIGHT */}
      <div className="flex-none flex items-center gap-4">
        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-6 font-medium">
          <li>
            <a className="hover:text-primary cursor-pointer">Home</a>
          </li>
          <li>
            <a className="hover:text-primary cursor-pointer">About</a>
          </li>
          <li>
            <a className="hover:text-primary cursor-pointer">Contact</a>
          </li>
        </ul>

        {/* COINS BUTTON */}
        <button className="flex items-center gap-2 font-bold text-xl">
          0 Coins
          <img src={Currency} alt="Currency" className="w-6" />
        </button>

        {/* MOBILE ICON */}
        {/* <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
          {open ? <RxCross1 />: <HiOutlineMenu />}
        </button>  */}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md lg:hidden z-50">
          <ul className="flex flex-col p-4 gap-4 font-medium">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
