import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isNavActive, setTurnNav] = useState(false);
  const handleNavbar = () => {
    setTurnNav(!isNavActive);
  };
  return (
    <>
      <header className="h-screen bg-Ecopo bg-center exposed-image bg-cover">
        {/* Contenedor Nav */}
        <div className="flex justify-between items-center w-11/12 lg:w-9/12 lg:mx-auto py-8">
          {/* Logo */}
          <div className="w-fit">
            <a href="index.html">
              <img
                src="logo-white.webp"
                alt="Logo de Ecopo"
                className="w-[210px] h-[36px] object-cover animate__animated animate__fadeInDown"
              />
            </a>
          </div>

          {/* Navegacion */}
          <nav className="flex justify-center items-center ">
            <button className="lg:hidden" onClick={handleNavbar}>
              <MenuIcon
                className="text-white animate__animated animate__fadeInDown"
                fontSize="medium"
              />
            </button>

            <ul
              className={`top-[230px] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#101828] rounded-[8px] text-center w-11/12 py-8 flex gap-3 flex-col shadow-2xl lg:w-full lg:flex-row lg:text-left lg:relative lg:top-11 lg:bg-transparent lg:text-white absolute text-white lg:gap-5 lg:opacity-100 ${
                isNavActive
                  ? "opacity-100 transition-all"
                  : "hidden lg:flex transition-all"
              }`}
            >
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Recursos</a>
              </li>
              <li>
                <a href="">Directorio</a>
              </li>
              <li>
                <a href="">Acerca de mi</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero */}
        <section className="flex flex-col w-9/12 h-full justify-center text-white mx-auto">
          <div className="flex flex-col w-full gap-2">
            <h1 className="font-extrabold text-3xl md:text-5xl lg:text-7xl">
              Descubre un mundo sostenible
            </h1>
            <p className="text-xl">
              Explora la sostenibilidad ambiental y únete a nuestra <br />{" "}
              comunidad para un futuro más verde.
            </p>
          </div>

          <div className="py-8">
            <a
              href="#keys"
              className="font-bold  tracking-wider uppercase bg-[#0000003c] p-3 rounded-[8px]"
            >
              <span
                className="w-[30px] mx-1 mr-2 border
              border-white"
              ></span>{" "}
              Descubre
            </a>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
