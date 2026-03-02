import { X, LayoutDashboard, BarChart3 } from "lucide-react"

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          w-64 min-h-screen
          bg-gradient-to-b from-gray-950 via-gray-900 to-black
          text-gray-300
          flex flex-col p-6
          shadow-2xl
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex justify-between items-center md:hidden mb-6">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex items-center gap-3 mb-10">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl shadow-lg">
            📦
          </div>
          <h1 className="text-xl font-bold tracking-wide text-white">
            E-Com
          </h1>
        </div>

        <nav className="space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]">
            <LayoutDashboard size={18} />
            <span className="font-medium">Order Management</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-200">
            <BarChart3 size={18} />
            <span>Analytics</span>
          </button>
        </nav>

        <div className="mt-auto pt-10">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl text-white text-sm shadow-lg">
            🚀 Upgrade to Pro
            <div className="text-xs opacity-80 mt-1">
              Unlock advanced analytics
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar