import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B0D17]">
        {/* Container Footer */}
        <div className="flex flex-col justify-center items-center gap-5 py-10">
          <div className="w-[150px] h-[44px]">
            <img
              src="./logo-white.webp"
              alt="Logo Ecopo"
              className="w-full h-full object-cover"
            />
          </div>
          <nav>
            <ul className="flex gap-3 flex-wrap text-center justify-center items-center text-white">
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

        {/* Barra inferior */}
        <div className="flex flex-wrap justify-between w-10/12 mx-auto py-8 text-white opacity-80 border-t border-white border-opacity-30">
          <p>© 2023 PIXO. All rights reserved</p>
          <p className="flex gap-3">
            <LinkedInIcon />
            <GitHubIcon />
            <TwitterIcon />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
