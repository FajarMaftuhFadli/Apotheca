export interface Props {
  id?: string;
  className?: string;
  direction?: "left" | "right";
}

export default function BtnArrow({ id, className, direction }: Props) {
  return (
    <div id={id} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-secondary-1 h-8 w-8 rounded-full bg-white shadow-md transition-transform  hover:-translate-y-1 active:translate-y-0`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {direction == "left" ? (
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        ) : direction == "right" ? (
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        ) : (
          ""
        )}
      </svg>
    </div>
  );
}
