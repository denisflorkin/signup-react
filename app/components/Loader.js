
import React from 'react'
import theme from '../utils/theme'

const { blue } = theme

export function Loader() {
  const color = blue ? blue : '#4e4e4e';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <rect x="0" y="0" width="100" height="100" fill="none" />
      <g>
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"/>
        <circle cx="50" cy="50" r="9.6142" stroke={color} fill="none" strokeWidth="4" strokeLinecap="round">
          <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"/>
        </circle>
      </g>
      <g>
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"/>
        <circle cx="50" cy="50" r="32.3174" stroke={color} fill="none" strokeWidth="4" strokeLinecap="round">
          <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;22;44"/>
        </circle>
      </g>
    </svg>
    )
}
export default Loader
