export interface Props {
  className?: string;
  children?: JSX.Element;
}

export default function Main({ className, children }: Props) {
  return <main className={className}>{children}</main>;
}
