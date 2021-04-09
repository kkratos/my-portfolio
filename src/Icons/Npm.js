import * as React from "react";

function SvgNpm(props) {
  return (
    <svg
      width={50}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 17.225h40V30.55H25v2.225h-8.887V30.55H5V17.225zm2.225 11.112h4.438v-6.674h2.224v6.674h2.226V19.45H7.225v8.887zm11.112-8.887v11.1h4.438v-2.213h4.45V19.45h-8.888zm4.438 2.213H25v4.45h-2.225v-4.45zm6.675-2.213v8.887h4.438v-6.674h2.224v6.674h2.225v-6.674h2.213v6.674h2.225V19.45H29.45z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgNpm;
