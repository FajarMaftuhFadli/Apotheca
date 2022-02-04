export default function index() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col space-y-10 p-4 py-10">
      <div className="flex w-full flex-wrap gap-8">
        <Card color="bg-sky-300" />
        <Card />
        <Card color="bg-sky-400" />
        <Card />
      </div>
      <div className="flex flex-col space-y-4 rounded-md bg-gray-100 p-4 text-center ring-2 ring-slate-300">
        <h1 className="text-6xl">Lorem ipsum dolor sit amet.</h1>
        <h2 className="text-5xl">Lorem ipsum dolor sit amet.</h2>
        <h3 className="text-4xl">Lorem ipsum dolor sit amet.</h3>
        <h4 className="text-3xl">Lorem ipsum dolor sit amet.</h4>
        <h5 className="text-2xl">Lorem ipsum dolor sit amet.</h5>
        <h6 className="text-xl">Lorem ipsum dolor sit amet.</h6>
      </div>
      <div>
        <button className="rounded-md bg-indigo-400 p-2 font-semibold tracking-wide text-gray-100 shadow-md">
          BUTTON
        </button>
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
