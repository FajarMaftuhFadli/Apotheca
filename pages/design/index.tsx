export default function index() {
  return (
    <div className="w-full p-4 py-10">
      <div className="mx-auto flex w-full max-w-2xl justify-evenly">
        <Card color="bg-indigo-400" />
        <Card />
      </div>
    </div>
  );
}

const Card = ({
  color = "unknown",
  hex = "unknown",
}: {
  color?: string;
  hex?: string;
}) => (
  <div className="mb-2 rounded-md p-4 ring-2 ring-slate-300">
    <div
      className={`mb-2 h-32 w-32 rounded-md ${
        color == "unknown" ? " ring-2 ring-slate-300" : color
      }`}
    ></div>
    <div>
      <h3 className={color == "unknown" ? "text-gray-300" : ""}>{color}</h3>
      <h4 className={hex == "unknown" ? "text-gray-300" : ""}>{hex}</h4>
    </div>
  </div>
);
