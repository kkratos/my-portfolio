import * as React from "react";

function SvgHtml(props) {
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
        fill="#E44D26"
      />
      <path d="M25 3.125v43.36L39.425 42.2l3.838-39.075H25z" fill="#FF6C39" />
      <path
        d="M38.067 9.375H11.886l.614 6.25.967 10.938h17.006l-.554 6.225L25 34.358l-4.91-1.572-.328-3.1h-6.007l.717 7.793L25 40.61l10.513-3.132 1.546-17.166H19.144l-.39-4.687H37.5l.567-6.25z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgHtml;
