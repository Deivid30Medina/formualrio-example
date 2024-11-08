import { Route, Routes } from "react-router-dom"
import Formulario from "./components/Formulario"

function App() {


  return (
    <>
      <Routes>
        <Route path="/pqrsd-dnda/" element={<Formulario />} />
      </Routes>
    </>
  )
}

export default App
