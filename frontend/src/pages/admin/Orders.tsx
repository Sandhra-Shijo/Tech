import AdminLayout from "../../layouts/AdminLayout"
import OrderTable from "../../components/OrderTable"

const Orders = () => {
  const orders = [
    { id: 675902, date: "17 Jan 2024", items: 10, price: 376, status: "Complete" },
    { id: 675909, date: "1 Feb 2024", items: 22, price: 210, status: "Pending" },
    { id: 675912, date: "2 Feb 2024", items: 12, price: 320, status: "Cancelled" },
  ]

  return (
    <AdminLayout>
      <div className="p-6 md:p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Order Management
          </h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            + New Product
          </button>
        </div>

        <OrderTable orders={orders} />
      </div>
    </AdminLayout>
  )
}

export default Orders