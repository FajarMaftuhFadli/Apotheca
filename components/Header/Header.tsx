import Hamburger from "./Hamburger/Hamburger";
import LogoFull from "../Logo/LogoFull";
import Nav_Ul from "./Nav/Nav_Ul";

export interface Props {
  backgroundColor?:
    | "bg-base-1"
    | "bg-primary-1"
    | "bg-secondary-1"
    | "bg-tertiary-1"
    | "bg-quaternary-1";
  className?: string;
}

export default function Header({
  backgroundColor = "bg-base-1",
  className,
}: Props) {
  return (
    <header className={`px-4 py-2 ${className} ${backgroundColor}`}>
      <nav
        className={`mx-auto flex h-12 max-w-4xl items-center justify-between`}
      >
        <LogoFull className="h-full" />
        <Hamburger className="sm:hidden" />
        <Nav_Ul className="hidden space-x-4 sm:flex" />
      </nav>
    </header>
  );
}
