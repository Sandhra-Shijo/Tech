import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/admin/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/admin" />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App