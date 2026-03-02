import { useState, useMemo } from "react"
import AdminLayout from "../../layouts/AdminLayout"
import OrderTable, { Order, Status } from "../../components/OrderTable"

const statuses: Status[] = ["Complete", "Pending", "Cancelled"]

const productNames = [
  "Wireless Headphones",
  "Gaming Mouse",
  "Smart Watch",
  "Bluetooth Speaker",
  "Laptop Stand",
  "Mechanical Keyboard",
  "Phone Case",
  "4K Monitor",
]

const generateOrders = (): Order[] =>
  Array.from({ length: 15 }, (_, i) => ({
    id: 675900 + i,
    name: productNames[i % productNames.length],
    date: "17 Jan, 2024",
    items: Math.floor(Math.random() * 20) + 1,
    price: Math.floor(Math.random() * 500) + 100,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    blocked: false,
  }))

const Dashboard = () => {
  const [orders, setOrders] = useState<Order[]>(generateOrders())
  const [currentPage, setCurrentPage] = useState(1)
  const [newProductName, setNewProductName] = useState("")
  const [newPrice, setNewPrice] = useState("")

  const itemsPerPage = 8
  const totalPages = Math.ceil(orders.length / itemsPerPage)

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return orders.slice(start, start + itemsPerPage)
  }, [orders, currentPage])

  const handleDelete = (id: number) => {
    setOrders((prev) => prev.filter((o) => o.id !== id))
  }

  const handleToggleBlock = (id: number) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, blocked: !o.blocked } : o
      )
    )
  }

  const handleAddProduct = () => {
    if (!newProductName || !newPrice) return

    const newOrder: Order = {
      id: Date.now(),
      name: newProductName,
      date: "02 Mar, 2026",
      items: 1,
      price: Number(newPrice),
      status: "Pending",
      blocked: false,
    }

    setOrders((prev) => [newOrder, ...prev])
    setNewProductName("")
    setNewPrice("")
  }

  return (
    <AdminLayout>
      <div className="space-y-6">

        <h1 className="text-2xl font-semibold">
          Product Orders
        </h1>

        {/* 🔥 Add New Product Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex gap-4 items-end">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">
              Product Name
            </label>
            <input
              type="text"
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">
              Price
            </label>
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <button
            onClick={handleAddProduct}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Product
          </button>
        </div>

        <OrderTable
          orders={paginatedOrders}
          onDelete={handleDelete}
          onToggleBlock={handleToggleBlock}
        />

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-6">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-2 border rounded-lg ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>
    </AdminLayout>
  )
}

export default Dashboard