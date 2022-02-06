import LogoFull from "../Logo/LogoFull";

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

export default function Footer({
  backgroundColor = "bg-base-2",
  className,
}: Props) {
  return (
    <footer className={`z-0 h-60 ${className} ${backgroundColor}`}>
      <div className="before: h-full w-full p-4 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:-z-10 before:rotate-180 before:shadow-md">
        <div className="mx-auto max-w-4xl">
          <LogoFull className="h-10" />
        </div>
      </div>
    </footer>
  );
}
