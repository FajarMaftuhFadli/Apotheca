export interface Props {
  textColor?:
    | "text-primary-1"
    | "text-secondary-1"
    | "text-tertiary-1"
    | "text-quaternary-1";
  hoverColor?:
    | "hover:text-primary-2"
    | "hover:text-secondary-2"
    | "hover:text-tertiary-2"
    | "hover:text-quaternary-2";
  activeColor?:
    | "active:text-primary-3"
    | "active:text-secondary-3"
    | "active:text-tertiary-3"
    | "active:text-quaternary-3";
  className?: string;
}

export default function Nav_Ul({
  textColor = "text-secondary-1",
  hoverColor = "hover:text-secondary-2",
  activeColor = "active:text-secondary-3",
  className,
}: Props) {
  return (
    <ul className={`${className}`}>
      {["MENU 1", "MENU 2", "MENU 3"].map((v, i) => (
        <li key={i}>
          <a
            className={`text-lg font-semibold ${textColor} ${hoverColor} ${activeColor}`}
            href=""
          >
            {v}
          </a>
        </li>
      ))}
    </ul>
  );
}
