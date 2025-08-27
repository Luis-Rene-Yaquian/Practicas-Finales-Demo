// src/pages/Traslados.jsx
import { NavLink } from "react-router-dom";

export default function Traslados() {
  const pathMap = {
    INICIO: "/",
    CONSEJO: "/Consejo",
    TRASLADOS: "/Traslados",
    EQUIVALENCIAS: "#",
    "CONTÁCTENOS": "#",
    PUBLICACIONES: "#",
  };
  const menu = Object.keys(pathMap);

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-blue-900 font-sans antialiased">
      {/* Sidebar (mismo estilo que Main) */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-blue-100/50 backdrop-blur border-r border-blue-200/60 p-6 overflow-y-auto">
        <div className="flex items-center justify-center mb-6">
          <img
            src="/ciencias.jpeg"
            alt="Logo Escuela de Ciencias"
            className="h-14 w-auto"
          />
        </div>

        <div className="space-y-6 text-blue-900 text-[15px] font-semibold leading-relaxed">
          <section>
            <h3 className="uppercase tracking-wide">
              Base Legal de la Fundación de la Escuela de Ciencias
            </h3>
            <div className="h-[1px] bg-blue-300/70 mt-2" />
          </section>

          <section>
            <h3 className="uppercase tracking-wide">
              Antecedentes Históricos del Departamento
            </h3>
            <div className="h-[1px] bg-blue-300/70 mt-2" />
          </section>

          <section>
            <h3 className="uppercase tracking-wide">Carreras</h3>
            <div className="h-[1px] bg-blue-300/70 mt-2" />
            <ul className="mt-2 ml-3 space-y-2 text-[14px] font-normal">
              <li>
                <a
                  href="https://dtt-ecys.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-900 hover:text-blue-700"
                >
                  Ingeniería en Sistemas
                </a>
              </li>
              <li>
                <a
                  href="https://civil.ingenieria.usac.edu.gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-900 hover:text-blue-700"
                >
                  Ingeniería Civil
                </a>
              </li>
              <li>
                <a
                  href="https://emi.ingenieria.usac.edu.gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-900 hover:text-blue-700"
                >
                  Ingeniería Mecánica Industrial
                </a>
              </li>
              <li>
                <a
                  href="https://eime.ingenieria.usac.edu.gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-900 hover:text-blue-700"
                >
                  Ingeniería Mecánica Eléctrica
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="uppercase tracking-wide">Área Técnica Complementaria</h3>
            <div className="h-[1px] bg-blue-300/70 mt-2" />
          </section>

          <section>
            <h3 className="uppercase tracking-wide">Área de Deportes</h3>
            <div className="h-[1px] bg-blue-300/70 mt-2" />
          </section>

          <section>
            <h3 className="uppercase tracking-wide">Área Social Humanística</h3>
            <div className="h-[1px] bg-blue-300/70 mt-2" />
          </section>

          <section>
            <NavLink
              to="/Idiomas"
              className={({ isActive }) =>
                `uppercase tracking-wide block ${
                  isActive ? "text-blue-700" : "text-blue-900 hover:text-blue-700"
                }`
              }
            >
              Área de Idioma Técnico
            </NavLink>
            <div className="h-[1px] bg-blue-300/70 mt-2" />
          </section>

          <section>
            <h3 className="uppercase tracking-wide">Departamentos</h3>
            <div className="h-[1px] bg-blue-300/70 mt-2" />
          </section>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-72">
        {/* Navbar superior con rutas */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-blue-200">
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-[15px] font-semibold text-blue-800">
              {menu.map((item) => (
                <NavLink
                  key={item}
                  to={pathMap[item]}
                  className={({ isActive }) =>
                    `hover:text-blue-600 ${isActive ? "text-blue-700" : ""}`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        {/* Contenido central: imagen grande */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-4">
              {/* Cambia el src por la ruta real de tu imagen de TRASLADOS */}
              <img
                src="/public/traslados.png"
                alt="Información de Traslados"
                className="w-full max-h-[80vh] object-contain mx-auto"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
