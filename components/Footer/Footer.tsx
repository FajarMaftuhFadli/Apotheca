import LogoFull from "../Logo/LogoFull";

export interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <footer className={`bg-base-1 h-64 p-4 shadow-md ${className}`}>
      <div className="max-w-4xl">
        <LogoFull className="h-10" />
      </div>
    </footer>
  );
}
