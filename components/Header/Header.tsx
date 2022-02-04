import Hamburger from "../Hamburger/Hamburger";

export interface Props {
  backgroundColor?: "bg-primary" | "bg-secondary";
}

export default function Header({ backgroundColor = "bg-primary" }: Props) {
  return (
    <header className={`p-4 ${backgroundColor}`}>
      <nav className="mx-auto flex h-6 max-w-2xl items-center justify-between bg-gray-300/50">
        <h3 className="bg-gray-300/50">LOGO</h3>
        <Hamburger />
        <ul className="hidden space-x-4">
          <li className="bg-gray-300/50">LOREM</li>
          <li className="bg-gray-300/50">LOREM</li>
          <li className="bg-gray-300/50">LOREM</li>
        </ul>
      </nav>
    </header>
  );
}
