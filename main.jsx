// src/App.jsx
import { Play } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Main() {
  const menu = [
    "INICIO",
    "CONSEJO",
    "TRASLADOS",
    "EQUIVALENCIAS",
    "CONTÁCTENOS",
    "PUBLICACIONES",
  ];

  // Iconos planos (SVG inline) — estilo simple y consistente
  const IconFlag = () => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 8v32"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 10h16c2 0 3 1 4 2l2 2c1 1 2 2 4 2h6v14h-6c-2 0-3-1-4-2l-2-2c-1-1-2-2-4-2H12V10z"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
  const IconTarget = () => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="16" stroke="#2563eb" strokeWidth="3" />
      <circle cx="24" cy="24" r="9" stroke="#2563eb" strokeWidth="3" />
      <circle cx="24" cy="24" r="3" fill="#2563eb" />
    </svg>
  );
  const IconEye = () => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 24s7-10 20-10 20 10 20 10-7 10-20 10S4 24 4 24z"
        stroke="#2563eb"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <circle
        cx="24"
        cy="24"
        r="6"
        stroke="#2563eb"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="24" cy="24" r="2.5" fill="#2563eb" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-blue-900 font-sans antialiased">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-blue-100/50 backdrop-blur border-r border-blue-200/60 p-6 overflow-y-auto">
        <div className="flex items-center justify-center mb-6">
          <img
            src="/ciencias.jpeg"
            alt="Logo Escuela de Ciencias"
            className="h-14 w-auto"
          />
        </div>

        {/* Secciones estilo minimalista con separadores */}
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

            {/* Submenú de Ingenierías con links externos */}
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
                  Ingeniería Mecanica Industrial
                </a>
              </li>
              <li>
                <a
                  href="https://eime.ingenieria.usac.edu.gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-900 hover:text-blue-700"
                >
                  Ingeniería Mecanica Eléctrica
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="uppercase tracking-wide">
              Área Técnica Complementaria
            </h3>
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
                  isActive
                    ? "text-blue-700"
                    : "text-blue-900 hover:text-blue-700"
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
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-blue-200">
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-[15px] font-semibold text-blue-800">
              {menu.map((m) => (
                <a key={m} href="#" className="hover:text-blue-600">
                  {m}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="relative h-[420px] w-full overflow-hidden">
          <img
            src="/fiusac03.jpg"
            alt="FIUSAC"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/45" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex items-center"></div>
        </section>

        {/* Misión, Visión y Objetivos (con iconos planos) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-2">
                <IconTarget />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Misión
              </h3>
              <p className="text-[15px] text-blue-900/90 leading-relaxed">
                Formar profesionales competentes en las áreas de ciencias
                exactas y naturales, contribuyendo al desarrollo científico y
                tecnológico del país mediante la investigación, la docencia y la
                extensión universitaria.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-2">
                <IconEye />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Visión
              </h3>
              <p className="text-[15px] text-blue-900/90 leading-relaxed">
                Ser reconocida como la institución líder en la formación de
                profesionales en ciencias, con excelencia académica y compromiso
                social, contribuyendo al desarrollo sostenible de Guatemala y la
                región.
              </p>
            </div>

            {/* Objetivos */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-2">
                <IconFlag />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Objetivos
              </h3>
              <ul className="space-y-2 text-[15px] text-blue-900/90 text-left mx-auto max-w-[26rem]">
                <li>• Formar profesionales competentes en ciencias</li>
                <li>• Promover la investigación científica</li>
                <li>• Contribuir al desarrollo tecnológico</li>
                <li>• Fomentar la excelencia académica</li>
                <li>• Servir a la sociedad guatemalteca</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Video de Bienvenida */}
        <section className="py-16 bg-[#f7f9ff]">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-8">
              Video de Bienvenida
            </h3>
            <div className="bg-white/90 border border-blue-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="relative aspect-video">
                <img
                  src="/videointro.png"
                  alt="Video Intro"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/35" />
                <button className="absolute left-1/2 -translate-x-1/2 bottom-6 px-4 py-2 rounded-lg bg-white text-blue-900 shadow flex items-center gap-2">
                  <Play className="w-5 h-5" /> Reproducir Video
                </button>
              </div>
              <div className="p-6 text-center text-blue-900/90">
                <a className="font-semibold text-blue-800" href="#!">
                  Bienvenidos a la Escuela de Ciencias
                </a>
                <p className="mt-2 text-[15px]">
                  Conoce nuestra historia, misión y el compromiso con la
                  excelencia académica en la formación de profesionales en las
                  áreas de ciencias exactas y naturales.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
