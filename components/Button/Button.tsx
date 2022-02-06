export interface Props {
  value?: string;
  backgroundColor?:
    | "bg-primary-1"
    | "bg-secondary-1"
    | "bg-tertiary-1"
    | "bg-quaternary-1";
  hoverColor?:
    | "hover:bg-primary-2"
    | "hover:bg-secondary-2"
    | "hover:bg-tertiary-2"
    | "hover:bg-quaternary-2";
  activeColor?:
    | "active:bg-primary-3"
    | "active:bg-secondary-3"
    | "active:bg-tertiary-3"
    | "active:bg-quaternary-3";
}

export default function Button({
  value = "BUTTON",
  backgroundColor = "bg-primary-1",
  hoverColor = "hover:bg-secondary-2",
  activeColor = "active:bg-primary-3",
}: Props) {
  return (
    <button
      className={`rounded-md p-2 font-semibold text-gray-100 shadow-md ${backgroundColor} ${hoverColor} ${activeColor}`}
    >
      {value}
    </button>
  );
}
