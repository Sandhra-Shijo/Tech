export type OrderStatus = "Pending" | "Completed" | "Cancelled"

export interface Order {
  id: number
  user: string
  total: number
  status: OrderStatus
  date: string
}