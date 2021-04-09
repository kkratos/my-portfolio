import * as React from "react";

function SvgFirebase(props) {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.809 24.091l-4.258 3.962-3.951-7.97 2.044-4.582c.518-.919 1.362-.92 1.88 0l4.285 8.59z"
        fill="#FFA000"
      />
      <path
        d="M30.551 28.053L14.64 42.855 26.6 20.084l3.951 7.969z"
        fill="#F57F17"
      />
      <path
        d="M39.466 18.035c.76-.73 1.547-.482 1.747.554l4.142 24.068-13.73 8.228c-.48.266-1.752.38-1.752.38s-1.161-.138-1.604-.384l-13.63-8.027 24.827-24.819z"
        fill="#FFCA28"
      />
      <path
        d="M26.6 20.084L14.64 42.855l5.327-33.28c.196-1.038.787-1.138 1.313-.222l5.32 10.73z"
        fill="#FFA000"
      />
    </svg>
  );
}

export default SvgFirebase;
