import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import TechnicalLanguagesPage from "./pages/IT";
import Deportes from "./pages/deportes";
import Consejo from "./pages/Consejo";
import Traslados from "./pages/Traslados";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Idiomas" element={<TechnicalLanguagesPage />} />
          <Route path="/Deportes" element={<Deportes />} />
          <Route path="/Consejo" element={<Consejo />} />
          <Route path="/Traslados" element={<Traslados />} /> 
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;