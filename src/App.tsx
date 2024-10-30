import { Route, Routes } from "react-router-dom"
import Formulario from "./components/Formulario"
import Anwser from "./pages/Anwser"

function App() {

  return (
    <>
      <Routes>
        <Route path="/pqrs-dnda/" element={<Formulario />} />
        <Route path="/create" element={<Anwser />} /> 
      </Routes>
    </>
  )
}

export default App
