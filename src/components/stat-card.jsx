function StatCard({ value = 0, label = "Label" }) {
  return (
    <div className="flex flex-col items-center rounded-md border border-purple-200 bg-white px-4 py-5">
      <span className="text-4xl font-bold text-purple-800">{value}</span>
      <span className="text-sm font-semibold text-slate-600">{label}</span>
    </div>
  );
}

export default StatCard;
