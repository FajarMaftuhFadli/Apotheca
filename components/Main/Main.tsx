export interface Props {
  backgroundColor?:
    | "bg-base-1"
    | "bg-base-2"
    | "bg-primary-1"
    | "bg-secondary-1"
    | "bg-tertiary-1"
    | "bg-quaternary-1";
  className?: string;
  children?: JSX.Element;
}

export default function Main({
  backgroundColor = "bg-base-1",
  className,
  children,
}: Props) {
  return (
    <main className={`px-4 ${className} ${backgroundColor}`}>{children}</main>
  );
}
