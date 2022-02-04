export interface Props {
  value?: string;
  backgroundColor?: "bg-primary" | "bg-secondary";
}

export default function Button({
  value = "BUTTON",
  backgroundColor = "bg-primary",
}: Props) {
  return (
    <button
      className={`rounded-md p-2 font-semibold text-gray-100 ${backgroundColor}`}
    >
      {value}
    </button>
  );
}
