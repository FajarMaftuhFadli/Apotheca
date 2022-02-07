export interface Props {
  backgroundColor?:
    | "bg-primary-1"
    | "bg-secondary-1"
    | "bg-tertiary-1"
    | "bg-quaternary-1";
  hoverColor?:
    | "group-hover:bg-primary-2"
    | "group-hover:bg-secondary-2"
    | "group-hover:bg-tertiary-2"
    | "group-hover:bg-quaternary-2";
  activeColor?:
    | "group-active:bg-primary-3"
    | "group-active:bg-secondary-3"
    | "group-active:bg-tertiary-3"
    | "group-active:bg-quaternary-3";
  className?: string;
}

export default function Hamburger({
  backgroundColor = "bg-secondary-1",
  hoverColor = "group-hover:bg-secondary-2",
  activeColor = "group-active:bg-secondary-3",
  className,
}: Props) {
  return (
    <button className={`group flex h-5 flex-col justify-between ${className}`}>
      {[...Array(3)].map((v, i) => (
        <div
          key={i}
          className={`h-[0.20rem] w-7 ${backgroundColor} ${hoverColor} ${activeColor}`}
        ></div>
      ))}
    </button>
  );
}
