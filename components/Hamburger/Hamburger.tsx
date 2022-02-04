export interface Props {
  backgroundColor?: "bg-gray-200" | "bg-indigo-400";
}

export default function Hamburger({ backgroundColor = "bg-gray-200" }: Props) {
  return (
    <button className="flex h-5 flex-col justify-between">
      {[...Array(3)].map(() => (
        <div className={`h-[0.15rem] w-7 ${backgroundColor}`}></div>
      ))}
    </button>
  );
}
