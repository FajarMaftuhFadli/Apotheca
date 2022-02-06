import Hamburger from "../Hamburger/Hamburger";
import LogoFull from "../Logo/LogoFull";

export interface Props {
  backgroundColor?:
    | "bg-base-1"
    | "bg-primary-1"
    | "bg-secondary-1"
    | "bg-tertiary-1"
    | "bg-quaternary-1";
  textColor?:
    | "text-primary-1"
    | "text-secondary-1"
    | "text-tertiary-1"
    | "text-quaternary-1";
  className?: string;
}

export default function Header({
  backgroundColor = "bg-base-1",
  textColor = "text-secondary-1",
  className,
}: Props) {
  return (
    <header className={`px-4 py-2 ${className} ${backgroundColor}`}>
      <nav
        className={`mx-auto flex h-12 max-w-4xl items-center justify-between text-lg font-semibold ${textColor}`}
      >
        <div className="h-full">
          <LogoFull className="h-full" />
        </div>
        <Hamburger className="sm:hidden" />
        <ul className="hidden space-x-4 sm:flex">
          {["MENU 1", "MENU 2", "MENU 3"].map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
