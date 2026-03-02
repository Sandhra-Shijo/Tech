import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAdmin } = useAuth()

  if (!isAdmin) {
    return <Navigate to="/admin/login" />
  }

  return <>{children}</>
}

export default ProtectedRoute