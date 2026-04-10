import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="mobile_view_hamburger relative flex justify-between items-center p-4 bg-[var(--primary-color)] text-[var(--secondary-color)]">

      

      {/* BUTTON (NOT absolute anymore) */}
      <div 
        className="text-2xl cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {open ? <ImCross /> : <GiHamburgerMenu />}
      </div>

      {/* MENU (ONLY this is absolute) */}
      {open && (
        <nav className="absolute right-4 top-full mt-3 bg-[var(--bg)]  min-h-max  px-6 py-4 rounded-lg shadow-lg">
          <ul className="space-y-3">
            <li>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#profile" onClick={() => setOpen(false)}>Profile</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      )}

    </div>
  );
}