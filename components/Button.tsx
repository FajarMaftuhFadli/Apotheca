export default function Button2({
  children = "BUTTON",
}: {
  children?: string;
}) {
  return (
    <button className="rounded-md bg-indigo-400 p-2 font-semibold text-gray-100">
      {children}
    </button>
  );
}
