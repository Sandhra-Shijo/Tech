import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { Menu } from "lucide-react"

interface Props {
  children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col">

        {/* Mobile Topbar */}
        <div className="md:hidden flex items-center p-4 bg-white shadow-sm">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
          <h1 className="ml-4 font-semibold">Admin Panel</h1>
        </div>

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>
    </div>
  )
}

export default AdminLayout