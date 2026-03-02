import { useState } from "react"

export type Status = "Complete" | "Pending" | "Cancelled"

export interface Order {
  id: number
  name: string
  date: string
  items: number
  price: number
  status: Status
  blocked: boolean
}

interface Props {
  orders: Order[]
  onDelete: (id: number) => void
  onToggleBlock: (id: number) => void
}

const OrderTable = ({
  orders,
  onDelete,
  onToggleBlock,
}: Props) => {
  const [openMenu, setOpenMenu] = useState<number | null>(null)

  const getStatusStyle = (status: Status) => {
    switch (status) {
      case "Complete":
        return "bg-green-100 text-green-600"
      case "Pending":
        return "bg-yellow-100 text-yellow-600"
      case "Cancelled":
        return "bg-red-100 text-red-600"
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm">
      <table className="w-full text-left">
        <thead className="text-gray-400 text-sm border-b">
          <tr>
            <th className="p-4">Product</th>
            <th>Date</th>
            <th>Items</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className={`border-b hover:bg-gray-50 ${
                order.blocked ? "opacity-50" : ""
              }`}
            >
              <td className="p-4">
                <p className="font-semibold">{order.name}</p>
                <p className="text-xs text-gray-400">
                  Order #{order.id}
                </p>
              </td>

              <td>{order.date}</td>
              <td>{order.items}</td>
              <td>${order.price}</td>

              <td>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${getStatusStyle(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>

              <td className="relative">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === order.id ? null : order.id)
                  }
                  className="px-3 py-1 border rounded-lg"
                >
                  ⋮
                </button>

                {openMenu === order.id && (
                  <div className="absolute right-0 top-8 w-32 bg-white border rounded-lg shadow-xl z-50">
                    <button
                      onClick={() => onToggleBlock(order.id)}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                    >
                      {order.blocked ? "Unblock" : "Block"}
                    </button>

                    <button
                      onClick={() => onDelete(order.id)}
                      className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable