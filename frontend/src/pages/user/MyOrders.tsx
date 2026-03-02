import OrderTable from "../../components/OrderTable";
import { Order } from "../../types/order";

const UserOrders = () => {
  const myOrders: Order[] = [
  {
    id: 501,
    user: "You",
    total: 999,       // changed from amount
    status: "Pending",
    date: "28 Feb 2026",
  },
];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <OrderTable orders={myOrders} />
    </div>
  );
};

export default UserOrders;