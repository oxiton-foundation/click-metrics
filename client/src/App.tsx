import { Route, Routes } from "react-router-dom"
import IndexRoute from "./routes/Index.route"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexRoute />} />
      </Routes>
    </>
  )
}

export default App
