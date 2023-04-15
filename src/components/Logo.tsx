export function Logo(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -10.5 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <ellipse
        rx="2"
        ry="3.8"
        transform="translate(0,-0.3)"
        fill="currentColor"
      />
      <ellipse rx="2.8" ry="2" fill="currentColor" />
      <circle cx="0" cy="0" r="1" transform="translate(0,-2)" fill="#CFD4D9" />
      <path
        d="M1 0L1.86603 1.5H0.133975L1 0Z"
        fill="currentColor"
        transform="translate(0.2,2.4)"
      />
      <path
        d="M1 0L1.86603 1.5H0.133975L1 0Z"
        fill="currentColor"
        transform="translate(-2.2,2.4)"
      />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" transform="rotate(90)" />
        <ellipse rx="10" ry="4.5" transform="rotate(0)" />
        <ellipse rx="10" ry="4.5" transform="rotate(135)" />
      </g>
    </svg>
  );
}
