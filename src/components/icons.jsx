import React from "react"

export const RightArrow = ({ size = 20, color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-18 -18 572.009 572"
    >
      <path
        fill={color}
        d="M279.629 143.855c-4.852-4.855-12.723-4.855-17.582 0-4.856 4.852-4.856 12.727 0 17.583l94.164 94.164H106.02c-6.887 0-12.473 5.585-12.473 12.472 0 6.89 5.586 12.473 12.473 12.473h250.066l-94.164 94.164a12.42 12.42 0 000 17.586 12.25 12.25 0 008.855 3.617 12.778 12.778 0 008.852-3.617l115.367-115.363a12.36 12.36 0 003.621-8.86 12.856 12.856 0 00-3.62-8.851zm0 0"
      ></path>
      <path
        fill={color}
        d="M268.156-.074C159.7-.094 61.914 65.234 20.41 165.438-21.086 265.644 1.867 380.98 78.582 457.647c104.703 104.704 274.453 104.704 379.152 0 104.7-104.695 104.7-274.445 0-379.148A266.44 266.44 0 00268.156-.074zm0 511.355c-134.074 0-243.203-109.133-243.203-243.207S134.082 24.871 268.156 24.871 511.363 134 511.363 268.074 402.23 511.281 268.156 511.281zm0 0"
      ></path>
    </svg>
  )
}