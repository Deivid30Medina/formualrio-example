import { Route, Routes } from "react-router-dom"
import Formulario from "./components/Formulario"
import useIframeMessaging from "./utils/iframeMessaging"

function App() {

  useIframeMessaging();

  return (
    <>
      <Routes>
        <Route path="/pqrsd-dnda/" element={<Formulario />} />
      </Routes>
    </>
  )
}

export default App
