import Hamburger from "./Hamburger/Hamburger";
import LogoFull from "../Logo/LogoFull";
import Nav_Ul from "./Nav/Nav_Ul";

export interface Props {
  backgroundColor?:
    | "bg-base-1"
    | "bg-base-2"
    | "bg-primary-1"
    | "bg-secondary-1"
    | "bg-tertiary-1"
    | "bg-quaternary-1";
  className?: string;
}

export default function Header({
  backgroundColor = "bg-base-2",
  className,
}: Props) {
  return (
    <header className={`px-4 shadow-md ${className} ${backgroundColor}`}>
      <nav
        className={`mx-auto flex h-16 max-w-4xl items-center justify-between py-2`}
      >
        <LogoFull className="h-full" />
        <Hamburger className="sm:hidden" />
        <Nav_Ul className="hidden space-x-4 sm:flex" />
      </nav>
    </header>
  );
}
