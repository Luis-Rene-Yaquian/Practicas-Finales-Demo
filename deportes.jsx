// TechnicalLanguagesPage.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// --- Placeholders básicos ---
const Card = ({ children, className }) => (
  <div className={`border rounded p-4 ${className}`}>{children}</div>
);
const CardContent = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);
const SidebarProvider = ({ children }) => <>{children}</>;
const Sidebar = ({ children, className }) => (
  <div className={`w-64 ${className}`}>{children}</div>
);
const SidebarContent = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);
const SidebarGroup = ({ children }) => <div>{children}</div>;
const SidebarGroupContent = ({ children }) => <div>{children}</div>;
const SidebarGroupLabel = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);
const SidebarHeader = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);
const SidebarMenu = ({ children }) => <ul>{children}</ul>;
const SidebarMenuItem = ({ children }) => <li>{children}</li>;
const SidebarMenuButton = ({ children, className, onClick }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);
const SidebarTrigger = ({ className }) => <button className={className}>☰</button>;

// --- Iconos simples ---
const Languages = () => <span>🌐</span>;

// --- Datos ---
const technicalLanguages = [
  { id: "idioma1", name: "Deportes 1", icon: "📚" },
  { id: "idioma2", name: "Deportes 2", icon: "📖" },
];
const mainNavigationItems = [
  "INICIO",
  "CONSEJO",
  "TRASLADOS",
  "EQUIVALENCIAS",
  "CONTÁCTENOS",
  "PUBLICACIONES",
];

// --- Iconos del segundo código ---
const Book = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M4 6a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6Z" stroke="#2563eb" strokeWidth="2" />
    <path d="M8 7h7M8 10h7M8 13h5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const Layers = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
    <path d="m3 12 9 5 9-5" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
    <path d="m3 16 9 5 9-5" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
const Paper = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="#2563eb" strokeWidth="2" />
    <path d="M14 3v5h5" stroke="#2563eb" strokeWidth="2" />
    <path d="M9 12h6M9 16h6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const Cap = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="m12 5 10 5-10 5L2 10l10-5Z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
    <path d="M7 12v4c2.5 2 7.5 2 10 0v-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LevelCard = ({ Icon, title, subtitle }) => (
  <div className="px-6 py-5 bg-white border border-blue-200 rounded-xl shadow-sm hover:shadow transition">
    <div className="flex items-center gap-3">
      <div className="shrink-0 rounded-lg bg-blue-50 p-2"><Icon /></div>
      <div>
        <p className="font-semibold text-blue-900">{title}</p>
        <p className="text-xs text-blue-900/70">{subtitle}</p>
      </div>
    </div>
  </div>
);
const LinkRow = ({ label, href = "#", note }) => (
  <a
    href={href}
    className="block w-full text-left px-4 py-2.5 rounded-lg border border-blue-200 hover:bg-blue-50 text-sm text-blue-900/90"
  >
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span className="text-blue-600">↗</span>
    </div>
    {note && <p className="text-xs text-blue-900/70 mt-1">{note}</p>}
  </a>
);
const Badge = ({ children }) => (
  <span className="inline-block text-xs px-2.5 py-1 rounded-md border border-blue-200 bg-blue-50 text-blue-800">
    {children}
  </span>
);

export default function Deportes() {
  const [activeNavItem, setActiveNavItem] = useState("INICIO");
  const [activeLanguage, setActiveLanguage] = useState("");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white">
        {/* --- Sidebar --- */}
        <Sidebar className="border-r border-blue-200 bg-blue-50">
          <SidebarHeader className="p-4 bg-blue-700 text-white flex items-center gap-3">
            <Languages />
            <span>ESCUELA DE CIENCIAS</span>
          </SidebarHeader>
          <SidebarContent className="p-4 bg-blue-50">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium text-blue-700 px-3 bg-blue-100 py-2">
                ÁREA DE Deportes
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {technicalLanguages.map((language) => (
                    <SidebarMenuItem key={language.id}>
                      <SidebarMenuButton
                        onClick={() => setActiveLanguage(language.id)}
                        className={`text-sm py-2 px-3 block w-full text-left ${activeLanguage === language.id
                          ? "bg-blue-100 text-blue-800"
                          : "text-blue-700"
                          }`}
                      >
                        {language.icon} {language.name}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>

              <SidebarGroupLabel className="text-xs font-medium text-blue-700 px-3 bg-blue-100 py-2">
                              <NavLink to="/PersonalDocente" className="text-xs font-medium text-blue-700 px-3 bg-blue-100 py-2">
                Personal Docente
              </NavLink>
            </SidebarGroupLabel>

            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* --- Contenido principal --- */}
        <div className="flex-1 flex flex-col">
          {/* Navbar superior */}
          <header className="bg-white border-b border-blue-200 px-6 py-4 flex items-center justify-between">
            <SidebarTrigger className="text-blue-700" />
            <div className="flex gap-3">
              {mainNavigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNavItem(item)}
                  className={`px-3 py-2 rounded ${activeNavItem === item
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-blue-600"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </header>

          {/* Hero */}
          <section className="relative h-[260px] w-full overflow-hidden">
            <img
              src="/idiomas-hero.jpg"
              alt="Idiomas Técnicos"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "/fiusac03.jpg"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/30" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
              <div className="text-white">
                <p className="uppercase tracking-wide text-sm opacity-90">Idiomas Técnicos</p>
                <h1 className="text-3xl md:text-4xl font-extrabold mt-1">Área de Deportes</h1>
                <p className="mt-3 max-w-3xl opacity-95">
                  Desarrollamos competencias lingüísticas especializadas en terminología científica y técnica
                  para entornos académicos y laborales internacionales.
                </p>
              </div>
            </div>
          </section>


          {/* Secciones con tarjetas */}
          <main className="flex-1 p-8 bg-gray-50">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
              {/* Columna izquierda */}
              <div className="space-y-6">
                <div className="bg-white border border-blue-200 rounded-2xl shadow-sm p-5">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Programas y Recursos</h3>
                  <div className="space-y-3">
                    <LinkRow label="Programas de Estudio" note="Acceso a los planes vigentes (Google Drive)" />
                    <LinkRow label="Historial por Semestre" note="Consulta del historial académico por ciclo" />
                  </div>
                </div>

                <div className="bg-white border border-blue-200 rounded-2xl shadow-sm p-5">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Marco Común Europeo</h3>
                  <p className="text-sm text-blue-900/80 mb-3">
                    Nuestros cursos están alineados al MCER para garantizar estándares internacionales de calidad y reconocimiento.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>A1-A2 Básico</Badge>
                    <Badge>B1-B2 Intermedio</Badge>
                    <Badge>C1-C2 Avanzado</Badge>
                  </div>
                </div>

                <div className="bg-white border border-blue-200 rounded-2xl shadow-sm p-5">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Examen de Ubicación</h3>
                  <p className="text-sm text-blue-900/80">
                    Evaluación diagnóstica que determina el nivel de competencia del estudiante.
                  </p>
                  <div className="mt-4">
                  </div>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="space-y-6">
                <div className="bg-white border border-blue-200 rounded-2xl shadow-sm p-5">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Información de Exámenes</h3>
                  <div className="space-y-3">
                    <LinkRow label="Exámenes por Suficiencia" />
                    <LinkRow label="Examen Único (historial disponible)" />
                    <LinkRow label="Examen de Ubicación" />
                  </div>
                </div>

                <div className="bg-white border border-blue-200 rounded-2xl shadow-sm p-5">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Contacto y Atención</h3>
                  <div className="text-sm text-blue-900/90 space-y-1">
                    <p><span className="font-semibold">Oficina de Deportes</span></p>
                    <p>Edificio T-2, 3er Nivel, Aula 201 — Ciudad Universitaria Zona 12</p>
                    <p>idiomatecnico@usac.edu.gt</p>
                    <p>Horario: Lunes a Viernes 8:00–16:00</p>
                  </div>
                </div>


              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}