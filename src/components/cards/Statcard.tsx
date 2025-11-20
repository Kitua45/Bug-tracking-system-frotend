export default function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold text-green-700">{value}</h2>
    </div>
  );
}
