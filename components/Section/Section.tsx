export interface Props {
  children?: JSX.Element;
}

export default function Section({ children }: Props) {
  return <section className="mx-auto max-w-4xl">{children}</section>;
}
