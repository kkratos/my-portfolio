import * as React from "react";

function SvgCss(props) {
  return (
    <svg
      width={50}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M42.777 45.14L25.002 50 7.227 45.14 3.125 0h43.753l-4.101 45.14z"
        fill="#1F62AE"
      />
      <path d="M25 3.125v43.36L39.425 42.2l3.838-39.075H25z" fill="#347DC6" />
      <path
        d="M38.067 9.375H11.886l.614 6.25H25l-12.11 4.672.577 6.265h17.005l-.538 6.25L25 34.36l-4.905-1.572-.512-3.1h-5.828l.717 7.793L25 40.61l10.513-3.132 1.548-17.181H25.04L37.5 15.625l.567-6.25z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCss;
