interface Props {
  status: "Pending" | "Completed" | "Cancelled";
}

const StatusBadge = ({ status }: Props) => {
  let style = "";

  if (status === "Completed") {
    style = "bg-green-100 text-green-700";
  } else if (status === "Pending") {
    style = "bg-yellow-100 text-yellow-700";
  } else {
    style = "bg-red-100 text-red-700";
  }

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${style}`}>
      {status}
    </span>
  );
};

export default StatusBadge;