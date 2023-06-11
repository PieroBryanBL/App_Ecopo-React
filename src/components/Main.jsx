import React from "react";
import ForestIcon from "@mui/icons-material/Forest";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { ParallaxBanner } from "react-scroll-parallax";

const Main = () => {
  return (
    <>
      <main>
        {/* Puntos clave */}
        <section
          id="keys"
          className="flex flex-col w-9/12 mx-auto my-16 gap-10"
        >
          <h2 className="font-extrabold text-[2.35rem]">
            Nuestros puntos clave
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <AddReactionIcon
                className="my-3 text-[#19b66a]"
                fontSize="medium"
              />
              <h3 className="font-bold text-xl">Vivir sosteniblemente</h3>
              <p>
                Descubre prácticas para reducir tu huella ambiental y preservar
                nuestro planeta.
              </p>
            </div>
            <div>
              <ForestIcon className="my-3 text-[#19b66a]" fontSize="medium" />
              <h3 className="font-bold text-xl">Recursos eco-amigables</h3>
              <p>
                Encuentra guías y consejos para un estilo de vida más consciente
                con el medio ambiente.
              </p>
            </div>
            <div>
              <LibraryBooksIcon
                className="my-3 text-[#19b66a]"
                fontSize="medium"
              />
              <h3 className="font-bold text-xl">Historias inspiradoras</h3>
              <p>
                Descubre proyectos y personas que están marcando la diferencia
                en la conservación ambiental.
              </p>
            </div>
          </div>
        </section>

        {/* Frase */}
        <ParallaxBanner
          layers={[
            { image: "./bg-section-01.webp", speed: -20 },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-[2rem] text-center md:text-6xl lg:text-7xl text-white font-thin">
                    La <b>naturaleza</b> nos <b>conecta</b>
                  </h1>
                </div>
              ),
            },
          ]}
          className="aspect-[2/1] h-[400px]"
        />

        {/* Recursos */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-20 w-9/12 mx-auto gap-10">
            <div className="w-full lg:h-[600px]">
              <ParallaxBanner
                layers={[{ image: "./bg-section-02.webp", speed: -15 }]}
                className="w-full h-full aspect-[2/1]"
              />
            </div>

            <div className="flex flex-col gap-10 justify-center">
              <h3 className="text-4xl font-bold">Recursos</h3>
              <p>
                Descubre una amplia gama de recursos en nuestra sección de
                Recursos. Encuentra guías prácticas, informes impactantes,
                infografías educativas y videos inspiradores sobre temas
                ambientales. Desde consejos para reducir el desperdicio hasta
                soluciones innovadoras para la energía renovable, nuestros
                recursos te ayudarán a tomar medidas concretas hacia un estilo
                de vida más sostenible. Haz clic en el botón a continuación para
                explorar nuestra colección y comenzar a marcar la diferencia hoy
                mismo.
              </p>
              <div>
                <button className="text-white bg-[#101828] px-3 py-2 rounded-[4px]">
                  Ver Recursos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col justify-center items-center gap-5 my-24 w-10/12 lg:w-5/12 mx-auto">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <h3 className="text-4xl font-bold">¡Lea nuestros articulos!</h3>
            <p className="opacity-60">
              ¡Lean nuestros artículos y descubran cómo marcar la diferencia en
              el medio ambiente! Desde consejos prácticos hasta información
              inspiradora, nuestra colección de artículos les brinda ideas y
              soluciones para vivir de manera más sostenible.{" "}
              <b>
                ¡Empiecen a leer y sean parte del cambio positivo hoy mismo!
              </b>
            </p>
          </div>

          <div>
            <button className="text-white bg-[#101828] px-3 py-2 rounded-[4px]">
              Leer Blog
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
