import Hamburger from "../Hamburger/Hamburger";

export interface Props {
  backgroundColor?: "bg-primary" | "bg-secondary";
}

export default function Header({ backgroundColor = "bg-primary" }: Props) {
  return (
    <header className={`px-4 py-2 ${backgroundColor}`}>
      <nav className="mx-auto flex h-8 max-w-2xl items-center justify-between text-lg font-semibold text-gray-200">
        <h3 className="">LOGO</h3>
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
